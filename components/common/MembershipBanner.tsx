'use client'
const MembershipBanner = () => {
    return (
      <div className=" bg-transparent dark:bg-dark text-white py-12 px-5 md:px-16 shadow-xl ">
        <h2 className="text-3xl font-bold mb-4 dark:text-white text-black">Become a Member</h2>
        <p className="text-lg mb-6  dark:text-white text-black">
          Join our community and enjoy exclusive benefits, events, and insights. Shape your future with us.
        </p>
        <div className="flex space-x-4">
          <button className="dark:bg-white bg-indigo/50  dark:text-black text-white  py-2 px-6 rounded hover:bg-indigo-700 hover:text-white transition duration-300">
            Join Us
          </button>
          <button className="bg-transparent border-2  dark:text-white text-black  dark:border-white border-indigo/50 py-2 px-6 rounded hover:bg-indigo-500 hover:border-blue-700 transition duration-300">
            Register
          </button>
        </div>
      </div>
    );
  };
  
  export default MembershipBanner;