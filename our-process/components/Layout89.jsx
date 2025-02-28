"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout89() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Strategy</p>
            <h3 className="text-5xl font-bold leading-[1.2] md:text-7xl lg:text-8xl">
              Phase 1: Creative Strategy & Pre-Production
            </h3>
          </div>
          <div>
            <p className="md:text-md">
              In this initial phase, we focus on understanding your unique
              goals, target audience, and brand voice through a discovery call.
              We then create a comprehensive script and storyboard to ensure
              your messaging is clear and impactful. Finally, we handle all
              scheduling and logistics to set the stage for a successful
              production.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Book" variant="secondary">
                Book
              </Button>
              <Button
                title="Session"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Session
              </Button>
            </div>
          </div>
        </div>
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
          className="w-full object-cover"
          alt="Relume placeholder image"
        />
      </div>
    </section>
  );
}
