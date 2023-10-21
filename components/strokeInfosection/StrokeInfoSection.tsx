// StrokeInfoSection.tsx



const StrokeInfoSection = () => {
  return (
    <section className="bg-blue-100 p-8 rounded-lg shadow-lg dark:text-black">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 ">Understanding Stroke</h2>

        <p className="text-gray-700 mb-4">
          A stroke occurs when blood flow to an area of the brain is cut off. When brain cells are deprived of oxygen, they begin to die, leading to irreversible damage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="p-4 bg-white dark:bg-black rounded shadow-md">
            <h3 className="font-semibold text-xl mb-2 dark:text-white">Symptoms:</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-white">
              <li>Sudden numbness or weakness</li>
              <li>Confusion or trouble speaking</li>
              <li>Difficulty seeing in one or both eyes</li>
              <li>Sudden dizziness or loss of balance</li>
            </ul>
          </div>

          <div className="p-4 bg-white rounded shadow-md dark:bg-black dark:text-white">
            <h3 className="font-semibold text-xl mb-2">Prevention:</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Maintain a healthy weight</li>
              <li>Regular physical activity</li>
              <li>Limited alcohol intake</li>
              <li>Avoid smoking and recreational drug use</li>
            </ul>
          </div>
        </div>

        <button  className="inline-block mt-6 dark:bg-blue-500 bg-indigo/50 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default StrokeInfoSection;
