"use server"

import { revalidatePath } from "next/cache";

import { currentProfile } from "@/hooks/intial-profile";
import { connectToDB } from "../mongoose";
import Report from "../models/training.models";
import lzString from  "lz-string"


interface TrainingcontentProps {
    image: string;
    title: string;
    shortDescription: string;
    content: string;
  }

export async function createTrainPost(trainingContent: TrainingcontentProps, path: string) {
    await connectToDB();
    const user = await currentProfile();
  
    try {
  
      const training = new Report({
        postedBy:user?._id,
        image:trainingContent.image,
        title:trainingContent.title,
        shortDescription:trainingContent.shortDescription,
        blocks:trainingContent.content, // Assuming "blocks" is the field in your Content schema
      });
      const savePost = await training.save()
  
  
      revalidatePath(path)
      console.log('Content saved successfully!', training);
      return savePost;
    } catch (error) {
      // Handling errors
      console.error('An error occurred while saving the content:', error);
    }
  }


  export async function fetchTrainPost(pageNumber = 1, pageSize = 6) {
  await connectToDB();
  try {
    // Calculate the number of posts to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    const trainings = await Report.find({})
    .populate({
      path: 'postedBy',
      model: 'User', // Ensure this matches your User model name
    })
    .exec();

    if (!trainings) {
      console.log('No trainings found with the given id.');
      return { serializeTrainings: [], isNext: false };
    }
    const serializeTrainings = trainings.map(train => {
      return {
        ...train._doc,
        _id: train._id.toString(),
        blocks: lzString.decompressFromEncodedURIComponent(train.blocks)
      };
    });
    // Count the total number of top-level posts (threads) i.e., threads that are not comments.
    const totalTrainCount = await Report.countDocuments({}); // Get the total count of posts



    const isNext = totalTrainCount > skipAmount + serializeTrainings.length;

    return { serializeTrainings, isNext };

  } catch (error) {
    console.log('error in fetching trainings', error)
    return { serializeTrainings: [], isNext: false };
  }
}



export async function deleteTraining(id: string) {
  await connectToDB();
  try {
    const result = await Report.findByIdAndDelete(id);
    if (result) {
      console.log('News deleted successfully:', result);
    } else {
      console.log('News not found or not deleted.');
    }
    return result;
  } catch (error) {
    console.log('Error in deleting news:', error);
  }
}



