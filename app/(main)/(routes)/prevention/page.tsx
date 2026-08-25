import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, Apple, Dumbbell, Cigarette, Wine, Stethoscope } from "lucide-react";

export default function PreventionPage() {
  const preventionTips = [
    { icon: Activity, title: "Control Blood Pressure", description: "Keep your blood pressure below 120/80. High blood pressure is the leading cause of stroke.", color: "from-red-500 to-pink-500" },
    { icon: Apple, title: "Eat Healthy", description: "Follow a diet rich in fruits, vegetables, whole grains, and lean proteins.", color: "from-green-500 to-emerald-500" },
    { icon: Dumbbell, title: "Exercise Regularly", description: "Aim for at least 30 minutes of moderate exercise 5 days a week.", color: "from-blue-500 to-cyan-500" },
    { icon: Cigarette, title: "Quit Smoking", description: "Smoking doubles your stroke risk. Quitting reduces your risk immediately.", color: "from-orange-500 to-red-500" },
    { icon: Wine, title: "Limit Alcohol", description: "If you drink, do so in moderation. Excessive alcohol increases stroke risk.", color: "from-purple-500 to-pink-500" },
    { icon: Stethoscope, title: "Regular Check-ups", description: "Monitor cholesterol, diabetes, and heart conditions regularly.", color: "from-indigo-500 to-blue-500" }
  ];

  return (
    <>
      <Breadcrumb pageName="Stroke Prevention" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Prevent Stroke: Take Control of Your Health
          </h1>
          <p className="text-xl text-muted-foreground">Up to 80% of strokes can be prevented through lifestyle changes.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preventionTips.map((tip, i) => (
            <Card key={i} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tip.color} flex items-center justify-center mb-4`}>
                  <tip.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{tip.title}</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">{tip.description}</p></CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}