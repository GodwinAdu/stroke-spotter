// EventsPage.tsx

import Breadcrumb from "@/components/common/Breadcrumbs";
import { SingleEvent } from "@/components/event/SingleEvent";


const EventsPage: React.FC = () => {
    return (
        <>
        <Breadcrumb
        pageName="Events"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="md:text-4xl text-2xl font-semibold mb-6 text-center">Latest Upcoming Events</h1>
            <SingleEvent />
        </div>
        </>
    );
}

export default EventsPage;
