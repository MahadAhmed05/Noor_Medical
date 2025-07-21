"use client";
import React from "react";

type Brand = {
  id: string;
  image: string;
  name?: string;
};

const brands: Brand[] = [
  { id: "1", image: "/assests/brands/b1.png" },
  { id: "2", image: "/assests/brands/b2.png" },
  { id: "3", image: "/assests/brands/b3.jpeg" },
  { id: "4", image: "/assests/brands/b4.png" },
  { id: "5", image: "/assests/brands/b5.jpeg" },
  { id: "6", image: "/assests/brands/b6.jpeg" },
  { id: "7", image: "/assests/brands/b7.png" },
  { id: "8", image: "/assests/brands/b8.jpeg" },
  { id: "9", image: "/assests/brands/b9.jpeg" },
  { id: "10", image: "/assests/brands/b10.png" },
  { id: "11", image: "/assests/brands/b11.jpeg" },
  { id: "12", image: "/assests/brands/b12.jpeg" },
];

// Duplicate items for infinite scroll effect
const brandItems = [...brands, ...brands, ...brands];

const BrandCarousel = () => {
  return (
    <div id="brands" className="py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Trusted Brands
          </h2>
          <p className="text-gray-600 mt-2">
            Quality products from leading healthcare brands worldwide
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Outer container to clip the scroll */}
        <div className="overflow-hidden relative w-full">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Animated scroll content */}
          <div className="flex w-max animate-scroll space-x-6 hover:pause-animation">
            {brandItems.map((brand, index) => (
              <div
                key={index}
                className="group min-w-[200px] bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex-shrink-0 hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-full -translate-y-10 translate-x-10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-100 to-purple-100 rounded-full translate-y-8 -translate-x-8 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Image container with enhanced styling */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 mb-4 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-green-50 transition-all duration-500">
                  <img
                    src={brand.image}
                    alt={`Brand ${brand.id}`}
                    className="w-full h-32 object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
                  />

                  {/* Subtle glow effect behind image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Brand indicator dots */}
                <div className="flex justify-center space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300 delay-75"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-green-400 transition-all duration-300 delay-150"></div>
                </div>

                {/* Hover glow overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-blue-100/5 to-green-100/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-gradient-to-r group-hover:from-blue-200 group-hover:to-green-200 transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-green-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }

        .hover\\:pause-animation:hover .animate-scroll {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default BrandCarousel;
