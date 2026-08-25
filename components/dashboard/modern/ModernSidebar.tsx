"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Users, 
  ChevronDown,
  Home,
  Newspaper,
  BookOpen,
  Video,
  GraduationCap,
  Mic,
  FileBarChart,
  Heart,
  UserCheck,
  MessageSquare,
  HelpCircle,
  Menu,
  X
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    subItems: [
      { label: "Overview", path: "/dashboard", icon: LayoutDashboard },
      { label: "Home", path: "/dashboard/home", icon: Home }
    ]
  },
  {
    label: "Content",
    icon: FileText,
    subItems: [
      { label: "Blogs", path: "/dashboard/blog", icon: BookOpen },
      { label: "News", path: "/dashboard/news", icon: Newspaper },
      { label: "Newsletters", path: "/dashboard/newsletters", icon: FileText },
      { label: "Webinars", path: "/dashboard/webinars", icon: Video }
    ]
  },
  {
    label: "Services",
    icon: GraduationCap,
    subItems: [
      { label: "Training", path: "/dashboard/training", icon: GraduationCap },
      { label: "Speeches", path: "/dashboard/speech", icon: Mic },
      { label: "Research", path: "/dashboard/report-research", icon: FileBarChart }
    ]
  },
  {
    label: "Stories",
    icon: Heart,
    subItems: [
      { label: "Survivors", path: "/dashboard/stroke-survivor", icon: Heart },
      { label: "Victims", path: "/dashboard/stroke-victim", icon: UserCheck },
      { label: "Interviews", path: "/dashboard/interview", icon: MessageSquare },
      { label: "Nurses", path: "/dashboard/nurses-stories", icon: Users }
    ]
  },
  {
    label: "Management",
    icon: Calendar,
    subItems: [
      { label: "Events", path: "/dashboard/event", icon: Calendar },
      { label: "FAQ", path: "/dashboard/faq", icon: HelpCircle },
      { label: "Users", path: "/dashboard/users", icon: Users }
    ]
  }
];

interface ModernSidebarProps {
  className?: string;
}

export default function ModernSidebar({ className }: ModernSidebarProps) {
  const [openGroups, setOpenGroups] = useState<string[]>(["Dashboard"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const toggleGroup = (groupLabel: string) => {
    setOpenGroups(prev => 
      prev.includes(groupLabel) 
        ? prev.filter(g => g !== groupLabel)
        : [...prev, groupLabel]
    );
  };

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(path + "/");
  };

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <Heart className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            StrokeSpot
          </span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isGroupOpen = openGroups.includes(item.label);
            const hasActiveChild = item.subItems?.some(subItem => isActive(subItem.path));
            
            return (
              <div key={item.label} className="space-y-1">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between h-10 px-3",
                    hasActiveChild && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => toggleGroup(item.label)}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isGroupOpen && "rotate-180"
                    )} 
                  />
                </Button>
                
                {isGroupOpen && item.subItems && (
                  <div className="ml-4 space-y-1 border-l border-border pl-4">
                    {item.subItems.map((subItem) => (
                      <Link key={subItem.path} href={subItem.path}>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "w-full justify-start h-8 px-3",
                            isActive(subItem.path) && "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          <subItem.icon className="h-3 w-3 mr-2" />
                          {subItem.label}
                          {isActive(subItem.path) && (
                            <Badge variant="secondary" className="ml-auto h-5 px-1.5 text-xs">
                              Active
                            </Badge>
                          )}
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 p-3">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium">System Online</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">Dashboard v2.0</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-72 bg-background border-r">
            <SidebarContent />
          </div>
        </div>
      )}

      <div className={cn("hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 bg-background border-r", className)}>
        <SidebarContent />
      </div>
    </>
  );
}