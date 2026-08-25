"use server"

import { revalidatePath } from "next/cache";

import { currentProfile } from "@/hooks/intial-profile";
import { connectToDB } from "../mongoose";
import lzString from "lz-string";
import Research from "../models/research.models";


interface ResearchcontentProps {
    image: string;
    title: string;
    shortDescription: string;
    content: string;
  }

export async function createResearch(researchContent: ResearchcontentProps, path: string) {
    await connectToDB();
    const user = await currentProfile();
  
    try {
  
      const research = new Research({
        postedBy:user?._id,
        image:researchContent.image,
        title:researchContent.title,
        shortDescription:researchContent.shortDescription,
        blocks:researchContent.content, // Assuming "blocks" is the field in your Content schema
      });
      const savePost = await research.save()
  
  
      revalidatePath(path)
      console.log('Content saved successfully!', research);
      return savePost;
    } catch (error) {
      // Handling errors
      console.error('An error occurred while saving the content:', error);
    }
  }

//   fetch researches
export async function fetchResearch(pageNumber = 1, pageSize = 6) {
    await connectToDB();
    try {
      // Calculate the number of posts to skip based on the page number and page size.
      const skipAmount = (pageNumber - 1) * pageSize;
  
      const researches = await Research.find({})
      .populate({
        path: 'postedBy',
        model: 'User', // Ensure this matches your User model name
      })
      .exec();
  
      if (!researches) {
        console.log('No researches found with the given id.');
        return { serializeResearchs: [], isNext: false };
      }
      const serializeResearchs = researches.map(research => {
        return {
          ...research._doc,
          _id: research._id.toString(),
          blocks: lzString.decompressFromEncodedURIComponent(research.blocks)
        };
      });
      // Count the total number of top-level posts (threads) i.e., threads that are not comments.
      const totalBlogsCount = await Research.countDocuments({}); // Get the total count of posts
  
  
  
      const isNext = totalBlogsCount > skipAmount + serializeResearchs.length;
  
      return { serializeResearchs, isNext };
  
    } catch (error) {
      console.log('error in fetching researches', error)
      return { serializeResearchs: [], isNext: false } ;
    }
  }



  export async function deleteResearch(id:string){
    await connectToDB();
    try {
        const result = await Research.findByIdAndDelete(id)
        return result
        
    } catch (error) {
        console.log("Error in deleting news", error)
    }
  }