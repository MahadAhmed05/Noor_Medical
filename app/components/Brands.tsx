"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Brand = {
  id: string;
  image: string;
};

const brands: Brand[] = [
  { id: "1", image: "/assests/pp1.jpeg" },
  { id: "2", image: "/assests/pp1.jpeg" },
  { id: "3", image: "/assests/pp1.jpeg" },
  { id: "4", image: "/assests/pp1.jpeg" },
  { id: "5", image: "/assests/pp1.jpeg" },
  { id: "6", image: "/assests/pp1.jpeg" },
  { id: "1", image: "/assests/pp1.jpeg" },
  { id: "2", image: "/assests/pp1.jpeg" },
  { id: "3", image: "/assests/pp1.jpeg" },
  { id: "4", image: "/assests/pp1.jpeg" },
  { id: "5", image: "/assests/pp1.jpeg" },
  { id: "6", image: "/assests/pp1.jpeg" },
  // Add more as needed
];

const BrandCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current?.scrollBy({ left: 220, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -220 : 220;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="py-8 bg-white">
      <div className="max-w-[1280px] mx-auto relative px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-blue-600">Brands</h2>
          <div className="flex flex-row items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-md text-gray-600 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300"
            >
              <FaArrowLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-300 shadow-md text-gray-600 hover:bg-blue-500 hover:text-white hover:shadow-lg transition-colors duration-300"
            >
              <FaArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="min-w-[180px] bg-gray-50 border border-gray-200 rounded-xl shadow p-4 flex-shrink-0 hover:shadow-md transition"
            >
              <img
                src={brand.image}
                alt={`Brand ${brand.id}`}
                className="w-full h-32 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;
