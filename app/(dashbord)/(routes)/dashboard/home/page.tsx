import DashboardStats from "@/components/dashboard/modern/DashboardStats";
import RecentActivity from "@/components/dashboard/modern/RecentActivity";
import QuickActions from "@/components/dashboard/modern/QuickActions";
import AnalyticsChart from "@/components/dashboard/modern/AnalyticsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, TrendingUp } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
          <p className="text-muted-foreground mt-2">
            Welcome back! Here's what's happening with your stroke awareness platform.
          </p>
        </div>
        <Badge variant="outline" className="flex items-center space-x-2">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span>Live</span>
        </Badge>
      </div>

      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <RecentActivity />
          <AnalyticsChart />
        </div>
        <div className="space-y-6">
          <QuickActions />
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center">
                <CalendarDays className="h-5 w-5 mr-2" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg border">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Stroke Awareness Workshop</h4>
                    <p className="text-xs text-muted-foreground">March 15, 2024 • 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Survivor Support Group</h4>
                    <p className="text-xs text-muted-foreground">March 18, 2024 • 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg border">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium">Prevention Webinar</h4>
                    <p className="text-xs text-muted-foreground">March 22, 2024 • 1:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
