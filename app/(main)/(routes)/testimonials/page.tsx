import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

export default function TestimonialsPage() {
  const testimonials = [
    { name: "Sarah Johnson", role: "Stroke Survivor", story: "Thanks to the F.A.S.T. training I received, I recognized my symptoms immediately and called 911. The quick response saved my life and prevented permanent damage.", location: "New York" },
    { name: "Michael Chen", role: "Family Member", story: "When my father showed stroke symptoms, I knew exactly what to do because of this organization's education programs. We got him to the hospital in time.", location: "California" },
    { name: "Dr. Emily Rodriguez", role: "Healthcare Provider", story: "The community education programs have made a real difference. We're seeing more patients arrive within the critical treatment window.", location: "Texas" },
    { name: "James Wilson", role: "Volunteer", story: "Being part of this mission to educate communities about stroke prevention and recognition has been incredibly rewarding. Every person we teach could save a life.", location: "Florida" }
  ];

  return (
    <>
      <Breadcrumb pageName="Success Stories" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Lives Changed, Lives Saved
          </h1>
          <p className="text-xl text-muted-foreground">Real stories from people whose lives were impacted by stroke education.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((test, i) => (
            <Card key={i} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-red-600 mb-4" />
                <p className="text-muted-foreground mb-4 italic">{test.story}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">{test.name}</p>
                    <p className="text-sm text-muted-foreground">{test.role}</p>
                  </div>
                  <Badge variant="outline">{test.location}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}