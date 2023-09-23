"use server"

import { revalidatePath } from "next/cache";
import Event from "../models/event.models";
import { connectToDB } from "../mongoose";

interface EventData {
    image: string;
    title: string;
    date: {
        start: string; // You can use Date type if you're passing actual Date objects.
        end: string;   // You can use Date type if you're passing actual Date objects.
    };
    time: {
        start: string; // Depending on your requirements, you can refine this type further.
        end: string;   // Depending on your requirements, you can refine this type further.
    };
    description: string;
    path: string
}

export async function createEvent({
    image,
    title,
    date,
    time,
    description,
    path
}: EventData){
    connectToDB();

    try {
        const event = new Event({
            image,
            title,
            startDate: date.start, // Change this
            endDate: date.end,     // And this
            time,
            description
        });
        await event.save();

        revalidatePath(path)

        console.log("Event saved successfully!", event);
    } catch (error) {
        console.error("Error saving event:", error);
        return [];
    }

}

export async function fetchEvent() {
    connectToDB();
    try {
        const events = await Event.find({});
        
        if (!events) {
            console.log('No FAQ found with the given id.');
            return;
        }
        const serializeEvents = events.map(event => {
            return {
              ...event._doc, 
              _id: event._id.toString()  // Convert ObjectId to string
            };
          });
          return serializeEvents
        
    } catch (error) {
        console.error('Error fetching FAQ:', error);
        return []
    }
}



