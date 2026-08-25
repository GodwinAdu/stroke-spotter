"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Calendar, 
  MessageSquare,
  ExternalLink,
  Clock
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "blog",
    title: "New blog post published",
    description: "Understanding Stroke Prevention in Young Adults",
    user: "Dr. Sarah Johnson",
    avatar: "/team/team1.jpg",
    time: "2 minutes ago",
    icon: FileText,
    status: "published"
  },
  {
    id: 2,
    type: "user",
    title: "New user registration",
    description: "John Smith joined as a stroke survivor",
    user: "System",
    avatar: null,
    time: "5 minutes ago",
    icon: Users,
    status: "pending"
  },
  {
    id: 3,
    type: "event",
    title: "Event scheduled",
    description: "Stroke Awareness Workshop - March 15th",
    user: "Admin Team",
    avatar: "/team/team2.jpg",
    time: "15 minutes ago",
    icon: Calendar,
    status: "scheduled"
  },
  {
    id: 4,
    type: "story",
    title: "New survivor story",
    description: "Maria's recovery journey shared",
    user: "Maria Rodriguez",
    avatar: "/team/team3.jpg",
    time: "1 hour ago",
    icon: MessageSquare,
    status: "approved"
  },
  {
    id: 5,
    type: "blog",
    title: "Article updated",
    description: "F.A.S.T. Method guide revised",
    user: "Dr. Michael Chen",
    avatar: "/team/team4.jpg",
    time: "2 hours ago",
    icon: FileText,
    status: "updated"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "published":
      return "bg-green-500/10 text-green-700 border-green-200";
    case "pending":
      return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
    case "scheduled":
      return "bg-blue-500/10 text-blue-700 border-blue-200";
    case "approved":
      return "bg-purple-500/10 text-purple-700 border-purple-200";
    case "updated":
      return "bg-orange-500/10 text-orange-700 border-orange-200";
    default:
      return "bg-gray-500/10 text-gray-700 border-gray-200";
  }
};

export default function RecentActivity() {
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
        <Button variant="outline" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                  <activity.icon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-foreground">
                    {activity.title}
                  </h4>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getStatusColor(activity.status)}`}
                  >
                    {activity.status}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {activity.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={activity.avatar || undefined} />
                      <AvatarFallback className="text-xs">
                        {activity.user.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {activity.user}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{activity.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}