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
            Get all the answers you need before booking your studio session with
            us.
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
              What’s included in booking?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Your studio booking includes access to all equipment, lighting
              setups, and on-site support. We provide a fully equipped space to
              ensure you can focus on your creative process. Additional
              amenities like refreshments and lounge areas are also available.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="md:py-5 md:text-md">
              Can I bring crew?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you are welcome to bring your own crew and equipment. We
              encourage collaboration to enhance your project. Just let us know
              in advance to ensure a smooth experience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="md:py-5 md:text-md">
              Do you provide support?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! Our team is available on-site to assist with filming
              and technical needs. We aim to make your production as seamless as
              possible. Just inform us of your requirements ahead of time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="md:py-5 md:text-md">
              What’s the cancellation policy?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our cancellation policy allows for changes up to 48 hours before
              your booking. If you need to reschedule, please contact us as soon
              as possible. We strive to accommodate your needs whenever we can.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="md:py-5 md:text-md">
              Are refreshments available?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we provide refreshments for our clients during their studio
              sessions. Enjoy complimentary snacks and beverages to keep you
              energized. Our lounge area is perfect for breaks and relaxation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
