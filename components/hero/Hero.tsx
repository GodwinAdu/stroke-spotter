import VideoThumb from "@/public/overview/our-member.jpg";

import ModalVideo from "@/components/modal-video";
import Link from "next/link";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="relative">


      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-3xl md:text-5xl text-center font-extrabold leading-tighter tracking-tighter mb-4 bg-gradient-to-r from-indigo dark:from-white to-danger bg-clip-text text-transparent"
              data-aos="zoom-y-out"
            >
              StrokeSpotter Hub
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-base font-medium mb-10 leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                The best way to help prevent a stroke is to eat a healthy diet,
                exercise regularly, and avoid smoking and drinking too much
                alcohol. If you have already had a stroke, making these changes
                can help reduce your risk of having another one in the future.
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none gap-3 sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div className="pb-8">
                  <Link
                    className="btn text-white bg-indigo/50 dark:bg-primary dark:text-dark py-3 px-4 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="/about-us"
                  >
                    Donate Now
                  </Link>
                </div>
                <div className="">
                  <SignedOut>
                    <SignInButton>
                      <Button>Sign In</Button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
