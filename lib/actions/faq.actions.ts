"use server"

import mongoose from "mongoose";
import Faq from "../models/faq.models";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";


/**
 * Save a new FAQ
 * @param {string} question - The question text.
 * @param {string} answer - The answer text.
 * @returns {Promise<mongoose.Document>} The saved FAQ document.
 */
export async function saveFaq(question: string, answer: string,path:string) {
    connectToDB();
    const faq = new Faq({
        question,
        answer
    });

    try {
        const savedFaq = await faq.save();
        
        revalidatePath(path);
    } catch (error) {
        console.error('Error saving FAQ:', error);
        throw error;
    }
}


export async function fetchFaq() {
    connectToDB();
    try {
        const faqs = await Faq.find({});
        
        if (!faqs) {
            console.log('No FAQ found with the given id.');
            return;
        }
        const serializedFaqs = faqs.map(faq => {
            return {
              ...faq._doc, 
              _id: faq._id.toString()  // Convert ObjectId to string
            };
          });
          return serializedFaqs
        
    } catch (error) {
        console.error('Error fetching FAQ:', error);
        return []
    }
}

export async function deleteFaq(id:string){
    connectToDB();
    try {
        const result = await Faq.findByIdAndDelete(id)
        return result
        
    } catch (error) {
        console.log("Error in deleting faq", error)
    }
}

