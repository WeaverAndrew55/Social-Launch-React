"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Cta13() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <div>
          <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl">
            Let’s Create Something Powerful Together
          </h1>
        </div>
        <div>
          <p className="md:text-md">
            Ready to elevate your brand with impactful video content? Our team
            is here to guide you every step of the way.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Start Your Project">Start Your Project</Button>
            <Button title="Book a Strategy Session" variant="secondary">
              Book a Strategy Session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
