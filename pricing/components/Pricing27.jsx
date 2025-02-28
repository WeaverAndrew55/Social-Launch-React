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

export function Pricing27() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Pricing</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Pricing Plans
          </h1>
          <p className="md:text-md">Choose the right package for your needs.</p>
        </div>
        <div className="w-full">
          <Tabs defaultValue="monthly">
            <TabsList className="mx-auto mb-12 flex w-fit md:mb-20">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
            <TabsContent value="monthly">
              <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Basic
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $19/mo
                      </p>
                    </div>
                    <p>Perfect for startups.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get Started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Business
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $29/mo
                      </p>
                    </div>
                    <p>Ideal for growing teams.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get Started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Enterprise
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $49/mo
                      </p>
                    </div>
                    <p>Best for large organizations.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get Started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Features Included
              </h3>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Video Funnel Creation
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  SEO Optimization
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Monthly Analytics Reports
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Dedicated Account Manager
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Custom Video Content
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Additional Features
              </h3>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Social Media Integration
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  24/7 Customer Support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Custom Branding Options
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Video Editing Services
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Performance Tracking
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Key Benefits
              </h3>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  No Hidden Fees
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Flexible Payment Options
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Tailored Solutions
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  High-Quality Production
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Expert Team Support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="rt-8 mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <Button
                  title="Get Started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get Started
                </Button>
                <Button
                  title="Get Started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get Started
                </Button>
                <Button
                  title="Get Started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get Started
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="yearly">
              <div className="grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Basic
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $180/yr
                      </p>
                      <p className="font-semibold">Save 20%</p>
                    </div>
                    <p>Best value for startups.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get Started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Business
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $280/yr
                      </p>
                      <p className="font-semibold">Save 20%</p>
                    </div>
                    <p>Ideal for growing teams.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get Started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
                <div className="flex h-full flex-col justify-between text-center">
                  <div>
                    <h2 className="text-md font-bold leading-[1.4] md:text-xl">
                      Enterprise
                    </h2>
                    <div className="my-3 md:my-4">
                      <p className="text-2xl font-bold leading-[1.2] sm:text-6xl md:text-9xl lg:text-10xl">
                        $480/yr
                      </p>
                      <p className="font-semibold">Save 20%</p>
                    </div>
                    <p>Best for large organizations.</p>
                  </div>
                  <div className="mt-6 md:mt-8">
                    <Button
                      title="Get Started"
                      className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Included Features
              </h3>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Video Funnel Creation
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  SEO Optimization
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Monthly Analytics Reports
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Dedicated Account Manager
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Custom Video Content
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Additional Features
              </h3>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Social Media Integration
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  24/7 Customer Support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Custom Branding Options
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  High-Quality Production
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Expert Team Support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <h3 className="mt-8 py-5 text-md font-bold leading-[1.4] md:text-xl">
                Key Benefits
              </h3>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  No Hidden Fees
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  10
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  25
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  Unlimited
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Flexible Payment Options
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Tailored Solutions
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  High-Quality Production
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="grid grid-cols-3 odd:bg-background-secondary md:grid-cols-[1.5fr_1fr_1fr_1fr]">
                <p className="col-span-3 row-span-1 p-4 md:col-span-1 md:px-6 md:py-4">
                  Expert Team Support
                </p>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6"></div>
                <div className="flex items-center justify-center px-4 py-4 text-center font-semibold md:px-6">
                  <BiCheck className="size-6" />
                </div>
              </div>
              <div className="rt-8 mt-8 grid grid-cols-3 gap-x-4 bg-white md:grid-cols-[1.5fr_1fr_1fr_1fr] md:gap-x-8">
                <div className="hidden md:block" />
                <Button
                  title="Get Started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get Started
                </Button>
                <Button
                  title="Get Started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get Started
                </Button>
                <Button
                  title="Get Started"
                  className="w-full whitespace-normal px-3 py-1 sm:px-4 sm:py-3"
                >
                  Get Started
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
