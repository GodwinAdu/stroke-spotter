import { currentProfile } from "@/hooks/intial-profile";
import Header from "./page"


const Navbar = async () =>{
    const user = await currentProfile()


    return ( 
        <Header user={user} />
    )
}


export default Navbar;