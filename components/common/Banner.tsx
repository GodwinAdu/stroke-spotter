"use client"

import { useState } from 'react'

export default function Banner() {

  const [bannerOpen, setBannerOpen] = useState(true)

  return (
    <>
      {bannerOpen && (
        <div className="fixed  right-0 w-full top-56  md:w-auto z-50 px-2">
          <div className="dark:bg-white bg-indigo/50 text-slate-50 text-white dark:text-black  text-sm p-3 md:rounded shadow-lg flex justify-between">
            <div className='text-slate-500 inline-flex'><a className="font-bold hover:underline text-slate-50" href="https://github.com/cruip/tailwind-landing-page-template" target="_blank" rel="noreferrer"><span className="sm:inline dark:text-dark">Share your feedback </span></a> <span className="italic px-1.5">or</span> <a className="font-bold hover:underline text-emerald-400" href="https://cruip.com/simple/" target="_blank" rel="noreferrer">Register Now</a></div>
            <button className="text-slate-500 hover:text-slate-400 pl-2 ml-3 border-l border-gray-700" onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 16 16">
                <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
              </svg>
            </button>
          </div> 
        </div>
      )}
    </>
  )
}