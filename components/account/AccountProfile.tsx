"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useUploadThing } from "@/lib/uploadthing2";
import { isBase64Image } from "@/lib/utils";
import { UserValidation } from "@/lib/validations/user.validations";
import { updateUser } from "@/lib/actions/user.actions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


// import { updateUser } from "@/lib/actions/user.actions";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    email:string;
    phone:string;
    gender:string;
    country: string;
    profession:string;
    bio: string;
    image: string;
  };

}

const AccountProfile = ({ user }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const { startUpload } = useUploadThing("media");

  const [files, setFiles] = useState<File[]>([]);
  const [toggleBtn, setToggleBtn ] = useState(false);

  const form = useForm<z.infer<typeof UserValidation>>({
    resolver: zodResolver(UserValidation),
    defaultValues: {
      profile_photo: user?.image ? user.image : "",
      name: user?.name ? user.name : "",
      username: user?.username ? user.username : "",
      email:user?.email ? user.email : "",
      // phone:user?.phone ? user.phone : "",
      gender: user?.gender ? user.gender : "",
      profession: user?.profession ? user.profession : "",
      country: user?.country ? user.country : "",
      bio: user?.bio ? user.bio : "",
    },
  });
  
  let validate = true
  const handleContinue = (e:any) =>{
    e.preventDefault()
    if(validate){
      setToggleBtn(true)
    }
  }

  const onSubmit = async (values: z.infer<typeof UserValidation>) => {
    const blob = values.profile_photo;

    const hasImageChanged = isBase64Image(blob);
    if (hasImageChanged) {
      const imgRes = await startUpload(files);

      if (imgRes && imgRes[0].url) {
        values.profile_photo = imgRes[0].url;
      }
    }

    await updateUser({
      name: values.name,
      path: pathname,
      username: values.username,
      userId: user.id,
      bio: values.bio,
      email: values.email,
      // phone:values.phone,
      gender:values.gender,
      profession:values.profession,
      country:values.country,
      image: values.profile_photo,
    });

    if (pathname === "/profile/edit") {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleImage = (
    e: ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string) => void
  ) => {
    e.preventDefault();

    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setFiles(Array.from(e.target.files));

      if (!file.type.includes("image")) return;

      fileReader.onload = async (event) => {
        const imageDataUrl = event.target?.result?.toString() || "";
        fieldChange(imageDataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form
        className='flex flex-col justify-start gap-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
       
          <FormField
            control={form.control}
            name='profile_photo'
            render={({ field }) => (
              <FormItem className='flex items-center gap-4'>
                <FormLabel className='account-form_image-label'>
                  {field.value ? (
                    <Image
                      src={field.value}
                      alt='profile_icon'
                      width={96}
                      height={96}
                      priority
                      className='rounded-full object-contain'
                    />
                  ) : (
                    <Image
                      src='/assets/profile.svg'
                      alt='profile_icon'
                      width={24}
                      height={24}
                      className='object-contain'
                    />
                  )}
                </FormLabel>
                <FormControl className='flex-1 text-base-semibold text-gray-200'>
                  <Input
                    type='file'
                    accept='image/*'
                    placeholder='Add profile photo'
                    className='account-form_image-input'
                    onChange={(e) => handleImage(e, field.onChange)}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-1'>
                <FormLabel className='text-base-semibold text-white'>
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-1'>
                <FormLabel className='text-base-semibold text-white'>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-1'>
                <FormLabel className='text-base-semibold text-white'>
                  Phone
                </FormLabel>
                <FormControl>
                  <Input
                    type='phone'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-1'>
                <FormLabel className='text-base-semibold text-white'>
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='profession'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-1'>
                <FormLabel className='text-base-semibold text-white'>
                  Profession
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='country'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-1'>
                <FormLabel className='text-base-semibold text-white'>
                  Country
                </FormLabel>
                <FormControl>
                  <Input
                    type='text'
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className='flex w-full flex-col gap-1'>
              <FormLabel className='text-base-semibold text-white'>Gender</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className='account-form_input no-focus'>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="text-white bg-black">
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="preffered not to say">Preffered not to say</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
            control={form.control}
            name='bio'
            render={({ field }) => (
              <FormItem className='flex w-full flex-col gap-1'>
                <FormLabel className='text-base-semibold text-white'>
                  Bio
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    className='account-form_input no-focus'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='bg-primary '>
            continue !!!
          </Button>
       

      </form>
    </Form>
  );
};

export default AccountProfile;
