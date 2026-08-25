"use server"

import Contact from "../models/contact.models";
import { connectToDB } from "../mongoose"

interface Props{
    name:string;
    email:string;
    message:string
}

export async function createContact({post}:Props){
    await connectToDB();
    try {
        const contact = new Contact({
            name:post.name,
            email:post.email,
            message:post.message
        })
        await contact.save();

    } catch (error:any) {
        console.log("unable to create contact post",error)
    }
}