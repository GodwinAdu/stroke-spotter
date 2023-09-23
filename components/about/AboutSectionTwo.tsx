import SlidingImage from "@/components/sliding-image/SlidingImage";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto w-full h-[550px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <SlidingImage />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  To Our Cherish Members
                </h3>
                <p className="text-base pb-4 font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Every success, every milestone, every life touched—it's all
                  because of you. Your dedication is our strength and your
                  passion our inspiration. We cherish each one of you not just
                  as members, but as the heart and soul of our mission. Here's
                  to the incredible journey ahead and the difference we make
                  together!
                </p>
                <p className="text-base pb-4 font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  In cherishing you, we're not just expressing our appreciation
                  for your work but celebrating the spirit, heart, and soul you
                  infuse into our foundation each day. We are more than just
                  colleagues or members; we are a family, and families cherish
                  each other.
                </p>
                <p className="text-base pb-4 font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Thank you for being the foundation upon which our dreams stand
                  tall. As we look ahead, we are filled with gratitude, pride,
                  and an unwavering belief that with members like you, our
                  journey will only grow brighter.
                </p>
                <p className="text-base font-bold  text-body-color sm:text-lg sm:leading-relaxed">#From the Organization Executives !.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
