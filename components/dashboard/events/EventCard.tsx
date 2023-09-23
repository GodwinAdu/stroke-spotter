import { formatDate } from "@/lib/utils";
import Image from "next/image";


interface EventData {
    image: string;
    title: string;
    startDate:string;
    endDate:string;
    time: {
        start: string;
        end: string;
    };
    description: string;
}

interface EventCardProps {
    event: EventData;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-md p-4 max-w-md  shadow-lg">
            {event.image && (
                <Image width={200} height={299} src={event.image} alt={event.title} className="w-full h-48 object-cover mb-4 rounded-t-lg" />
            )}
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <div className="mb-2">
                <span className="text-sm text-gray-600">{formatDate(event.startDate)} - {formatDate(event.endDate)}</span>
            </div>
            <div className="mb-3">
                <span className="text-sm text-gray-600">{event.time.start} - {event.time.end}</span>
            </div>
            <p className="text-gray-700">{event.description}</p>
        </div>
    );
}

export default EventCard;
