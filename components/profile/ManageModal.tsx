import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

interface ModalProps {
  id: string;
  researchWriter:string;
  speechWriter:string;
  writer:string;
  trainee:string;
  duesPay: boolean;
}

export function ManageModal({ id,duesPay,researchWriter,speechWriter,writer,trainee }: ModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          // disabled={!duesPay}
          variant={!duesPay ? "ghost" : "outline"}
        >
          Manage post
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[96%] max-w-3xl">
        <DialogHeader>
          <DialogTitle>Manage your post</DialogTitle>
          <DialogDescription>
            Delete or Edit your post here. choose the one to manage !!
          </DialogDescription>
        </DialogHeader>
        <div className="items-center ">
          {writer && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Manage Blog
              </h2>
              <div className="flex justify-around items-center ">
                <Link
                  href={`/manage-blog/${id}`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                  Manage Blog
                </Link>
                <Link
                  href={`/create-news`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white hover:bg-gray-100 transition duration-300"
                >
                  Manage News
                </Link>
              </div>
            </div>
          )}
          {!trainee && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Training Post
              </h2>
              <div className="flex justify-center items-center ">
                <Link
                  href={`/create-speeches`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                  Manage Training post
                </Link>
              </div>
            </div>
          )}

          {!speechWriter && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Our Speeches
              </h2>
              <div className="flex justify-center items-center ">
                <Link
                  href={`/create-speeches`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                  Manage Our Speeches
                </Link>
              </div>
            </div>
          )}

          {!researchWriter && (
            <div className="mb-5">
              <h2 className="items-center text-center font-bold mb-2 text-xl">
                Research
              </h2>
              <div className="flex justify-center items-center ">
                <Link
                  href={`/create-speeches`}
                  className="px-4 py-3 rounded-xl font-medium shadow-xl bg-indigo/50 text-white  hover:bg-gray-100 transition duration-300"
                >
                 Manage Research and Report
                </Link>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
