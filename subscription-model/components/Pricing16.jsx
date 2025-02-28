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

export function Pricing16() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Plans</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Subscription Options
          </h2>
          <p className="md:text-md">
            Flexible video content plans tailored to your needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit">
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="yearly">Yearly</TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Starter Package
              </h2>
              <p>Perfect for quick content.</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $19/mo
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="Select Plan" className="w-full">
                  Select Plan
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>2-hour studio session</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>3-5 deliverables monthly</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Basic editing included</p>
                </div>
              </div>
            </div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Pro Package
              </h2>
              <p>Ideal for diverse content needs.</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $29/mo
              </h3>
              <div className="mt-6 md:mt-8">
                <Button title="Select Plan" className="w-full">
                  Select Plan
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>4-hour studio session</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>5-10 deliverables monthly</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Advanced editing included</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Repurposed clips available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Flexible content solutions</p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Custom Plan
              </h2>
              <p>Tailored for high-volume needs.</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $180/yr
              </h3>
              <p className="mt-2 font-medium">
                Enjoy a 20% discount with annual plan
              </p>
              <div className="mt-6 md:mt-8">
                <Button title="Select Plan" className="w-full">
                  Select Plan
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Unlimited revisions included</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>On-demand production available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Custom editing options</p>
                </div>
              </div>
            </div>
            <div className="h-full border border-border-primary px-6 py-8 md:p-8">
              <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
                Custom Plan
              </h2>
              <p>For businesses needing flexibility.</p>
              <div className="my-8 h-px w-full bg-border-primary" />
              <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
                $280/yr
              </h3>
              <p className="mt-2 font-medium">Save 20% with the annual plan</p>
              <div className="mt-6 md:mt-8">
                <Button title="Select Plan" className="w-full">
                  Select Plan
                </Button>
              </div>
              <div className="my-8 h-px w-full bg-border-primary" />
              <div className="grid grid-cols-1 gap-y-4 py-2">
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Priority scheduling available</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>AI-optimized editing process</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Fast turnaround guaranteed</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>Engaging content every month</p>
                </div>
                <div className="flex self-start">
                  <div className="mr-4 flex-none self-start">
                    <BiCheck className="size-6" />
                  </div>
                  <p>No long-term commitments</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
