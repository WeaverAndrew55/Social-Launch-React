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
            Find answers to common questions about our pricing and services.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="md:py-5 md:text-md">
              What’s included in packages?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Each package includes a variety of video types tailored to your
              needs. You'll receive clear deliverables and timelines. Our goal
              is to ensure you understand exactly what you're getting.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you offer custom pricing?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we provide custom pricing options to fit unique project
              requirements. Our team will work with you to create a tailored
              solution. Just reach out for a consultation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I upgrade plans?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! You can upgrade or switch plans at any time. We want
              to ensure you have the best fit for your evolving needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Are there hidden fees?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              No, we pride ourselves on transparent pricing. There are no hidden
              fees in our packages. Everything is clearly outlined upfront.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              How does payment work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer both monthly and one-time payment options. You can choose
              what works best for your budget. Our team will guide you through
              the process.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Still have questions?
          </h4>
          <p className="md:text-md">
            We're here to help you with any inquiries.
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
