"use client";

import { deleteNews, updateNews } from "@/lib/actions/news.actions";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SingleNewsProps {
  image: string;
  title: string;
  description: string;
  link: string;
  id: string;
}

const ManageNewsCard = ({
  image,
  title,
  description,
  link,
  id,
}: SingleNewsProps) => {

  const router = useRouter()
  const handleDelete = async (id: string) => {
    try {
      await deleteNews(id);
      router.refresh();
    } catch (error) {
      console.log("couldnt delete blog", error);
    }
    console.log("api fired ", id);
  };

  const handleToggleApprove = async (id: string) => {
    try {
      await updateNews(id);
      router.refresh();
    } catch (error:any) {
      console.log("fail to update approved status", error)
    }
  };
  
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <Image
          src={image}
          alt="blog-post"
          width={100}
          height={100}
          className="w-full object-cover rounded-md mb-6 h-56"
        />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <div className="flex justify-between items-center">
          <Link href={link}>
            <button className="text-indigo-500 hover:underline">
              Read More
            </button>
          </Link>
          

          <button
            onClick={() => handleDelete(id)}
            className="text-red-500 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default ManageNewsCard;
