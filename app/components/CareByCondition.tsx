"use client";

import React from "react";
import Image from "next/image";

const brandImages = [
  "/assests/cbc1.png",
  "/assests/cbc2.png",
  "/assests/cbc3.png",
  "/assests/cbc4.png",
  "/assests/cbc5.png",
];

const ImageCardsSection = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Care By Condition
          </h2>
          <p className="text-gray-600 mt-2">
            Find targeted healthcare solutions for your specific needs
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Flex Layout Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {brandImages.map((src, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-19.2px)] max-w-[240px] min-w-[200px]"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group-hover:scale-105">
                {/* Background gradient overlay - reduced opacity and moved behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-green-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

                {/* Image container */}
                <div className="relative w-full h-full p-3 z-10">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={src}
                      alt={`Care condition ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    />
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-gradient-to-br from-blue-200/30 to-green-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-gradient-to-tr from-green-200/30 to-purple-200/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150"></div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-blue-200/50 group-hover:to-green-200/50 transition-all duration-500"></div>

                {/* Hover glow overlay - reduced opacity */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-blue-100/2 to-green-100/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-3">
            {brandImages.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-gradient-to-r from-blue-300 to-green-300 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCardsSection;
