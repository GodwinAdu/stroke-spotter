// components/Hero.tsx
import Link from 'next/link';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-4xl mt-10 mb-10 rounded-lg mx-auto w-[96%] bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="  py-10 md:py-20 px-5 md:px-15 text-center">
        <h1 className="text-xl md:text-4xl font-bold text-white mb-4">Join Our Hero Team</h1>
        <p className="text-md md:text-lg text-white mb-8">As a SSFF member, you will have access to our newsletters and receive regular updates on SSFF events and activities. </p>
        <p className="text-md md:text-lg text-white mb-4">Together, we can make the world a better place.</p>
        <p className="text-xs font-bold text-white mb-8">Before sign up <span><Link href="/privacy-policy" className='underline italic text-blac'>Read our privacy and policy</Link></span>.</p>
        <Link href="/sign-up" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Sign In</Link>
      </div>
    </div>
  );
};

export default Hero;
