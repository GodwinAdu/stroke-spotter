"use client"
import React, { useState } from "react";
import { menuDatas } from "./menuDatas";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarData = () => {
  const [openGroup, setOpenGroup] = useState<string | null>(null); // Track the open group
  const pathname = usePathname();

  // Function to handle group click and toggle open state
  const handleGroupClick = (groupKey: string) => {
    if (openGroup === groupKey) {
      // If the clicked group is already open, close it
      setOpenGroup(null);
    } else {
      // Otherwise, open the clicked group
      setOpenGroup(groupKey);
    }
  };

  return (
    <>
      <div className="no-scrollbar flex flex-col overflow-y-hidden duration-300 ease-linear h-screen">
        <h3 className="ml-4 text-sm font-semibold text-bodydark2">MENU</h3>
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          {menuDatas.map((item) => (
            <SidebarLinkGroup
              key={item.label}
              activeCondition={
                !!(item?.path && pathname.includes(item?.path)) ||
                !!(
                  item.subItems &&
                  item.subItems.some((subItem) =>
                    pathname.includes(subItem.path)
                  )
                )
              }
              isOpen={openGroup === item.label} // Pass whether the group is open
              onGroupClick={() => handleGroupClick(item.label)} // Pass the click handler
            >
              {(open) => (
                <React.Fragment>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      handleGroupClick(item.label); // Use the handler to toggle open state
                    }}
                    className={`group relative flex items-center gap-2.5 list-none rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                      (pathname === "/dashboard" ||
                        pathname.includes("dashboard")) &&
                      "bg-graydark dark:bg-meta-4"
                    }`}
                  >
                    {item.label}
                  </div>
                  {item.subItems && item.subItems.length > 0 && (
                    <div
                      className={`translate transform overflow-hidden ${
                        !open && "hidden"
                      }`}
                    >
                      <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.path}>
                            <Link
                              href={subItem.path}
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                                pathname === "/dashboard" && "text-white"
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              )}
            </SidebarLinkGroup>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SidebarData;
