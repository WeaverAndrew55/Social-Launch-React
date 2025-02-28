"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions about our video production process
            and how we work.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How long does each phase take?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Each phase typically takes 1-3 weeks, depending on the complexity
              of the project. We aim to provide a clear timeline during our
              initial discussions. This ensures you know what to expect at every
              stage.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How many revisions are included?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We include up to three revisions in our standard package. This
              allows you to refine the video to your satisfaction. Additional
              revisions can be accommodated for a fee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do I need involvement?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Your involvement is crucial, especially during the strategy and
              feedback phases. However, we handle the heavy lifting to make it
              easy for you. You can choose your level of participation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I provide my own script?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! You can provide your own script, or we can help create
              one tailored to your message. Collaborating on the script ensures
              it aligns perfectly with your vision.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What’s the typical turnaround time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Typical turnaround time ranges from 4 to 8 weeks, depending on
              project scope. We prioritize efficiency without compromising
              quality. Our team will keep you updated throughout the process.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
