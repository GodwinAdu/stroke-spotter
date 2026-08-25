


import Link from "next/link";

import Image from "next/image";
import SidebarData from "./SidebarData";


const Sidebar = () => {
 

  // CSS classes to control the visibility of the sidebar based on screen size
  const sidebarClasses = `absolute top-0 z-9999 ${
    // Hide sidebar on screens smaller than medium (md)
    "md:w-72.5 hidden md:flex"
  } flex-col overflow-y-hidden bg-black h-[100%]`;

  return (
    <aside className={sidebarClasses}>
      {/* SIDEBAR HEADER */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/">
          <Image
            width={176}
            height={32}
            src={"/public/icons/logo.png"}
            alt="Logo"
          />
        </Link>
      </div>
      {/* SIDEBAR HEADER */}
      <SidebarData />
    </aside>
  );
};

export default Sidebar;
