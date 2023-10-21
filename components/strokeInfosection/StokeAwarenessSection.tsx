// StrokeAwarenessSection.tsx

import Link from 'next/link';
import React from 'react';

const StrokeAwarenessSection: React.FC = () => {
  return (
    <section className="bg-gray-800 dark:bg-dark dark:text-white text-black py-12 px-8 rounded-lg">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Awareness on Stroke</h2>
          <p className="text-gray-400">
            Strokes can lead to significant complications when not detected early. Knowledge and early intervention can make all the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-bold text-2xl mb-3">Common Symptoms</h3>
            <ul className="list-decimal pl-5 text-gray-300">
              <li>Unexpected numbness or weakness</li>
              <li>Difficulty in speaking or understanding</li>
              <li>Sudden blurred vision</li>
              <li>Unexplained dizziness or imbalance</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-bold text-2xl mb-3">Proactive Measures</h3>
            <ul className="list-decimal pl-5 text-gray-300">
              <li>Healthy diet and weight management</li>
              <li>Consistent physical activities</li>
              <li>Moderation in alcohol consumption</li>
              <li>Avoidance of tobacco and harmful drugs</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/" className="inline-block dark:bg-blue-600 bg-indigo/50 text-white px-8 py-3 rounded hover:bg-blue-700 transition duration-300">
            Dive Deeper
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrokeAwarenessSection;
