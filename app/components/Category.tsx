"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type Category = {
  id: string;
  name: string;
  image: string;
};

const categories: Category[] = [
  { id: "1", name: "Medicine", image: "/assests/pp1.jpeg" },
  { id: "2", name: "Derma", image: "/assests/pp1.jpeg" },
  { id: "3", name: "Intimate Essentials", image: "/assests/pp1.jpeg" },
  { id: "4", name: "Baby & Mother Care", image: "/assests/pp1.jpeg" },
  { id: "5", name: "OTC And Health Need", image: "/assests/pp1.jpeg" },
  { id: "6", name: "Nutrition Support", image: "/assests/pp1.jpeg" },
  { id: "3", name: "Intimate Essentials", image: "/assests/pp1.jpeg" },
  { id: "4", name: "Baby & Mother Care", image: "/assests/pp1.jpeg" },
  { id: "5", name: "OTC And Health Need", image: "/assests/pp1.jpeg" },
  { id: "6", name: "Nutrition Support", image: "/assests/pp1.jpeg" },
];

const CategoryCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      scrollRef.current?.scrollBy({ left: 240, behavior: "smooth" });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -240 : 240;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="py-8 bg-gray-50">
      <div className="max-w-[1280px] mx-auto relative px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-green-600">Categories</h2>
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
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="min-w-[220px] bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex-shrink-0 hover:shadow-md transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-40 object-contain mb-3"
              />
              <p className="text-center font-semibold text-sm">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
