
import AccountProfile from "@/components/account/AccountProfile";
import Breadcrumb from "@/components/dashboard/Breadcrumbs/Breadcrumb";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Copy paste most of the code as it is from the /onboarding

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : "",
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
    email: userInfo
      ? userInfo?.email
      : user.emailAddresses[0].emailAddress ?? "",
    phone: userInfo ? userInfo?.phone : user.phoneNumbers[0].phoneNumber ?? "",
    country: userInfo ? userInfo.country : "",
    profession: userInfo ? userInfo.profession : "",
    gender: userInfo ? userInfo.gender : "",
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
