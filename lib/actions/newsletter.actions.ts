"use server"

import { currentProfile } from "@/hooks/intial-profile";
import Newsletter from "../models/newsletter.models";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";
import lzString from "lz-string"


interface Props {
    image: string;
    title: string;
    shortDescription: string;
    content: string;
  }

export async function createNewsletter(newsContent: Props, path: string) {
    await connectToDB();
    const user = await currentProfile();
  
    try {
  
      const newsletter = new Newsletter({
        postedBy:user?._id,
        image: newsContent.image,
        title: newsContent.title,
        shortDescription: newsContent.shortDescription,
        blocks: newsContent.content, // Assuming "blocks" is the field in your Content schema
      });
      await newsletter.save()
  
  
      revalidatePath(path)
      console.log('Content saved successfully!', newsletter);
    } catch (error) {
      // Handling errors
      console.error('An error occurred while saving the content:', error);
    }
  }


  export async function fetchNewsletter(pageNumber = 1, pageSize = 6) {
    await connectToDB();
    try {
      // Calculate the number of posts to skip based on the page number and page size.
      const skipAmount = (pageNumber - 1) * pageSize;
  
      const newsList = await Newsletter.find({})
      .populate({
        path: 'postedBy',
        model: 'User', // Ensure this matches your User model name
      })
      .exec();
  
      if (!newsList) {
        console.log('No newsList found with the given id.');
        return { serializeNewsletter: [], isNext: false };
      }
      const serializeNewsletter = newsList.map(news => {
        return {
          ...news._doc,
          _id: news._id.toString(),
          blocks: lzString.decompressFromEncodedURIComponent(news.blocks)
        };
      });
      // Count the total number of top-level posts (threads) i.e., threads that are not comments.
      const totalBlogsCount = await Newsletter.countDocuments({}); // Get the total count of posts
  
  
  
      const isNext = totalBlogsCount > skipAmount + serializeNewsletter.length;
  
      return { serializeNewsletter, isNext };
  
    } catch (error) {
      console.log('error in fetching newsList', error)
      return { serializeNewsletter: [], isNext: false };
    }
  }
  