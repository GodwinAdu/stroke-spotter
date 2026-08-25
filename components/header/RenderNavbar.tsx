import { currentProfile } from "@/hooks/intial-profile"
import ModernNavbar from "./ModernNavbar"

const RenderNavbar = async () => {
  const user = await currentProfile();
 
  return (
    <>
      <ModernNavbar user={user} />
    </>
  )
}

export default RenderNavbar
