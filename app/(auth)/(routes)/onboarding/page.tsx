

import AccountProfile from "@/components/account/AccountProfile";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";


const Page = async () => {
    const user = await currentUser();
    if (!user) return null; // to avoid typescript warnings
  
    const userInfo = await fetchUser(user.id);
    if (userInfo?.onboarded) redirect("/");
    
    const userData = {
        id: user.id,
        objectId: userInfo?._id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : `${user?.firstName} ${user?.lastName}` ?? "",
        email:userInfo ? userInfo?.email : user.emailAddresses[0].emailAddress ?? "",
        phone:userInfo ? userInfo?.phone : user.phoneNumbers[0].phoneNumber ?? "",
        country: userInfo ? userInfo.country : "",
        profession: userInfo ? userInfo.profession : "",
        gender: userInfo ?  userInfo.gender : "",
        bio: userInfo ? userInfo?.bio : "",
        image: userInfo ? userInfo?.image : user.imageUrl,
      };
    

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="head-text">onboardidng</h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complete your profile now to use Thread
            </p>
            <section className="mt-9 p-10 bg-dark-2">
                <AccountProfile user={userData}  />
            </section>
        </main>
    )
}

export default Page;