import { fetchEvent } from "@/lib/actions/event.actions";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { Separator } from "../ui/separator";

export const dynamic = 'force-dynamic'
export async function SingleEvent() {
  const eventsData = await fetchEvent();

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto ">
      {eventsData?.map((event) => (
        <div key={event._id} className="dark:bg-dark bg-white p-4 rounded-lg shadow-md">
          <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
            <Image
              layout="fill"
              objectFit="cover"
              src={event.image}
              alt={event.title}
            />
          </div>

          <h2 className="text-xl dark:text-white text-black font-semibold mb-2">{event.title}</h2>
          <Separator />
          <div className="flex justify-between items-center">
            <p className="mb-2 text-gray-600">
              <strong>Date:</strong> {formatDate(event.startDate)}
            </p>
            <p className="mb-2 text-gray-600">
              <strong>To:</strong> {formatDate(event.endDate)}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="mb-2 text-gray-600">
              <strong>Start:</strong> {event.time.start}
            </p>
            <p className="mb-2 text-gray-600">
              <strong>End:</strong> {event.time.end}
            </p>
          </div>
          <Separator />
          <p className="pt-2">{event.description}</p>
        </div>
      ))}
    </div>
  );
}
