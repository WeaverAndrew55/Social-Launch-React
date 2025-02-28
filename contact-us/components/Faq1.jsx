"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Here are some common questions to help you get started with our
            services.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              How soon can we start?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Once you reach out, we can typically begin your project within one
              week. Our team will discuss your needs and finalize the details
              promptly. We prioritize a quick turnaround to ensure your goals
              are met.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to choose a package?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To determine the best package for your needs, we recommend
              scheduling a consultation. Our team will assess your goals and
              provide tailored options. This ensures you select the right fit
              for your project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Typical turnaround time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The typical turnaround time for video projects varies based on
              complexity. Most projects are completed within 2-4 weeks. We will
              provide a detailed timeline during our initial discussions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer custom strategies?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we specialize in creating custom video marketing strategies
              tailored to your brand. Our team collaborates closely with you to
              understand your vision. This ensures the final product aligns
              perfectly with your objectives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I book a call?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We encourage you to book a call to discuss your
              project in detail. This allows us to address any specific
              questions you may have. Our team is here to assist you every step
              of the way.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            Reach out to our team for further assistance.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
