import Breadcrumb from "@/components/common/Breadcrumbs"
import { Button } from "@/components/ui/button";

const Page = () =>{
    return (
        <>
        <Breadcrumb pageName="Training Service" /> 

        <div className="flex h-screen">
          <div className="m-auto text-center">
            <h1 className="text-2xl text-gray-500 mb-4">Developers working on this page</h1>
            <p className="text-gray-400 pb-4">Check back later for updates.</p>
            <Button>Back Home</Button>
          </div>
        </div>
        </>
    )
}

export default Page;