import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQAccordion({ question, ans }) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{ans}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default FAQAccordion;
