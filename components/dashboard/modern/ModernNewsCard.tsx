"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2, Calendar, User, Newspaper } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ModernNewsCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  approved: boolean;
  link: string;
  author?: string;
  date?: string;
}

export default function ModernNewsCard({
  id,
  title,
  description,
  image,
  approved,
  link,
  author = "Admin",
  date = "Today"
}: ModernNewsCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="outline" className="bg-white/90">
            <Newspaper className="h-3 w-3 mr-1" />
            News
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant={approved ? "default" : "secondary"}>
            {approved ? "Published" : "Draft"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
          <div className="flex items-center space-x-1">
            <User className="h-3 w-3" />
            <span>{author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{date}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t">
          <Link href={link}>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View
            </Button>
          </Link>
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