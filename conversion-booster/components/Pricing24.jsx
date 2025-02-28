"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h1>
          <p className="md:text-md">
            Choose the plan that suits your business needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Basic Plan
                </h2>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $19/mo
                </h3>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Landing Page Explainer Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Objection Handling Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Testimonial Video</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Business Plan
                </h2>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $29/mo
                </h3>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Comparison Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Product Demonstration Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Strong CTA Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Limited-Time Offer Video</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Enterprise Plan
                </h2>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $49/mo
                </h3>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Urgency-Driven Content</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Landing Page Explainer Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Objection Handling Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Testimonial Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Comparison Video</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
          >
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Basic Plan
                </h2>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $180/yr
                </h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Product Demonstration Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Strong CTA Video</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Limited-Time Offer Video</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Business Plan
                </h2>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $280/yr
                </h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Urgency-Driven Content</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex h-full flex-col justify-between border border-border-primary px-6 py-8 md:p-8">
              <div>
                <div className="rb-4 mb-4 flex flex-col items-end justify-end">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                    alt="Relume icon 1"
                    className="size-12"
                  />
                </div>
                <h2 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                  Enterprise Plan
                </h2>
                <h3 className="text-6xl font-bold md:text-9xl lg:text-10xl">
                  $480/yr
                </h3>
                <p className="mt-2 font-medium">Save 20%</p>
                <div className="my-8 h-px w-full shrink-0 bg-border" />
                <p>Includes:</p>
                <div className="mb-8 mt-4 grid grid-cols-1 gap-y-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <BiCheck className="size-6" />
                    </div>
                    <p>Feature text goes here</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
