// EventsPage.tsx

import Breadcrumb from "@/components/common/Breadcrumbs";
import SingleEvent from "@/components/event/SingleEvent";
import { fetchEvent } from "@/lib/actions/event.actions";

const EventsPage = async () => {

     
  const eventsData = await fetchEvent() || [];

  console.log(eventsData)
 
    return (
        <>
        <Breadcrumb
        pageName="Events"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="md:text-4xl text-2xl font-semibold mb-6 text-center">Latest Upcoming Events</h1>
            <div  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {eventsData?.map((event) => (
                <SingleEvent key={event.title}  event={event} />
            ))}
            </div>
        </div>
        </>
    );
}

export default EventsPage;
