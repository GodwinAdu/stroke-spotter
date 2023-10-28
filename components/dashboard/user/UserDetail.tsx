import React from 'react';
import { Button } from '@/components/ui/button';
import { deleteUser, updateDuespay, updateResearchWriter, updateSpeechWriter, updateTrainee, updateUserAdmin, updateWriter } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';


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

  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      router.refresh();
    } catch (error) {
      console.error('Unable to delete user', error);
    }
  };

  const handleResearchStatus = async (id) => {
    try {
      await updateResearchWriter(id);
      router.refresh();
    } catch (error) {
      console.error('Unable to update research status', error);
    }
  };

  const handleDuesPay = async (id) => {
    try {
      await updateDuespay(id);
      router.refresh();
    } catch (error) {
      console.error('Unable to update dues payment status', error);
    }
  };

  const handleAdminStatus = async (id) => {
    try {
      await updateUserAdmin(id);
      router.refresh();
    } catch (error) {
      console.error('Unable to update admin status', error);
    }
  };

  const handleSpeechWriter = async (id) => {
    try {
      await updateSpeechWriter(id);
      router.refresh();
    } catch (error) {
      console.error('Unable to update speech writer status', error);
    }
  };

  const handleWriter = async (id) => {
    try {
      await updateWriter(id);
      router.refresh();
    } catch (error) {
      console.error('Unable to update writer status', error);
    }
  };

  const handleTrainee = async (id) => {
    try {
      await updateTrainee(id);
      router.refresh();
    } catch (error) {
      console.error('Unable to update trainee status', error);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto mt-8 p-4 rounded-lg bg-white shadow-md dark:bg-[#37404F] dark:border-strokedark">
      <div className="grid grid-cols-3 gap-4">
        <div className="border-r border-stroke dark:border-strokedark p-4 flex items-center justify-center flex-col xsm:flex-row">
          <Button onClick={() => handleWriter(user._id)} className="rounded-full bg-white p-2 text-black text-sm">
            {user.writer ? 'Yes' : 'No'}
          </Button>
          <p className="text-sm mt-2">Writer</p>
        </div>
        <div className="border-r border-stroke dark:border-strokedark p-4 flex items-center justify-center flex-col xsm:flex-row">
          <Button onClick={() => handleDuesPay(user._id)} className={cn('rounded-full bg-white p-2 text-sm', user.duesPay ? 'text-green-500' : 'text-red-500')}>
            {user.duesPay ? 'Paid' : 'Owed'}
          </Button>
          <p className="text-sm mt-2">Dues</p>
        </div>
        <div className="p-4 flex items-center justify-center flex-col xsm:flex-row">
          <Button onClick={() => handleAdminStatus(user._id)} className="rounded-full bg-white p-2 text-black dark:text-indigo/50 text-sm">
            {user.admin ? 'Admin' : 'User'}
          </Button>
          <p className="text-sm mt-2">Role</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <div className="flex flex-col items-center">
            <Button onClick={() => handleResearchStatus(user._id)} className="rounded-lg shadow-xl">
              {user.researchWriter ? 'Yes' : 'No'}
            </Button>
            <p className="text-xs mt-1">Research</p>
          </div>
          <div className="flex flex-col items-center">
            <Button onClick={() => handleTrainee(user._id)} className="rounded-lg shadow-xl">
              {user.trainee ? 'Yes' : 'No'}
            </Button>
            <p className="text-xs mt-1">Trainee</p>
          </div>
          <div className="flex flex-col items-center">
            <Button onClick={() => handleSpeechWriter(user._id)} className="rounded-lg shadow-xl">
              {user.speechWriter ? 'Yes' : 'No'}
            </Button>
            <p className="text-xs mt-1">Speech</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center">
          <Button onClick={() => handleDeleteUser(user._id)} className="rounded-lg bg-red-500 text-white">
            Delete User
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
