"use server"

import { revalidatePath } from "next/cache";

import { currentProfile } from "@/hooks/intial-profile";
import { connectToDB } from "../mongoose";
import Report from "../models/training.models";


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