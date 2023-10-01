import AccountProfile from "@/components/account/AccountProfile";
import Breadcrumb from "@/components/common/Breadcrumbs";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
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
    email: userInfo? userInfo?.email: user.emailAddresses[0].emailAddress ?? "",
    phone: userInfo ? userInfo?.phone : user.phoneNumbers[0].phoneNumber ?? "",
    country: userInfo ? userInfo.country : "",
    profession: userInfo ? userInfo.profession : "",
    gender: userInfo ? userInfo.gender : "",
  };

  return (
    <>
      <Breadcrumb pageName="Edit profile" />
      <p className="mt-3 text-base-regular text-white">Make any changes</p>

      <section className="mt-12 px-4 py-10">
        <AccountProfile user={userData} />
      </section>
    </>
  );
}

export default Page;
