"use server"

import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";
import lzString from "lz-string";
import { currentProfile } from "@/hooks/intial-profile";
import User from "../models/user.models";
import News from "../models/news.models";

interface NewscontentProps {
  image: string;
  title: string;
  shortDescription: string;
  content: string;
}

export async function createNewsAdmin(newsContent: NewscontentProps, path: string) {
  await connectToDB();
  const user = await currentProfile();

  try {
    console.log('Received blocks:', newsContent);

    const news = new News({
      postedBy:user?._id,
      image: newsContent.image,
      title: newsContent.title,
      shortDescription: newsContent.shortDescription,
      blocks: newsContent.content, // Assuming "blocks" is the field in your Content schema
      approved:true
    });
    await news.save()


    revalidatePath(path)
    console.log('Content saved successfully!', news);
  } catch (error) {
    // Handling errors
    console.error('An error occurred while saving the content:', error);
  }
}

export async function createNews(newsContent: NewscontentProps, path: string) {
  await connectToDB();
  const user = await currentProfile();

  try {
    console.log('Received blocks:', newsContent);

    const news = new News({
      postedBy:user?._id,
      image: newsContent.image,
      title: newsContent.title,
      shortDescription: newsContent.shortDescription,
      blocks: newsContent.content, // Assuming "blocks" is the field in your Content schema
    });
    await news.save()


    revalidatePath(path)
    console.log('Content saved successfully!', news);
  } catch (error) {
    // Handling errors
    console.error('An error occurred while saving the content:', error);
  }
}



export async function fetchNews(pageNumber = 1, pageSize = 6) {
  await connectToDB();
  try {
    // Calculate the number of posts to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    const newsList = await News.find({})
    .populate({
      path: 'postedBy',
      model: 'User', // Ensure this matches your User model name
    })
    .exec();

    if (!newsList) {
      console.log('No newsList found with the given id.');
      return { serializeBlogs: [], isNext: false };
    }
    const serializeNews = newsList.map(news => {
      return {
        ...news._doc,
        _id: news._id.toString(),
        blocks: lzString.decompressFromEncodedURIComponent(news.blocks)
      };
    });
    // Count the total number of top-level posts (threads) i.e., threads that are not comments.
    const totalBlogsCount = await News.countDocuments({}); // Get the total count of posts



    const isNext = totalBlogsCount > skipAmount + serializeNews.length;

    return { serializeNews, isNext };

  } catch (error) {
    console.log('error in fetching newsList', error)
    return { serializeBlogs: [], isNext: false };
  }
}

export async function fetchApprovedNews(pageNumber = 1, pageSize = 6) {
  await connectToDB();
  try {
    // Calculate the number of news items to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    const newsList = await News.find({ approved: true }) // Filter by 'approved' field
      .populate({
        path: 'postedBy',
        model: 'User', // Ensure this matches your User model name
      })
      .skip(skipAmount)
      .limit(pageSize)
      .exec();

    if (!newsList || newsList.length === 0) {
      console.log('No approved news found.');
      return { serializeNews: [], isNext: false };
    }

    const serializeNews = newsList.map(news => {
      return {
        ...news._doc,
        _id: news._id.toString(),
        blocks: lzString.decompressFromEncodedURIComponent(news.blocks)
      };
    });

    // Count the total number of approved news items
    const totalApprovedNewsCount = await News.countDocuments({ approved: true });

    const isNext = totalApprovedNewsCount > skipAmount + serializeNews.length;

    return { serializeNews, isNext };

  } catch (error) {
    console.log('Error in fetching approved news', error);
    return { serializeNews: [], isNext: false };
  }
}


export async function deleteNews(id:string){
  await connectToDB();
  try {
      const result = await News.findByIdAndDelete(id)
      return result
      
  } catch (error) {
      console.log("Error in deleting news", error)
  }
}


export async function updateNews(id: string) {
  await connectToDB();
  try {
    // Find the document by ID
    const news = await News.findById(id);

    if (!news) {
      // Handle the case where the news with the provided ID is not found
      return null;
    }

    // Update the 'approved' field
    news.approved = !news.approved; // Toggle the 'approved' field

    // Save the updated document
    const updatedNews = await news.save();

    return updatedNews;
  } catch (error) {
    console.log("Error in updating news", error);
    throw error; // You might want to handle the error more gracefully
  }
}


export async function fetchSingleNews(blogId:string) {
  await connectToDB();
  try {
      // Use `findOne` to find a single document by its `_id`
    const singleNew = await News.findOne({ _id: blogId })
    .populate({
      path: 'postedBy',
      model: 'User', // Ensure this matches your User model name
    })
    .exec();

    if (!singleNew) {
      console.log('No news found with the given id.');
      return null; // Return null to indicate that no news was found
    }

    // Serialize the found news into an array (as requested)
    const serializedNew = {
      ...singleNew._doc, 
      _id: singleNew._id.toString(),  // Convert ObjectId to string
      blocks: lzString.decompressFromEncodedURIComponent(singleNew.blocks)
    };
    
    return serializedNew;
      
  } catch (error) {
      console.error('Error fetching FAQ:', error);
      return []
  }
}