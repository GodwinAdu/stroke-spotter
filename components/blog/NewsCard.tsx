import Link from "next/link";
import { Separator } from "../ui/separator";
import { MessageSquare, Share2, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";


interface NewsCardProps {
  date: string;
  image: string;
  CardTitle: string;
  CardDescription: string;
  link: string;
}

const NewsCard = ({
  image,
  date,
  CardTitle,
  CardDescription,
  link,
}: NewsCardProps) => {
  return (
    <>
      <div className="w-full px-4">
        <div className="mx-auto mb-10 max-w-[370px]">
          <div className="mb-8 overflow-hidden  rounded">
            <Image src={image} width={100} height={100} alt={CardTitle} className="w-full object-cover rounded-md mb-6 h-56" />
          </div>
          <div>
            <div className="flex justify-between items-center">
              {date && (
                <span className="inline-block px-4 py-1 mb-5 text-xs font-semibold leading-loose text-center text-white rounded bg-indigo/50">
                  {date}
                </span>
              )}
              <div className="flex gap-5 items-center">
                <button className="flex gap-1"><ThumbsUp size={16} strokeWidth={1.5} /> </button>
                {/* <p><ThumbsDown size={16} strokeWidth={1.5} /></p> */}
                <button className="flex gap-1"><MessageSquare size={16} strokeWidth={1.5} /> </button>
                <button className="flex gap-1"><Share2 size={16} strokeWidth={1.5} /> </button>
              </div>
            </div>
            <Separator />
            <h3 className="pt-2">
              <Link
                href={link}
                className="inline-block mb-2 text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </Link>
            </h3>
            <p className="text-base text-body-color pb-2">{CardDescription}</p>
            <Separator />
            <Link href={link}>
              <button className=" font-bold text-indigo/50 hover:underline pt-2">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
