

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
        <main className="mx-auto flex w-[100%] md:max-w-3xl flex-col justify-start bg-dark">
            <p className="mt-3 text-base-regular text-white text-center">
                Complete your profile now to continue
            </p>
            <section className="p-10 ">
                <AccountProfile user={userData}  />
            </section>
        </main>
    )
}

export default Page;