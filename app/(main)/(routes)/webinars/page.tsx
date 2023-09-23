import Breadcrumb from "@/components/common/Breadcrumbs";
import Webinar from "@/components/webinar/Webinar";

const WebinarsPage: React.FC = () => {
    // Sample data. This can be fetched from an API in a real-world scenario.
    const webinars = [
        {
            title: "Webinar 1",
            description: "Description for Webinar 1.",
            date: new Date(),
            imageUrl: "https://via.placeholder.com/400x200"
        },
        //... Add more webinar data as needed
    ];

    return (
        <>
        <Breadcrumb
        pageName="News"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
        <div className="bg-gray-100 min-h-screen">
            <header className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600">
                <h1 className="text-4xl font-semibold text-white">Upcoming Webinars</h1>
            </header>

            <main className="p-6 space-y-6">
                {webinars.map((webinar, index) => (
                    <Webinar
                        key={index}
                        title={webinar.title}
                        description={webinar.description}
                        date={webinar.date}
                        imageUrl={webinar.imageUrl}
                    />
                ))}
            </main>

        </div>
        </>
    );
}

export default WebinarsPage;
