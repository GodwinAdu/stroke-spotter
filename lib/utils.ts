import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// created by chatgpt
export function isBase64Image(imageData: string) {
  const base64Regex = /^data:image\/(png|jpe?g|gif|webp);base64,/;
  return base64Regex.test(imageData);
}

// formate date
export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 because months are 0-based in JS.
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// generate membership ID
export async function generateMembershipId() {
  const prefix = "ssff_";
  const numDigits = 10;
  let randomDigits = "";

  for (let i = 0; i < numDigits; i++) {
    const randomDigit = Math.floor(Math.random() * 101);
    randomDigits += randomDigit.toString();
  }
  const memberId = prefix + randomDigits;

  return memberId;
}

// calculate time period for post

  export function calculateTimePeriod(createdDate:string) {
    const now = new Date();
    const createdDateTime = new Date(createdDate); // Convert the string to a Date object

    const timeDifference = now.getTime() - createdDateTime.getTime(); // Get the time difference in milliseconds

    // Define time intervals in milliseconds
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day;

    if (timeDifference < minute) {
      return Math.floor(timeDifference / 1000) + "s ago";
    } else if (timeDifference < hour) {
      return Math.floor(timeDifference / minute) + "m ago";
    } else if (timeDifference < day) {
      return Math.floor(timeDifference / hour) + "h ago";
    } else if (timeDifference < month) {
      return Math.floor(timeDifference / day) + "d ago";
    } else {
      // Calculate months and years separately
      const months = Math.floor(timeDifference / month);
      const years = Math.floor(months / 12);
      if (years >= 1) {
        return years + "y ago";
      } else {
        return months + "mo ago";
      }
    }
    
  }

