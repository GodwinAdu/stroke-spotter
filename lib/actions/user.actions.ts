"use server"

import { revalidatePath } from "next/cache";
import User from "../models/user.models";
import { connectToDB } from "../mongoose";
import bcrypt from 'bcrypt'
import { generateMembershipId } from "../utils";
// import jwt from "jsonwebtoken";



export async function fetchUser(userId: string) {
  try {
    console.log(userId, "userId")
    await connectToDB();
    const user = await User.findOne({ id: userId });
    if (!user) {
      return null
    }
    return JSON.parse(JSON.stringify(user))
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}
interface Params {
  userId: string;
  username: string;
  name: string;
  email: string,
  // phone: string,
  gender: string;
  country: string;
  profession: string;
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
  // phone,
  gender,
  country,
  profession,
  image,
}: Params): Promise<void> {
  const uniqueId = await generateMembershipId()
  try {
    await connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        email,
        // phone,
        sex: gender,
        profession,
        memberId: uniqueId,
        country,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit" || "/dashboard/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}



export async function fetchUsers() {
  try {
  await connectToDB();

    const users = await User.find({});

    if (!users) return [];

    const serializedUsers = users.map((user) => {
      return {
        ...user._doc,
        _id: user._id.toString()
      }
    })

    return serializedUsers
  } catch (error: any) {
    console.log("unable to fetch users", error)
    return []
  }
}


export async function updateUserAdmin(id: string) {
  await connectToDB();
  try {
    // Find the document by ID
    const user = await User.findById(id);

    if (!user) {
      // Handle the case where the user with the provided ID is not found
      return null;
    }

    // Update the 'approved' field
    user.admin = !user.admin; // Toggle the 'admin' field

    // Save the updated document
    const updatedBUser = await user.save();

    return updatedBUser;
  } catch (error) {
    console.log("Error in updating user", error);
    throw error; // You might want to handle the error more gracefully
  }
}


export async function updateSpeechWriter(id: string) {
  await connectToDB();
  try {
    // Find the document by ID
    const user = await User.findById(id);

    if (!user) {
      // Handle the case where the user with the provided ID is not found
      return null;
    }

    // Update the 'approved' field
    user.speechWriter = !user.speechWriter; // Toggle the 'admin' field

    // Save the updated document
    const updatedBUser = await user.save();

    return updatedBUser;
  } catch (error) {
    console.log("Error in updating user", error);
    throw error; // You might want to handle the error more gracefully
  }
}


export async function updateResearchWriter(id: string) {
  await connectToDB();
  try {
    // Find the document by ID
    const user = await User.findById(id);

    if (!user) {
      // Handle the case where the user with the provided ID is not found
      return null;
    }

    // Update the 'approved' field
    user.researchWriter = !user.researchWriter; // Toggle the 'admin' field

    // Save the updated document
    const updatedBUser = await user.save();

    return updatedBUser;
  } catch (error) {
    console.log("Error in updating user", error);
    throw error; // You might want to handle the error more gracefully
  }
}


export async function updateWriter(id: string) {
  await connectToDB();
  try {
    // Find the document by ID
    const user = await User.findById(id);

    if (!user) {
      // Handle the case where the user with the provided ID is not found
      return null;
    }

    // Update the 'approved' field
    user.writer = !user.writer; // Toggle the 'admin' field

    // Save the updated document
    const updatedBUser = await user.save();

    return updatedBUser;
  } catch (error) {
    console.log("Error in updating user", error);
    throw error; // You might want to handle the error more gracefully
  }
}


export async function updateTrainee(id: string) {
  await connectToDB();
  try {
    // Find the document by ID
    const user = await User.findById(id);

    if (!user) {
      // Handle the case where the user with the provided ID is not found
      return null;
    }

    // Update the 'approved' field
    user.trainee = !user.trainee; // Toggle the 'admin' field

    // Save the updated document
    const updatedBUser = await user.save();

    return updatedBUser;
  } catch (error) {
    console.log("Error in updating user", error);
    throw error; // You might want to handle the error more gracefully
  }
}

export async function updateDuespay(id: string) {
  await connectToDB();
  try {
    // Find the document by ID
    const user = await User.findById(id);

    if (!user) {
      // Handle the case where the user with the provided ID is not found
      return null;
    }

    // Update the 'approved' field
    user.duesPay = !user.duesPay; // Toggle the 'admin' field

    // Save the updated document
    const updatedBUser = await user.save();

    return updatedBUser;
  } catch (error) {
    console.log("Error in updating user", error);
    throw error; // You might want to handle the error more gracefully
  }
}


export async function deleteUser(id: string) {
  await connectToDB();
  try {

    const deleteUser = await User.findByIdAndDelete(id)
    return deleteUser;

  } catch (error) {
    console.log("error in deleting user")
  }
}