"use server"
import Subscription from "../models/subscription.models";
import { connectToDB } from "../mongoose"

interface Props{
    name:string;
    email:string;
}
export async function createSubscribtion({name,email}:Props){
    await connectToDB();
    try {
        const subscribe = new Subscription({
            name,
            email
        })

        await subscribe.save();
        
    } catch (error:any) {
        console.log("cant create subscribtion",error)
    }
}