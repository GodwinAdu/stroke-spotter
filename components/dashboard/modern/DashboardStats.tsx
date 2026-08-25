"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  FileText, 
  Calendar, 
  TrendingUp,
  Heart,
  BookOpen,
  Video,
  MessageSquare
} from "lucide-react";

const stats = [
  {
    title: "Total Users",
    value: "2,847",
    change: "+12.5%",
    changeType: "positive" as const,
    icon: Users,
    description: "Active members"
  },
  {
    title: "Blog Posts",
    value: "156",
    change: "+8.2%",
    changeType: "positive" as const,
    icon: BookOpen,
    description: "Published articles"
  },
  {
    title: "Events",
    value: "24",
    change: "+3.1%",
    changeType: "positive" as const,
    icon: Calendar,
    description: "Upcoming events"
  },
  {
    title: "Survivors",
    value: "1,234",
    change: "+15.3%",
    changeType: "positive" as const,
    icon: Heart,
    description: "Success stories"
  },
  {
    title: "Webinars",
    value: "48",
    change: "+22.1%",
    changeType: "positive" as const,
    icon: Video,
    description: "Educational sessions"
  },
  {
    title: "Engagement",
    value: "89.2%",
    change: "+5.4%",
    changeType: "positive" as const,
    icon: TrendingUp,
    description: "User activity rate"
  }
];

export default function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
      {stats.map((stat) => (
        <Card key={stat.title} className="relative overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <stat.icon className="h-4 w-4 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant={stat.changeType === "positive" ? "default" : "destructive"}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {stat.description}
                </span>
              </div>
            </div>
          </CardContent>
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-bl-full" />
        </Card>
      ))}
    </div>
  );
}