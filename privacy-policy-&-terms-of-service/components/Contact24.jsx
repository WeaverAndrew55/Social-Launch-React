"use client";

import React from "react";
import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

export function Contact24() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Support</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Get in Touch
          </h2>
          <p className="md:text-md">
            We're here to assist you with any inquiries.
          </p>
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <BiEnvelope className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Email
            </h3>
            <p className="mb-5 md:mb-6">
              For privacy and legal concerns, reach out to us.
            </p>
            <a className="underline" href="#">
              support@sociallaunchlabs.com
            </a>
          </div>
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <BiMessageDetail className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Live chat
            </h3>
            <p className="mb-5 md:mb-6">
              Chat with our team for immediate assistance.
            </p>
            <a className="underline" href="#">
              Start a chat
            </a>
          </div>
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <BiPhone className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Phone
            </h3>
            <p className="mb-5 md:mb-6">
              Call us for urgent inquiries or support.
            </p>
            <a className="underline" href="#">
              +1 (555) 123-4567
            </a>
          </div>
          <div>
            <div className="rb-5 mb-5 md:mb-6">
              <BiMap className="size-12" />
            </div>
            <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
              Office
            </h3>
            <p className="mb-5 md:mb-6">
              Visit us for in-person consultations and support.
            </p>
            <a className="underline" href="#">
              456 Marketing Ave, Los Angeles CA 90001 US
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
