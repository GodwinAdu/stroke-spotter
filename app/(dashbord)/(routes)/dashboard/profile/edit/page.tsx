
import AccountProfile from "@/components/account/AccountProfile";
import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { currentProfile } from "@/hooks/intial-profile";
import { redirect } from "next/navigation";

async function Page() {
  const userInfo = await currentProfile();
  if (!userInfo) redirect("/login");
  if (!userInfo?.onboarded) redirect("/onboarding");

  const userData = {
    id: userInfo._id,
    objectId: userInfo._id,
    username: userInfo.username || "",
    name: userInfo.name || "",
    bio: userInfo.bio || "",
    image: userInfo.image || "",
    email: userInfo.email || "",
    country: userInfo.country || "",
    profession: userInfo.profession || "",
    gender: userInfo.sex || "",
  };

  return (
    <>
      <Breadcrumb pageName="Edit profile" />

      <section className="mt-12 px-4 py-10 max-w-4xl mx-auto">
        <p className="mt-3 mb-5 text-base-regular text-white">Make any changes to your profile</p>
        <AccountProfile user={userData} />
      </section>
    </>
  );
}

export default Page;
