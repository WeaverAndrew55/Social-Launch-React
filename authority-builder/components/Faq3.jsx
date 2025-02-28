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
            Find answers to your questions about authority-building videos and
            their impact on your brand.
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
              How do these videos position me as an expert?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              These videos showcase your expertise and insights, establishing
              you as a thought leader. By sharing valuable content, you build
              trust with your audience. This positions you as an authority in
              your industry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Best platform for publishing?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              The best platforms include LinkedIn, YouTube, and your own
              website. Each platform serves different audiences and purposes.
              Choose based on where your target audience engages most.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I repurpose content?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! Repurposing content maximizes your investment and
              extends reach. You can adapt videos for blogs, social media, and
              presentations. This increases visibility and engagement across
              multiple channels.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              Impact on personal brand?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              These videos enhance your credibility and visibility. They help
              differentiate you from competitors and establish a strong personal
              brand. This leads to more opportunities and connections in your
              industry.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Help with PR placements?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, these videos can significantly improve your PR efforts. They
              provide engaging content that media outlets are more likely to
              share. This increases your chances of securing speaking
              engagements and interviews.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
