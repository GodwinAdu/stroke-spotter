"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.models";
import { connectToDB } from "../mongoose";
import bcrypt from 'bcrypt'
import { generateMembershipId } from "../utils";
// import jwt from "jsonwebtoken";



export async function fetchUser(userId: string) {
    try {
      connectToDB();
  
      return await User.findOne({ id: userId });
    } catch (error: any) {
      throw new Error(`Failed to fetch user: ${error.message}`);
    }
  }
interface Params {
    userId: string;
    username: string;
    name: string;
    email:string,
    phone:string,
    gender:string;
    country:string;
    profession:string;
    bio: string;
    image: string;
    path: string;
  }

export async function updateUser({
    userId,
    bio,
    name,
    path,
    username,
    email,
    phone,
    gender,
    country,
    profession,
    image,
  }: Params): Promise<void> {
    const uniqueId = await generateMembershipId()
    try {
      connectToDB();
  
      await User.findOneAndUpdate(
        { id: userId },
        {
          username: username.toLowerCase(),
          name,
          bio,
          image,
          email,
          phone,
          gender,
          profession,
          memberId:uniqueId,
          country,
          onboarded: true,
        },
        { upsert: true }
      );
  
      if (path === "/profile/edit") {
        revalidatePath(path);
      }
    } catch (error: any) {
      throw new Error(`Failed to create/update user: ${error.message}`);
    }
  }