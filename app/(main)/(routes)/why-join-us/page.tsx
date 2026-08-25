import { AccordionBenefit } from "@/components/accordion/Benefit";
import Breadcrumb from "@/components/common/Breadcrumbs";
import PageHeader from "@/components/common/PageHeader";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Why join us"
        description="Join Us and Make a Difference: Be a Part of Spot Stroke Fast Foundation"
      />

      <div className="px-2 max-w-4xl mx-auto">
        <PageHeader heading="Empowerment through Knowledge:" />
        <p className="mb-3">
          By joining Spot Stroke Fast Foundation, you become a champion of
          education. Our primary focus is to equip the public with the knowledge
          they need to recognize, prevent, and respond to strokes and other
          medical conditions. With your involvement, we can reach even more
          people with life-saving information.
        </p>
        <PageHeader heading="Community of Support: " />
        <p className="mb-3">
          We are more than just an organization; we are a community of
          individuals who share a passion for health and well-being. When you
          join us, you'll connect with like-minded people who are committed to
          making a positive impact on the world.
        </p>
        <PageHeader heading="Education and Awareness" />
        <p className="mb-3">
          As a member, you'll have access to a wealth of educational resources,
          including articles, videos, webinars, and more. You can stay updated
          on the latest developments in stroke prevention and medical knowledge,
          allowing you to make informed decisions about your health and the
          health of your loved ones.
        </p>
        <PageHeader heading="Volunteer Opportunities" />
        <p className="mb-3">
          We offer various volunteer opportunities that allow you to actively
          contribute to our cause. Whether it's organizing awareness campaigns,
          participating in community events, or assisting in online forums, your
          skills and time can make a meaningful difference.
        </p>
        <PageHeader heading="Advocacy" />
        <p className="mb-3">
          We actively advocate for policies that promote stroke prevention and
          improved healthcare access. Your voice can help us lobby for positive
          change at the local, national, and international levels.
        </p>
        <PageHeader heading="Personal Growth" />
        <p className="mb-3">
          Being part of our foundation can lead to personal growth and a sense
          of fulfillment. You'll gain valuable leadership skills, experience,
          and the satisfaction of knowing you're contributing to a healthier and
          better-informed society.
        </p>
        <PageHeader heading="Exclusive Benefits" />
        <p className="mb-3">
          As a member, you may have access to exclusive events, discounts on
          educational materials, and other perks that enhance your experience
          with Spot Stroke Fast Foundation.
        </p>
        <PageHeader heading="Join the Movement" />
        <p className="mb-3">
          By joining us, you become a vital part of a movement that is working
          tirelessly to create a world where strokes and other medical
          conditions are preventable and manageable. Together, we can make a
          real difference in healthcare.
        </p>
        <Separator />
        <div className="mb-10 mt-10">
            <AccordionBenefit />
        </div>
      </div>
    </>
  );
};

export default Page;
