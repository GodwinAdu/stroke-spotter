import { fetchEvent } from "@/lib/actions/event.actions";
import ModernPageHeader from "@/components/dashboard/modern/ModernPageHeader";
import ModernEventCard from "@/components/dashboard/modern/ModernEventCard";

const EventPage = async () => {
  const events = await fetchEvent() || [];

  return (
    <div className="space-y-6">
      <ModernPageHeader
        title="Event Management"
        description="Create, schedule, and manage events"
        createLink="/dashboard/event/createEvent"
        createLabel="Create Event"
        count={events.length}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <ModernEventCard key={event.title || index} event={event} />
        ))}
      </div>
      
      {events.length === 0 && (
        <div className="text-center py-12">
          <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-medium mb-2">No events found</h3>
          <p className="text-muted-foreground">Create your first event to get started.</p>
        </div>
      )}
    </div>
  );
};

export default EventPage;
