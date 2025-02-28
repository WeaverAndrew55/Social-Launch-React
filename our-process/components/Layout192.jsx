"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Editing</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Phase 3: Editing, Motion Graphics & Final Touches
            </h2>
            <p className="md:text-md">
              In this phase, we refine your video to perfection. Our expert team
              ensures every detail shines through, enhancing the overall impact.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="View Work Samples" variant="secondary">
                View Work Samples
              </Button>
              <Button
                title="Portfolio"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
