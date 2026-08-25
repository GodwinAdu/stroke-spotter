"use server"

import { currentProfile } from "@/hooks/intial-profile";
import Speech from "../models/speech.models";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";
import lzString from "lz-string";

interface SpeechcontentProps {
    image: string;
    title: string;
    shortDescription: string;
    content: string;
  }
  

export async function createSpeech(blogContent: SpeechcontentProps, path: string) {
    await connectToDB();
    const user = await currentProfile();
  
    try {
      console.log('Received blocks:', blogContent);
  
      const speech = new Speech({
        postedBy:user?._id,
        image: blogContent.image,
        title: blogContent.title,
        shortDescription: blogContent.shortDescription,
        blocks: blogContent.content, // Assuming "blocks" is the field in your Content schema
      });
      await speech.save()
  
  
      revalidatePath(path)
      console.log('Content saved successfully!', speech);
    } catch (error) {
      // Handling errors
      console.error('An error occurred while saving the content:', error);
    }
  }
  


  //   fetch speeches
export async function fetchSpeech(pageNumber = 1, pageSize = 6) {
  await connectToDB();
  try {
    // Calculate the number of posts to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    const speeches = await Speech.find({})
    .populate({
      path: 'postedBy',
      model: 'User', // Ensure this matches your User model name
    })
    .exec();

    if (!speeches) {
      console.log('No speeches found with the given id.');
      return { serializeSpeeches: [], isNext: false };
    }
    const serializeSpeeches = speeches.map(speech => {
      return {
        ...speech._doc,
        _id: speech._id.toString(),
        blocks: lzString.decompressFromEncodedURIComponent(speech.blocks)
      };
    });
    // Count the total number of top-level posts (threads) i.e., threads that are not comments.
    const totalResearchesCount = await Speech.countDocuments({}); // Get the total count of posts



    const isNext = totalResearchesCount > skipAmount + serializeSpeeches.length;

    return { serializeSpeeches, isNext };

  } catch (error) {
    console.log('error in fetching speeches', error)
    return { serializeSpeeches: [], isNext: false } ;
  }
}


export async function deleteSpeech(id:string){
  await connectToDB();
  try {
      const result = await Speech.findByIdAndDelete(id)
      return result
      
  } catch (error) {
      console.log("Error in deleting news", error)
  }
}