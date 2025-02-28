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
            Find answers to your questions about our partnership program and
            video production services.
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
              What is white-labeling?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              White-labeling allows you to brand our video content as your own.
              This means you can deliver high-quality videos to your clients
              without the need for in-house production. It's a seamless way to
              enhance your service offerings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is turnaround time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our typical turnaround time for video projects is between 2 to 4
              weeks. This can vary based on project complexity and volume. We
              strive to meet your deadlines while maintaining quality.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I customize projects?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We offer customizable video solutions tailored to your
              specific needs. Whether you require different styles or formats,
              we can adapt our services to fit your vision.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What are your prices?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our pricing is flexible and depends on the scope of your project.
              We offer tiered packages to accommodate different budgets and
              needs. Contact us for a custom quote.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer discounts?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we provide volume discounts for agencies that require ongoing
              video production. The more projects you bring, the better the
              pricing. Reach out to discuss potential savings.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
