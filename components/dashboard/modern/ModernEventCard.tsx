"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Clock, Edit, Trash2, Eye } from "lucide-react";

interface ModernEventCardProps {
  event: {
    title: string;
    description: string;
    date: string;
    location: string;
    attendees?: number;
    status?: string;
  };
}

export default function ModernEventCard({ event }: ModernEventCardProps) {
  const getStatusColor = (status: string = "upcoming") => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "ongoing":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "cancelled":
        return "bg-red-500/10 text-red-700 border-red-200";
      default:
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
    }
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg group-hover:text-blue-600 transition-colors">
              {event.title}
            </h3>
            <Badge variant="outline" className={getStatusColor(event.status)}>
              {event.status || "Upcoming"}
            </Badge>
          </div>
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{event.location}</span>
          </div>
          {event.attendees && (
            <div className="flex items-center space-x-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>{event.attendees} attendees</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t">
          <Button variant="ghost" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View
          </Button>
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}