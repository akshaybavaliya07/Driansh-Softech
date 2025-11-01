"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  sub_title?: string;
  data: FAQItem[];
}

export default function FAQ({ sub_title, data }: FAQSectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1D1A4E]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg mt-5 max-w-5xl mx-auto">{sub_title}</p>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {data.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl shadow-md transition-all duration-300 border-none"
            >
              <AccordionTrigger className="flex justify-between items-center w-full text-[#1D1A4E] px-6 py-4 font-bold text-lg no-underline hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg px-6 pb-4 bg-transparent shadow-none whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
