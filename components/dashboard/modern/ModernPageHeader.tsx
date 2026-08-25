"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface ModernPageHeaderProps {
  title: string;
  description?: string;
  createLink?: string;
  createLabel?: string;
  count?: number;
  showSearch?: boolean;
}

export default function ModernPageHeader({
  title,
  description,
  createLink,
  createLabel = "Create New",
  count,
  showSearch = true
}: ModernPageHeaderProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h1>
          {description && (
            <p className="text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        <div className="flex items-center space-x-3">
          {count !== undefined && (
            <Badge variant="outline" className="px-3 py-1">
              {count} items
            </Badge>
          )}
          {createLink && (
            <Link href={createLink}>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                {createLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
      
      {showSearch && (
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      )}
    </div>
  );
}