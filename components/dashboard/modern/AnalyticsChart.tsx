"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const chartData = [
  { month: "Jan", users: 1200, posts: 45, events: 8 },
  { month: "Feb", users: 1350, posts: 52, events: 12 },
  { month: "Mar", users: 1580, posts: 48, events: 15 },
  { month: "Apr", users: 1820, posts: 61, events: 18 },
  { month: "May", users: 2100, posts: 58, events: 22 },
  { month: "Jun", users: 2400, posts: 67, events: 25 }
];

export default function AnalyticsChart() {
  const maxUsers = Math.max(...chartData.map(d => d.users));
  const currentMonth = chartData[chartData.length - 1];
  const previousMonth = chartData[chartData.length - 2];
  const userGrowth = ((currentMonth.users - previousMonth.users) / previousMonth.users * 100).toFixed(1);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold">User Growth</CardTitle>
        <Badge variant="outline" className="flex items-center space-x-1">
          {parseFloat(userGrowth) > 0 ? (
            <TrendingUp className="h-3 w-3 text-green-600" />
          ) : (
            <TrendingDown className="h-3 w-3 text-red-600" />
          )}
          <span className={parseFloat(userGrowth) > 0 ? "text-green-600" : "text-red-600"}>
            {userGrowth}%
          </span>
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-end space-x-2 h-32">
            {chartData.map((data, index) => (
              <div key={data.month} className="flex-1 flex flex-col items-center space-y-2">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm transition-all duration-300 hover:opacity-80"
                  style={{ height: `${(data.users / maxUsers) * 100}%` }}
                />
                <span className="text-xs text-muted-foreground">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">{currentMonth.users.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">Total Users</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">{currentMonth.posts}</p>
              <p className="text-xs text-muted-foreground">Posts</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">{currentMonth.events}</p>
              <p className="text-xs text-muted-foreground">Events</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}