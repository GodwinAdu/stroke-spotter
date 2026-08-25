"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plus, 
  FileText, 
  Calendar, 
  Users, 
  Video,
  MessageSquare,
  Settings,
  BarChart3
} from "lucide-react";

const quickActions = [
  {
    title: "Create Blog Post",
    description: "Write a new article",
    href: "/dashboard/blog/createBlog",
    icon: FileText,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Schedule Event",
    description: "Plan new event",
    href: "/dashboard/event/createEvent",
    icon: Calendar,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Add News",
    description: "Share latest news",
    href: "/dashboard/news/createNews",
    icon: MessageSquare,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Create Training",
    description: "New training session",
    href: "/dashboard/training/create-trainee",
    icon: Video,
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "Manage Users",
    description: "User administration",
    href: "/dashboard/users",
    icon: Users,
    color: "from-pink-500 to-pink-600"
  },
  {
    title: "View Analytics",
    description: "Dashboard insights",
    href: "/dashboard",
    icon: BarChart3,
    color: "from-indigo-500 to-indigo-600"
  }
];

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold flex items-center">
          <Plus className="h-5 w-5 mr-2" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickActions.map((action) => (
            <Link key={action.title} href={action.href}>
              <Button
                variant="outline"
                className="w-full h-auto p-4 flex flex-col items-start space-y-2 hover:bg-accent/50 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3 w-full">
                  <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-medium text-sm">{action.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </div>
              </Button>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}