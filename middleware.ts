import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    publicRoutes: ["/","/admin-signin","/dashboard/blog",
    "/blogs(.*)","/contact-us","/donate","/event",
    "/faq","/from-nurses","/interviews","/join-us","/news",
    "/newsletters","/our-members","/overview","/stroke-survivor",
    "/stroke-victim","/webinars","/why-join-us","/sign-in",
    "/sign-up","/dashboard","/dashboard/blogId",
    "/dashboard/createBlog","/dashboard/event","/dashboard/createEvent",
    "/dashboard/faq","/dashboard/home","/dashboard/profile"],
    
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 