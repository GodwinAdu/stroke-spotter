import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionBenefit() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Individual  Benefits</AccordionTrigger>
        <AccordionContent>Stay tuned for update about this.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Organization Benenits</AccordionTrigger>
        <AccordionContent>
          Yes. Stay tuned for more update about this section
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Strokespotter Hub</AccordionTrigger>
        <AccordionContent>
          Soon, Spot Stroke Fast Foundation will introduce the Strokespotter Hub
          Channel. It's a place for people to come together, connect, and talk
          about stroke and its effects. Remember, when we unite, we're more
          powerful than stroke.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
