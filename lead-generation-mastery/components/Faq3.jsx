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
            Have questions about our Lead Generation Mastery Package? We’ve got
            the answers you need!
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
              How does this package fit?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              This package is designed to seamlessly integrate into your
              marketing funnel, enhancing lead capture. The videos serve as
              engaging touchpoints that guide potential customers through the
              buying process. By addressing their needs and questions, they help
              convert interest into action.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What’s the turnaround time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our average turnaround time for video production is typically 2-4
              weeks, depending on the complexity of the project. We prioritize
              quality and ensure that each video meets our high standards. Rest
              assured, we keep you updated throughout the process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              How to integrate videos?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Integrating our videos into your ads and landing pages is
              straightforward. We provide you with the necessary formats and
              guidelines to ensure optimal performance. Our team is also
              available to assist with any specific integration needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I upgrade later?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can upgrade to a higher package at any time. We
              understand that your needs may evolve as your business grows. Our
              team will guide you through the upgrade process to ensure a smooth
              transition.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              What’s the expected ROI?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The expected ROI from our videos can vary based on your specific
              goals and implementation. However, many clients report significant
              increases in lead conversion rates and reduced cost-per-lead. We
              focus on creating content that drives measurable results.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
