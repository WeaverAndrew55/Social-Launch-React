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
            Have questions about our subscription model? We’ve got you covered!
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
              What content can I create?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              With our subscription, you can create various types of video
              content, including promotional videos, social media clips, and
              educational materials. Each plan is tailored to your specific
              needs, ensuring you have the right content for your audience.
              Whether it's short-form or long-form, we've got you covered!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I customize my package?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! We understand that every business has unique needs, so
              our packages can be customized to include additional sessions or
              specific content types. Just reach out to our team, and we’ll work
              with you to create the perfect plan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              What’s the turnaround time?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our standard turnaround time is typically within a few weeks,
              depending on the complexity of the project. We prioritize
              efficiency without sacrificing quality, ensuring you receive
              polished videos ready for distribution. For urgent requests, we
              offer expedited options as well.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What if I need more?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you find that you need more videos than your current plan
              includes, you can easily upgrade your subscription. Our flexible
              plans allow you to scale your content production as needed. Just
              get in touch, and we’ll help you adjust your package.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I change my subscription?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can upgrade, downgrade, or cancel your subscription at
              any time. We believe in providing our clients with flexibility and
              control over their content needs. Just let us know your
              preferences, and we’ll take care of the rest.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
