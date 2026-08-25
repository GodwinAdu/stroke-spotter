import { fetchUser } from "@/lib/actions/user.actions";
import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";

export const currentProfile = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth-token')?.value;

  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  const profile = await fetchUser(payload.userId);

  if (!profile) return null;

  return profile;
};
