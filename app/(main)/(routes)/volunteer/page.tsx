import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";

export default function VolunteerPage() {
  const opportunities = [
    { icon: Users, title: "Community Educator", description: "Teach F.A.S.T. method in schools and community centers" },
    { icon: Heart, title: "Support Group Leader", description: "Lead support groups for stroke survivors and families" },
    { icon: Calendar, title: "Event Coordinator", description: "Help organize awareness events and fundraisers" },
    { icon: BookOpen, title: "Content Creator", description: "Create educational materials and social media content" }
  ];

  return (
    <>
      <Breadcrumb pageName="Volunteer" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            Volunteer With Us
          </h1>
          <p className="text-xl text-muted-foreground">Join our mission to save lives through stroke education and awareness.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {opportunities.map((opp, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center mb-4">
                  <opp.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle>{opp.title}</CardTitle>
              </CardHeader>
              <CardContent><p className="text-muted-foreground">{opp.description}</p></CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-950/20 dark:to-purple-950/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-muted-foreground mb-6">Your time and skills can help save lives. Join our volunteer team today.</p>
            <Link href="/contact-us">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-purple-600">
                Apply to Volunteer
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
}