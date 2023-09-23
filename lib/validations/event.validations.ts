import * as z  from 'zod'

export const EventValidation = z.object({
    image: z.string(),
      title: z.string(),
      date: z.object({
        start: z.string(),
        end: z.string()
      }),
      time: z.object({
        start: z.string(),
        end: z.string()
      }),
      description: z.string()
})