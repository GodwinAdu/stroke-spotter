import { currentProfile } from "@/hooks/intial-profile"
import Navbar from "./Navbar"


const RenderNavbar = async () => {
    const user = await currentProfile()
  return (
    <>
      <Navbar user={user} />
    </>
  )
}

export default RenderNavbar
