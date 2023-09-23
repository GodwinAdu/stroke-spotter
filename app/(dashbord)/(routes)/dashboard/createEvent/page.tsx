"use client";

import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { EventValidation } from "@/lib/validations/event.validations";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import { Textarea } from "@/components/ui/textarea";

import { FileUpload } from "@/components/file-upload";
import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { Input } from "@/components/ui/input";
import { createEvent } from "@/lib/actions/event.actions";
import {usePathname, useRouter } from "next/navigation"

const EventForm = () => {

    const path = usePathname()
    const router = useRouter()
  const form = useForm<z.infer<typeof EventValidation>>({
    resolver: zodResolver(EventValidation),
    defaultValues: {
      image: "",
      title: "",
      date: {
        start: "",
        end: "",
      },
      time: {
        start: "",
        end: "",
      },
      description: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof EventValidation>) => {
    await createEvent({
        image:values.image,
        title:values.title,
        date: values.date,
        time:values.time,
        description:values.description,
        path,
  });

   router.back();
  };

  return (
    <>
      <Breadcrumb pageName="Create Events" />
      <div className="flex justify-center items-center">
        <div className="bg-gray-600 max-w-xl w-[95%]">
          <Form {...form}>
            <form
              className="flex flex-col justify-start gap-10"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex items-center justify-center text-center">
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FileUpload
                          endpoint="media"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-2">
                    <FormLabel className="text-base-semibold text-light-2">
                      Title
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter Title"
                        className="account-form_input no-focus"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date.start"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-1">
                    <FormLabel className="text-base-semibold text-light-2">
                      Start Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="account-form_input no-focus"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date.end"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-1">
                    <FormLabel className="text-base-semibold text-light-2">
                      End Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        className="account-form_input no-focus"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time.start"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-1">
                    <FormLabel className="text-base-semibold text-light-2">
                      Start Time
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        className="account-form_input no-focus"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time.end"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-1">
                    <FormLabel className="text-base-semibold text-light-2">
                      End Time
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="time"
                        className="account-form_input no-focus"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="flex w-full flex-col gap-1">
                    <FormLabel className="text-base-semibold text-light-2">
                      Description
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        rows={5}
                        placeholder="Please short description here"
                        className="account-form_input no-focus"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="outline">
                Create
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default EventForm;
