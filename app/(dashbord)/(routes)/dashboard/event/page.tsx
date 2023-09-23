import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import EventCard from "@/components/dashboard/events/EventCard";
import { fetchEvent } from "@/lib/actions/event.actions";

import Link from "next/link";

const EventPage = async () => {

  const events = await fetchEvent() || [];

  console.log(events)

  return (
    <>
      <Breadcrumb pageName="Create Events" />

      <div className="flex justify-end items-center">
        <Link
          href="/dashboard/createEvent"
          className="px-8 py-3 rounded-xl font-medium shadow-xl bg-white hover:bg-indigo/50 hover:text-white  text-blue-500 hover:bg-gray-100 transition duration-300"
        >
          Create Event
        </Link>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map((event) => (
                        <EventCard key={event.title} event={event} />
                    ))}
                </div>
            </div>
        </div>
      
    </>
  );
};

export default EventPage;
