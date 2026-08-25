import React, { ReactNode } from "react";

interface SidebarLinkGroupProps {
  children: (open: boolean) => ReactNode;
  activeCondition: boolean;
  isOpen: boolean;
  onGroupClick: () => void;
}

const SidebarLinkGroup = ({
  children,
  activeCondition,
  isOpen,
  onGroupClick,
}: SidebarLinkGroupProps) => {
  return <li className="list-none mb-4">{children(isOpen)}</li>;
};

export default SidebarLinkGroup;
