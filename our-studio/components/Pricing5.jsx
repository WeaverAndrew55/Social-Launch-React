"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing5() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-8 w-full max-w-lg lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Studio Packages
          </h2>
          <p className="md:text-md">
            Choose from flexible options tailored to your video production needs
            and budget.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center gap-y-12 md:gap-x-12 md:gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-2">
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Hourly Rental
                </h3>
                <p>
                  Ideal for quick shoots and one-off content creation without
                  long-term commitment.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Subscription Model
                </h3>
                <p>
                  Enjoy recurring monthly access for brands focused on
                  consistent content production.
                </p>
              </div>
            </div>
            <div className="flex self-start">
              <div className="mr-6 flex-none self-start">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-8"
                  alt="Relume logo 1"
                />
              </div>
              <div>
                <h3 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Reassurance Statement
                </h3>
                <p>
                  Fully equipped & staffed—just bring your creativity and let us
                  handle the rest.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="mb-2 text-xl font-bold md:text-2xl">
                    Basic Plan
                  </h4>
                  <p>Perfect for beginners</p>
                </div>
                <h5 className="justify-self-end text-6xl font-bold md:text-9xl lg:text-10xl">
                  $19/mo
                </h5>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <p>Includes:</p>
              <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2 md:grid-cols-2 md:gap-x-6">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>High-quality lighting setup</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>4K camera access</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Editing support available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Soundproof podcast area</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Multiple backdrop options</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>On-site creative team</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Flexible booking options</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Affordable pricing plans</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Easy online reservations</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Comprehensive support services</p>
                </div>
              </div>
              <div className="my-8 h-px w-full shrink-0 bg-border" />
              <div>
                <Button title="Check Availability" className="w-full">
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
