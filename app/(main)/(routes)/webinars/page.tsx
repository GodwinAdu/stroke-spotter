import Breadcrumb from "@/components/common/Breadcrumbs";
import { Button } from "@/components/ui/button";
import Webinar from "@/components/webinar/Webinar";

const WebinarsPage: React.FC = () => {
  // Sample data. This can be fetched from an API in a real-world scenario.

  return (
    <>
      <Breadcrumb
        pageName="News"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      <div className="bg-gray-100 min-h-screen">
        <header className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
          <h1 className="text-4xl font-semibold text-white">
            Upcoming Webinars
          </h1>
        </header>

        <main className="p-6 space-y-6">
          <div className="flex h-screen">
            <div className="m-auto text-center">
              <h1 className="text-2xl text-gray-500 mb-4">
                No scheduled Webinar yet
              </h1>
              <p className="text-gray-400 pb-4">
                Check back later for updates.
              </p>
              <Button>Back Home</Button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default WebinarsPage;
