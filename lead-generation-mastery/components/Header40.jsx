"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

export function Header40() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 overflow-x-auto pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          Turn Viewers into High-Quality Leads with Video
        </h1>
        <p className="md:text-md">
          Capture & convert more leads with professionally crafted, high-impact
          videos designed for marketing funnels. Our strategic video content
          transforms your audience into engaged prospects ready to take action.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-4 md:mt-8">
          <Button title="Get Started Today">Get Started Today</Button>
          <Button title="See Video Examples" variant="secondary">
            See Video Examples
          </Button>
        </div>
      </div>
      <div>
        <div className="w-full object-cover lg:h-screen lg:max-h-[60rem]">
          <Dialog>
            <DialogTrigger className="relative flex size-full items-center justify-center">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-video-thumbnail.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
              <span className="absolute inset-0 z-10 bg-black/50" />
              <FaCirclePlay className="absolute z-20 size-16 text-white" />
            </DialogTrigger>
            <DialogContent>
              <VideoIframe video="https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW" />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
