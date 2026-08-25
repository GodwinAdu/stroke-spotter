import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Ear, Keyboard, Monitor } from "lucide-react";

export default function AccessibilityPage() {
  const features = [
    { icon: Eye, title: "Visual Accessibility", items: ["High contrast mode support", "Scalable text and images", "Screen reader compatible", "Alt text for all images"] },
    { icon: Ear, title: "Audio Accessibility", items: ["Captions for video content", "Text alternatives for audio", "Visual indicators for sounds", "Adjustable audio controls"] },
    { icon: Keyboard, title: "Keyboard Navigation", items: ["Full keyboard navigation", "Skip to content links", "Logical tab order", "Visible focus indicators"] },
    { icon: Monitor, title: "Device Compatibility", items: ["Responsive design", "Mobile-friendly interface", "Cross-browser support", "Assistive technology compatible"] }
  ];

  return (
    <>
      <Breadcrumb pageName="Accessibility" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">WCAG 2.1 AA Compliant</Badge>
            <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
            <p className="text-xl text-muted-foreground">We are committed to ensuring our website is accessible to everyone, including people with disabilities.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {features.map((feature, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-purple-500 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, j) => (
                      <li key={j} className="flex items-center space-x-2">
                        <Badge variant="outline">✓</Badge>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-950/20 dark:to-purple-950/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Feedback and Assistance</h2>
              <p className="text-muted-foreground mb-4">
                We continuously work to improve the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> accessibility@strokespotter.org</li>
                <li><strong>Phone:</strong> Available upon request</li>
                <li><strong>Response Time:</strong> We aim to respond within 2 business days</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}