"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  User, 
  Settings, 
  LogOut, 
  LayoutDashboard,
  Contact,
  ChevronDown
} from "lucide-react";

interface UserProps {
  id: string;
  admin: boolean;
  username: string;
  image: string;
}

const DropdownUser = ({ id, admin, username, image }: UserProps) => {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 hover:bg-accent/50 rounded-lg p-2 transition-colors">
        <Avatar className="h-8 w-8">
          <AvatarImage src={image} alt={username} />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-sm">
            {username?.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="hidden md:flex flex-col items-start">
          <span className="text-sm font-medium">{username}</span>
          {admin && (
            <Badge variant="secondary" className="h-4 px-1.5 text-xs">
              Admin
            </Badge>
          )}
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-64 p-2">
        <DropdownMenuLabel className="p-0">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
            <Avatar className="h-10 w-10">
              <AvatarImage src={image} alt={username} />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                {username?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-semibold">{username}</p>
              <p className="text-xs text-muted-foreground">
                {admin ? "Administrator" : "Member"}
              </p>
            </div>
          </div>
        </DropdownMenuLabel>
        
        <DropdownMenuSeparator className="my-2" />
        
        {admin ? (
          <>
            {pathname.includes("/dashboard") ? (
              <DropdownMenuItem asChild className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <Link href={`/dashboard/profile/${id}`} className="flex items-center space-x-3">
                  <User className="h-4 w-4" />
                  <div>
                    <p className="text-sm font-medium">Admin Profile</p>
                    <p className="text-xs text-muted-foreground">Manage your profile</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem asChild className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <Link href="/dashboard" className="flex items-center space-x-3">
                  <LayoutDashboard className="h-4 w-4" />
                  <div>
                    <p className="text-sm font-medium">Dashboard</p>
                    <p className="text-xs text-muted-foreground">Admin panel</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            )}
          </>
        ) : (
          <DropdownMenuItem asChild className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
            <Link href={`/profile/${id}`} className="flex items-center space-x-3">
              <User className="h-4 w-4" />
              <div>
                <p className="text-sm font-medium">My Profile</p>
                <p className="text-xs text-muted-foreground">View your profile</p>
              </div>
            </Link>
          </DropdownMenuItem>
        )}
        
        <DropdownMenuItem className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
          <Contact className="h-4 w-4 mr-3" />
          <div>
            <p className="text-sm font-medium">My Contacts</p>
            <p className="text-xs text-muted-foreground">Manage contacts</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuItem className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
          <Settings className="h-4 w-4 mr-3" />
          <div>
            <p className="text-sm font-medium">Account Settings</p>
            <p className="text-xs text-muted-foreground">Preferences & privacy</p>
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="my-2" />
        
        <DropdownMenuItem className="p-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 focus:text-red-600 transition-colors">
          <LogOut className="h-4 w-4 mr-3" />
          <div>
            <p className="text-sm font-medium">Sign out</p>
            <p className="text-xs text-red-500/70">End your session</p>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;