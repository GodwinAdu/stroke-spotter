"use client";


import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation"
const SignOut = () => {
  const router = useRouter();

  return (
    <>
      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/")}>
          <div className="flex cursor-pointer gap-4 px-4">
            <Image
              src="/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
            />
            <p className="text-white max-lg:hidden"> Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </>
  );
};



export default SignOut;
