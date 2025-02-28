"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@relume_io/relume-ui";
import React from "react";

export function Faq2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about our services, pricing, and
            processes.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What services do you offer?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer a range of services including lead generation, conversion
              optimization, and authority-building video content. Our tailored
              marketing funnels ensure that your business stands out. Explore
              our service offerings to find the right fit for your needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              How does pricing work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our pricing is tiered to accommodate different business sizes and
              needs. We focus on providing value through our packages, ensuring
              you get the best return on investment. For detailed pricing,
              please visit our pricing page.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What is your process?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our process begins with understanding your goals and challenges.
              We then create a customized strategy that aligns with your
              objectives. Throughout the project, we maintain open communication
              to ensure your satisfaction.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I see examples?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We have a portfolio showcasing our past projects and
              client success stories. Visit our portfolio page to see the impact
              of our work.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I need help?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our team is here to assist you. If you have any questions or need
              further assistance, please reach out. We are committed to helping
              you succeed.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">Contact us for more information.</p>
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
