import Breadcrumb from "@/components/common/Breadcrumbs"
import BackgroundSection from "@/components/sections/BackgroundSection"


const page = () => {
  return (
    <>
      <Breadcrumb
        pageName="Overview"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      <div className="p-5">
        <div className="grid grid-cols-1 md:grid-cols-2">

        <BackgroundSection 
        imageUrl="/test.jpeg" 
        description="This is a description for image 1."
        buttonText="Click Me 1" 
      />
        <BackgroundSection 
        imageUrl="/test.jpeg" 
        description="This is a description for image 2."
        buttonText="Click Me 2" 
      />
        <BackgroundSection 
        imageUrl="/test.jpeg" 
        description="This is a description for image 3."
        buttonText="Click Me 3" 
      />
        <BackgroundSection 
        imageUrl="/test.jpeg" 
        description="This is a description for image 4."
        buttonText="Click Me 4" 
      />
        </div>
      </div>
    </>
  )
}

export default page
