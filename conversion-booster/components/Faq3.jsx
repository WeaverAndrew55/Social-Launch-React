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
            Find answers to your questions about our conversion-optimized video
            services.
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
              How do these videos fit?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              These videos are designed to seamlessly integrate into your sales
              funnel, enhancing each stage. They clarify your offerings, build
              trust, and drive potential customers toward making a purchase. By
              addressing key objections and showcasing benefits, they
              effectively guide viewers toward conversion.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              What’s the turnaround time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our average turnaround time for video production is typically 2-4
              weeks, depending on the complexity. We prioritize efficiency while
              ensuring high-quality output. You will receive regular updates
              throughout the process to keep you informed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I A/B test?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, A/B testing different versions of your videos is highly
              encouraged. This allows you to determine which content resonates
              best with your audience. Our team can assist you in setting up and
              analyzing these tests for optimal results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What industries benefit most?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our video packages are versatile and can benefit a wide range of
              industries, including e-commerce, healthcare, and technology.
              Businesses looking to improve engagement and conversion rates will
              find our services particularly valuable. We tailor our approach to
              meet the unique needs of each sector.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I upgrade later?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We offer flexible options for upgrading to higher
              packages as your business grows. Our team will work with you to
              ensure a smooth transition and maximize your investment. You can
              always choose a plan that best fits your evolving needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
