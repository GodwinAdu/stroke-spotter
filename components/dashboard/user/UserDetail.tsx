"use client";

import { Button } from "@/components/ui/button";
import { deleteUser, updateDuespay, updateResearchWriter, updateSpeechWriter, updateTrainee, updateUserAdmin, updateWriter } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface usersProps{
    _id: string;
    id:string;
     __v: 0;
     admin: boolean;
     bio: string;
     country: string;
     duesPay: boolean;
     image: string;
     memberId:string;
     memberType: string;
     name:string;
     onboarded: true;
     phone: string;
     profession: string;
     researchWriter: boolean;
     speechWriter: boolean;
     trainee: boolean;
     username: string;
     writer: true
     email: string,
     sex?: string
  }
  
const UserDetail = ({ user }:usersProps) => {
  const router = useRouter();

  const handleDeleteUser:(id:string) => void = async (id) => {
    try {
      await deleteUser(id);
      router.refresh();
    } catch (error: any) {
      console.log("unable to delete user", error);
    }
  };
  const handleResearchStatus:(id:string) => void = async (id) => {
    try {
      await updateResearchWriter(id);
      router.refresh();
    } catch (error: any) {
      console.log("unable to delete user", error);
    }
  };
  const handleDuesPay:(id:string) => void = async (id) => {
    try {
      await updateDuespay(id);
      router.refresh();
    } catch (error: any) {
      console.log("unable to delete user", error);
    }
  };
  const handleAdminStatus:(id:string) => void = async (id) => {
    try {
      await updateUserAdmin(id);
      router.refresh();
    } catch (error: any) {
      console.log("unable to delete user", error);
    }
  };
  const handleSpeechWriter:(id:string) => void = async (id) => {
    try {
      await updateSpeechWriter(id);
      router.refresh();
    } catch (error: any) {
      console.log("unable to delete user", error);
    }
  };
  const handleWriter = async (id) => {
    try {
      await updateWriter(id);
      router.refresh();
    } catch (error: any) {
      console.log("unable to delete user", error);
    }
  };
  const handleTrainee:(id:string) => void = async (id) => {
    try {
      await updateTrainee(id);
      router.refresh();
    } catch (error: any) {
      console.log("unable to delete user", error);
    }
  };

  return (
    <>
      <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
        <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
          <button 
            onClick={()=> handleWriter(user._id)}
            className="text-sm bg-white p-2 rounded-full text-black ">
            {user.writer ? "yes" : "No"}
          </button>
          <span className="text-sm">writer</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
          <button
            onClick={()=>handleDuesPay(user._id)}
            className={cn(
              "text-sm text-red-500 bg-white p-2 rounded-full",
              user.duesPay ? "text-green-500" : ""
            )}
          >
            {user.duesPay ? "payed" : "owed"}
          </button>
          <span className="text-sm">dues</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
          <button
            onClick={()=> handleAdminStatus(user._id)}
           className="text-sm bg-white p-2 rounded-full text-black dark:text-indig0/50">
            {user.admin ? "admin" : "user"}
          </button>
          <span className="text-sm">role</span>
        </div>
      </div>
      <div className="mt-6.5">
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <div className="flex flex-col gap-3 items-center">
            <Button
              onClick={() => handleResearchStatus(user._id)}
              className="rounded-lg shadow-xl"
            >
              {user.researchWriter ? "yes" : "no"}
            </Button>
            <p className="text-xs mt-1">Research</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Button 
                onClick={()=> handleTrainee(user._id)}
                className="rounded-lg shadow-xl">
              {user.trainee ? "yes" : "no"}
            </Button>
            <p className="text-xs mt-1"> Trainee</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <Button 
                onClick={()=>handleSpeechWriter(user._id)}
                className="rounded-lg shadow-xl">
              {user.speechWriter ? "yes" : "no"}
            </Button>
            <p className="text-xs mt-1">Speech </p>
          </div>
        </div>
        <div className="mt-4 mb-5 flex justify-center items-center">
          <Button
            onClick={() => handleDeleteUser(user._id)}
            className="bg-red-500 rounded-lg"
          >
            Delete User
          </Button>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
