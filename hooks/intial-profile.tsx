import { fetchUser } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";



export const currentProfile = async () => {

    const { userId } = auth();

    if (!userId) return null;

    const profile = await fetchUser(userId);

    if (!profile) return null;

    return profile;
}