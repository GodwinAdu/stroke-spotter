

interface WebinarProps {
    title: string;
    description: string;
    date: Date;
    imageUrl: string;
}

const Webinar: React.FC<WebinarProps> = ({ title, description, date, imageUrl }) => (
    <div className="rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-101">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        <div className="p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Date: {date.toLocaleDateString()}</span>
                <button className="text-blue-600 hover:underline">Register</button>
            </div>
        </div>
    </div>
);

export default Webinar;
