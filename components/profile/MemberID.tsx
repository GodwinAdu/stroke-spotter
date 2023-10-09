"use client";
import { Check, Copy, PlusCircleIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface MemberIdProps {
  memberId: string;
  duesPay: boolean;
}
const MemberID = ({ memberId, duesPay }: MemberIdProps) => {
  const [activeQuestionId, setActiveQuestionId] = useState<boolean>(false);
  const [membershipId, setMembershipId] = useState<string>(memberId); // Replace with your Member ID
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyClick = () => {
    // Copy the Membership ID to the clipboard
    navigator.clipboard.writeText(membershipId);
    setCopied(true);

    // Reset the "Copied" state after 5 seconds
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  useEffect(() => {
    if (copied) {
      // Automatically reset the "Copied" state after 5 seconds
      const timer = setTimeout(() => {
        setCopied(false);
      }, 5000);

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <div className="mb-6 relative max-w-94 mx-auto">
        <button
          className="w-full text-center px-2 py-1 text-black rounded-lg bg-white shadow-md font-semibold"
          onClick={() => setActiveQuestionId((prev) => !prev)}
        >
          Your Member ID
        </button>
        {activeQuestionId && (
          <div className="mt-1 p-4 bg-gray-200 rounded-lg">
            <div className="py-2 bg-primary/50 dark:text-white rounded-md text-black mb-2">
              {membershipId}
              <button
                className={`ml-2 px-2 py-1 text-white rounded-md ${
                  copied ? "bg-green-500" : "bg-blue-500"
                }`}
                onClick={handleCopyClick}
                disabled={copied}
              >
                {copied ? <Check size={10} /> : <Copy size={10} />}
              </button>
            </div>

            {!duesPay ? (
              <Link href="/membership-renewals">
                <Button variant="outline">Renew membership</Button>
              </Link>
            ) : (
              <div className=" mt-4 text-green-500 font-bold flex items-center justify-center gap-3">
                <p>Active Member</p>
                <Check />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MemberID;
