"use server"

import Feedback from "../models/feedback.models";
import { connectToDB } from "../mongoose";

interface Props{
    feedback:string
}

export async function createFeedback({feedback}:Props){
    await connectToDB();
    try {
        const feedbacks = new Feedback({
            description:feedback,
        })

        await feedbacks.save()
        
    } catch (error:any) {
        console.log("error occured while creating feedback",error)
    }
}