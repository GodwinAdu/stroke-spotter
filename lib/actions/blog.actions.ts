"use server"

import { connectToDB } from "../mongoose";
import Content from "../models/blog.models";
import { revalidatePath } from "next/cache";
import lzString from "lz-string";
import { currentProfile } from "@/hooks/intial-profile";
import User from "../models/user.models";

interface BlogcontentProps {
  image: string;
  title: string;
  shortDescription: string;
  tags: string;
  content: string;
}

export async function createBlogAdmin(blogContent: BlogcontentProps, path: string) {
  await connectToDB();
  const user = await currentProfile();

  try {
    console.log('Received blocks:', blogContent);

    const blog = new Content({
      postedBy:user?._id,
      image: blogContent.image,
      title: blogContent.title,
      shortDescription: blogContent.shortDescription,
      tags: blogContent.tags,
      blocks: blogContent.content, // Assuming "blocks" is the field in your Content schema
      approved: true
    },
    { upsert: true }
    );
    await blog.save()


    revalidatePath(path)
    console.log('Content saved successfully!', blog);
  } catch (error) {
    // Handling errors
    console.error('An error occurred while saving the content:', error);
  }
}
export async function createBlog(blogContent: BlogcontentProps, path: string) {
  await connectToDB();
  const user = await currentProfile();

  try {
    console.log('Received blocks:', blogContent);

    const blog = new Content({
      postedBy:user?._id,
      image: blogContent.image,
      title: blogContent.title,
      shortDescription: blogContent.shortDescription,
      tags: blogContent.tags,
      blocks: blogContent.content, // Assuming "blocks" is the field in your Content schema
    });
    await blog.save()


    revalidatePath(path)
    console.log('Content saved successfully!', blog);
  } catch (error) {
    // Handling errors
    console.error('An error occurred while saving the content:', error);
  }
}



export async function fetchBlog(pageNumber = 1, pageSize = 6) {
  await connectToDB();
  try {
    // Calculate the number of posts to skip based on the page number and page size.
    const skipAmount = (pageNumber - 1) * pageSize;

    const blogs = await Content.find({})
    .populate({
      path: 'postedBy',
      model: 'User', // Ensure this matches your User model name
    })
    .exec();

    if (!blogs) {
      console.log('No blogs found with the given id.');
      return;
    }
    const serializeBlogs = blogs.map(blog => {
      return {
        ...blog._doc,
        _id: blog._id.toString(),
        blocks: lzString.decompressFromEncodedURIComponent(blog.blocks)
      };
    });
    // Count the total number of top-level posts (threads) i.e., threads that are not comments.
    const totalBlogsCount = await Content.countDocuments({}); // Get the total count of posts



    const isNext = totalBlogsCount > skipAmount + serializeBlogs.length;

    return { serializeBlogs, isNext };

  } catch (error) {
    console.log('error in fetching blogs', error)
    return [];
  }
}

export async function deleteBlog(id:string){
  await connectToDB();
  try {
      const result = await Content.findByIdAndDelete(id)
      return result
      
  } catch (error) {
      console.log("Error in deleting blog", error)
  }
}


export async function fetchSingleBlog(blogId:string) {
  await connectToDB();
  try {
      // Use `findOne` to find a single document by its `_id`
    const singleBlog = await Content.findOne({ _id: blogId })
    .populate({
      path: 'postedBy',
      model: 'User', // Ensure this matches your User model name
    })
    .exec();

    if (!singleBlog) {
      console.log('No blog found with the given id.');
      return null; // Return null to indicate that no blog was found
    }

    // Serialize the found blog into an array (as requested)
    const serializedBlog = {
      ...singleBlog._doc, 
      _id: singleBlog._id.toString(),  // Convert ObjectId to string
      blocks: lzString.decompressFromEncodedURIComponent(singleBlog.blocks)
    };
    
    return serializedBlog;
      
  } catch (error) {
      console.error('Error fetching FAQ:', error);
      return []
  }
}