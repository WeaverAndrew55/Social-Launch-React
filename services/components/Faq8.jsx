"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Find answers to common questions about our services, pricing, and
            video production process.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What services do you offer?
            </h2>
            <p>
              We offer a range of video marketing services, including lead
              generation, conversion optimization, and authority-building
              packages. Each package is designed to meet specific business
              needs. Explore our services to find the right fit for you.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How does pricing work?
            </h2>
            <p>
              Our pricing is tiered based on the package you choose and the
              services included. We provide transparent pricing with no hidden
              fees. For detailed pricing information, visit our Pricing page.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What is the process?
            </h2>
            <p>
              Our process begins with a consultation to understand your goals.
              We then create a tailored video strategy and production timeline.
              Throughout the project, we maintain open communication to ensure
              your vision is realized.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              How long does production take?
            </h2>
            <p>
              Production timelines vary based on the complexity of the project
              and the package selected. Typically, our turnaround time ranges
              from a few weeks to a couple of months. We will provide a detailed
              timeline during the consultation.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you offer revisions?
            </h2>
            <p>
              Yes, we offer revisions to ensure the final product meets your
              expectations. Each package includes a set number of revision
              rounds. Additional revisions can be accommodated for an extra fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
