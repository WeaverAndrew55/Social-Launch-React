"use client";

import React from "react";

export function Layout6() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold leading-[1.2] md:mb-6 md:text-5xl lg:text-6xl">
              Why Agencies Trust Social Launch Labs for Exceptional Video
              Production Services
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              At Social Launch Labs, we empower agencies with top-tier video
              solutions tailored to their needs. Our commitment to quality and
              scalability ensures your agency can deliver exceptional content
              without the hassle.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  White-Labeled Services
                </h6>
                <p>
                  Deliver high-quality videos seamlessly branded under your
                  agency's name.
                </p>
              </div>
              <div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  Scalable Production
                </h6>
                <p>
                  From one-off projects to high-volume content creation, we’ve
                  got you covered.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
