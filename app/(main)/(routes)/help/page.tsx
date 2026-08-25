import Breadcrumb from "@/components/common/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const faqs = [
    { q: "What is a stroke?", a: "A stroke occurs when blood flow to part of the brain is blocked or when a blood vessel in the brain bursts, causing brain cells to die." },
    { q: "What are the warning signs?", a: "Remember F.A.S.T.: Face drooping, Arm weakness, Speech difficulty, Time to call 911. Other signs include sudden numbness, confusion, vision problems, or severe headache." },
    { q: "How quickly should I act?", a: "Every second counts! Call 911 immediately if you notice any stroke symptoms. Treatment is most effective within the first 3-4 hours." },
    { q: "Can strokes be prevented?", a: "Yes! Up to 80% of strokes can be prevented through healthy lifestyle choices, managing blood pressure, not smoking, and regular medical check-ups." },
    { q: "What is a TIA?", a: "A Transient Ischemic Attack (TIA) or 'mini-stroke' is a temporary blockage. Even though symptoms may resolve, it's a serious warning sign requiring immediate medical attention." }
  ];

  return (
    <>
      <Breadcrumb pageName="Help Center" />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 mx-auto mb-4 text-red-600" />
            <h1 className="text-4xl font-bold mb-4">How Can We Help?</h1>
            <p className="text-xl text-muted-foreground">Find answers to common questions about stroke awareness and prevention.</p>
          </div>

          <Card className="mb-8">
            <CardHeader><CardTitle>Frequently Asked Questions</CardTitle></CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger>{faq.q}</AccordionTrigger>
                    <AccordionContent>{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-50 to-purple-50 dark:from-red-950/20 dark:to-purple-950/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
              <p className="text-muted-foreground mb-6">Our team is here to assist you with any questions or concerns.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact-us" className="flex-1">
                  <Button className="w-full" variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </Link>
                <Link href="tel:911" className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-red-600 to-purple-600">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency: 911
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}