// StrokeByContinentSection.tsx

import React from 'react';

const data = [
  { continent: "Africa", count: "1.2M" },
  { continent: "Asia", count: "4.3M" },
  { continent: "Europe", count: "2.8M" },
  { continent: "North America", count: "1.5M" },
  { continent: "South America", count: "900K" },
  { continent: "Australia", count: "300K" },
];

const StrokeByContinentSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-8 rounded-lg">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Strokes by Continent</h2>
        <p className="text-gray-600 mb-8">
          A global overview of stroke counts across the continents.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div key={index} className="bg-white dark:bg-black p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">{item.continent}</h3>
              <p className="text-blue-600 text-2xl">{item.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrokeByContinentSection;
