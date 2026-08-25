// StrokePersonalStoriesSection.tsx

import React from 'react';

type Story = {
  name: string;
  snippet: string;
  imageSrc: string;
};

const stories: Story[] = [
  {
    name: "John Doe",
    snippet: "After my stroke, I had to relearn basic tasks...",
    imageSrc: "/path/to/john-image.jpg"
  },
  {
    name: "Jane Smith",
    snippet: "I never thought it would happen to me...",
    imageSrc: "/path/to/jane-image.jpg"
  },
  {
    name: "Jane Smith",
    snippet: "I never thought it would happen to me...",
    imageSrc: "/path/to/jane-image.jpg"
  },
  // Add more stories...
];

const StrokePersonalStoriesSection: React.FC = () => {
  return (
    <section className="bg-gray-200 py-12 px-8 rounded-lg">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-6">Stories of Impact</h2>
        <p className="text-gray-600 mb-10">
          Real experiences from people who've faced strokes and their journey to recovery.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((story, index) => (
            <div key={index} className="bg-white dark:bg-dark p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <img src={story.imageSrc} alt={story.name} className="w-full h-48 object-cover mb-4 rounded"/>
              <h3 className="text-lg font-semibold mb-2">{story.name}</h3>
              <p className="text-gray-500">{story.snippet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrokePersonalStoriesSection;
