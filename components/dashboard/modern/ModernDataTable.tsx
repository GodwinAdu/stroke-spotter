"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, MoreHorizontal, UserPlus } from "lucide-react";
import { useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  status?: string;
  image?: string;
  joinDate?: string;
}

interface ModernDataTableProps {
  data: User[];
  title?: string;
  description?: string;
}

export default function ModernDataTable({ 
  data, 
  title = "Users",
  description = "Manage your platform users"
}: ModernDataTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredData = data.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string = "active") => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "inactive":
        return "bg-gray-500/10 text-gray-700 border-gray-200";
      case "pending":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-200";
      default:
        return "bg-blue-500/10 text-blue-700 border-blue-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            <UserPlus className="h-4 w-4 mr-2" />
            Add User
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="rounded-lg border">
          <div className="grid grid-cols-12 gap-4 p-4 border-b bg-muted/50 font-medium text-sm">
            <div className="col-span-4">User</div>
            <div className="col-span-3">Email</div>
            <div className="col-span-2">Role</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-1">Actions</div>
          </div>
          
          <div className="divide-y">
            {filteredData.map((user) => (
              <div key={user.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-muted/50 transition-colors">
                <div className="col-span-4 flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.image} />
                    <AvatarFallback className="text-xs">
                      {user.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Joined {user.joinDate || "Recently"}
                    </p>
                  </div>
                </div>
                
                <div className="col-span-3 flex items-center">
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                
                <div className="col-span-2 flex items-center">
                  <Badge variant="outline">
                    {user.role || "Member"}
                  </Badge>
                </div>
                
                <div className="col-span-2 flex items-center">
                  <Badge variant="outline" className={getStatusColor(user.status)}>
                    {user.status || "Active"}
                  </Badge>
                </div>
                
                <div className="col-span-1 flex items-center">
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {filteredData.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No users found matching your search.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}