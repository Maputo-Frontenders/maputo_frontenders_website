"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DictionaryProps, Locale } from "@/lib/getDictionary";
import { faqData } from "./data-faq";

type Props = {
  intl: DictionaryProps;
  lang: Locale;
};

export function FaqSection({ intl, lang }: Props) {
  return (
    <section className="md:container w-full text-white space-y-8" id="team">
      <div className="container text-center space-y-2">
        <h2 className="text-4xl font-bold leading-normal">
          {intl.contact.faq.title}{" "}
          <span className="bg-gradient-turquoise-lavender bg-clip-text text-transparent">
            {intl.contact.faq.titleHighlight}
          </span>
        </h2>
        <p className="max-w-2xl mx-auto">{intl.contact.faq.description}</p>
      </div>

      <Accordion type="single" collapsible className="max-w-5xl mx-auto">
        {faqData(lang).map((item, index) => (
          <AccordionItem
            key={item.question}
            value={item.question}
            className={`px-8 ${
              index === faqData(lang).length - 1 ? "border-b-0" : "border-b"
            }`}
          >
            <AccordionTrigger className="text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
