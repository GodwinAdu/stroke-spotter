import DashboardStats from "@/components/dashboard/modern/DashboardStats";
import RecentActivity from "@/components/dashboard/modern/RecentActivity";
import QuickActions from "@/components/dashboard/modern/QuickActions";
import AnalyticsChart from "@/components/dashboard/modern/AnalyticsChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, FileText, Calendar } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive overview of your platform's performance and metrics.
          </p>
        </div>
        <Badge variant="outline" className="flex items-center space-x-2">
          <BarChart3 className="h-4 w-4" />
          <span>Real-time</span>
        </Badge>
      </div>

      <DashboardStats />

      <div className="grid gap-6 lg:grid-cols-2">
        <AnalyticsChart />
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Platform Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Active Users</h4>
                    <p className="text-sm text-muted-foreground">Last 30 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">2,847</p>
                  <p className="text-sm text-green-600">+12.5%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-green-500/10 to-blue-500/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Content Published</h4>
                    <p className="text-sm text-muted-foreground">This month</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">156</p>
                  <p className="text-sm text-green-600">+8.2%</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Events Scheduled</h4>
                    <p className="text-sm text-muted-foreground">Next 30 days</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold">24</p>
                  <p className="text-sm text-green-600">+3.1%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <RecentActivity />
    </div>
  );
}