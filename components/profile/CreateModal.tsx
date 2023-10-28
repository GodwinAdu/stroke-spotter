import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

interface ModalProps {
  id: string;
  researchWriter: string;
  speechWriter: string;
  writer: string;
  trainee: string;
  duesPay: boolean;
}

export function CreateModal({
  id,
  duesPay,
  researchWriter,
  speechWriter,
  writer,
  trainee,
}: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={!duesPay}
          variant={!duesPay ? "destructive" : "primary"}
        >
          Create post
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[96%] max-w-3xl">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
          <DialogDescription>
            Create post to be published on the page.
          </DialogDescription>
        </DialogHeader>
        <div className="items-center ">
          {writer && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Create Blog
              </h2>
              <div className="flex justify-around items-center ">
                <Link
                  href={`/create-blog`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                  Write Blog
                </Link>
                <Link
                  href={`/create-news`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white hover:bg-gray-100 transition duration-300"
                >
                  Write News
                </Link>
              </div>
            </div>
          )}
          {trainee && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Training Post
              </h2>
              <div className="flex justify-center items-center ">
                <Link
                  href={`/create-training`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                  Write Training post
                </Link>
              </div>
            </div>
          )}

          {speechWriter && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Our Speeches
              </h2>
              <div className="flex justify-center items-center ">
                <Link
                  href={`/create-speeches`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                  Write Our Speeches
                </Link>
              </div>
            </div>
          )}

          {researchWriter && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Research
              </h2>
              <div className="flex justify-center items-center ">
                <Link
                  href={`/create-research`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                  Research and Report
                </Link>
              </div>
            </div>
          )}
          {!writer && !trainee && !researchWriter && !speechWriter && (
            <div className="mt-5">
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-red-500 mb-4">Oops!</p>
                <p className="text-lg text-gray-700 mb-4">
                  It appears you are not eligible to create a post.
                </p>
                <p className="text-base text-gray-600">
                  Please contact the administrator for assistance.
                </p>
                <button className="mt-4 px-6 py-3 rounded-full dark:bg-blue-500 bg-indigo/50 text-white hover:bg-blue-600 transition duration-300">
                  Contact Administrator
                </button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
