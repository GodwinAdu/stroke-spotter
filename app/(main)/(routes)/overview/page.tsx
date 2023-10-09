import Breadcrumb from "@/components/common/Breadcrumbs"
import BackgroundSection from "@/components/sections/BackgroundSection"


const page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Overview"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      <div className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-2">

        <BackgroundSection 
        imageUrl="/overview/why-join-us.jpg" 
        description="Why Join Us"
        buttonText="Read More" 
        link={`/why-join-us`}
      />
        <BackgroundSection 
        imageUrl="/overview/join-us.jpg" 
        description="Join Us Now"
        buttonText="Read More"
        link={`/join-us`} 
      />
        <BackgroundSection 
        imageUrl="/overview/our-member.jpg" 
        description="Our Patrons and Members"
        buttonText="view More" 
        link={`/our-members`}
      />
        <BackgroundSection 
        imageUrl="/overview/membership.jpg" 
        description="SSFF Membership"
        buttonText="Read More" 
        link={`/ssf-membership`}
      />
        </div>
      </div>
    </>
  )
}

export default page
