"use client"

import * as z from "zod"

export const faqSchema = z.object({
    question: z.string().nonempty().min(3,{message:'Minimum 3 characters'}),
    answer:z.string().nonempty().min(3,{message:'Minimum 3 characters'}),
})
