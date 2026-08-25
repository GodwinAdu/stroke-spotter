"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Search, 
  Bell, 
  Settings, 
  User, 
  LogOut, 
  Moon, 
  Sun,
  Command
} from "lucide-react";
import { useTheme } from "next-themes";

interface ModernHeaderProps {
  user?: {
    id: string;
    username: string;
    image?: string;
    admin?: boolean;
  };
}

export default function ModernHeader({ user }: ModernHeaderProps) {
  const [notifications] = useState(3);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Search */}
        <div className="flex flex-1 items-center space-x-4">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search dashboard... (⌘K)"
              className="pl-10 pr-4 bg-muted/50 border-0 focus-visible:ring-1"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Badge variant="outline" className="h-5 px-1.5 text-xs font-mono">
                <Command className="h-3 w-3 mr-1" />K
              </Badge>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="h-9 w-9"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Notifications */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="h-9 w-9 relative">
                <Bell className="h-4 w-4" />
                {notifications > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                  >
                    {notifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                Notifications
                <Badge variant="secondary">{notifications} new</Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="space-y-2 p-2">
                <div className="rounded-lg border p-3 space-y-1">
                  <p className="text-sm font-medium">New blog post published</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
                <div className="rounded-lg border p-3 space-y-1">
                  <p className="text-sm font-medium">User registration pending</p>
                  <p className="text-xs text-muted-foreground">5 minutes ago</p>
                </div>
                <div className="rounded-lg border p-3 space-y-1">
                  <p className="text-sm font-medium">System backup completed</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-10 px-3 space-x-3 hover:bg-accent/50 transition-colors">
                <Avatar className="h-8 w-8 ring-2 ring-transparent hover:ring-primary/20 transition-all">
                  <AvatarImage src={user?.image} alt={user?.username} />
                  <AvatarFallback className="text-sm font-medium bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    {user?.username?.charAt(0).toUpperCase() || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium">{user?.username || "User"}</span>
                  <div className="flex items-center space-x-1">
                    {user?.admin && (
                      <Badge variant="secondary" className="h-4 px-1.5 text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border-blue-200">
                        Admin
                      </Badge>
                    )}
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  </div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 p-2">
              <DropdownMenuLabel className="p-0">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={user?.image} alt={user?.username} />
                    <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {user?.username?.charAt(0).toUpperCase() || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{user?.username || "User"}</p>
                    <p className="text-xs text-muted-foreground">
                      {user?.admin ? "Administrator" : "Member"}
                    </p>
                    <div className="flex items-center space-x-1 mt-1">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      <span className="text-xs text-green-600">Online</span>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <User className="mr-3 h-4 w-4" />
                <div>
                  <p className="text-sm font-medium">Profile</p>
                  <p className="text-xs text-muted-foreground">Manage your account</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <Settings className="mr-3 h-4 w-4" />
                <div>
                  <p className="text-sm font-medium">Settings</p>
                  <p className="text-xs text-muted-foreground">Preferences & privacy</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2" />
              <DropdownMenuItem className="p-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 focus:text-red-600 transition-colors">
                <LogOut className="mr-3 h-4 w-4" />
                <div>
                  <p className="text-sm font-medium">Sign out</p>
                  <p className="text-xs text-red-500/70">End your session</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}