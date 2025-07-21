"use client";
import React, { useEffect, useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaPills,
  FaHeart,
  FaBaby,
  FaLeaf,
} from "react-icons/fa";
import { MdHealthAndSafety, MdSpa } from "react-icons/md";

type Category = {
  id: string;
  name: string;
  image: string;
  color: string;
  gradient: string;
  icon: JSX.Element;
  tag?: string;
};

const categories: Category[] = [
  {
    id: "1",
    name: "Medicine",
    image: "/assests/category/c1.webp",
    color: "text-blue-600",
    gradient: "from-blue-50 to-blue-100",
    icon: <FaPills className="text-blue-500" size={24} />,
    tag: "Essential",
  },
  {
    id: "2",
    name: "Derma",
    image: "/assests/category/c2.webp",
    color: "text-pink-600",
    gradient: "from-pink-50 to-pink-100",
    icon: <MdSpa className="text-pink-500" size={24} />,
  },
  {
    id: "4",
    name: "Baby & Mother Care",
    image: "/assests/category/c3.webp",
    color: "text-green-600",
    gradient: "from-green-50 to-green-100",
    icon: <FaBaby className="text-green-500" size={24} />,
    tag: "New",
  },
  {
    id: "5",
    name: "OTC And Health Need",
    image: "/assests/category/c4.webp",
    color: "text-orange-600",
    gradient: "from-orange-50 to-orange-100",
    icon: <MdHealthAndSafety className="text-orange-500" size={24} />,
  },
  {
    id: "6",
    name: "Devices & Support",
    image: "/assests/category/c5.webp",
    color: "text-emerald-600",
    gradient: "from-emerald-50 to-emerald-100",
    icon: <FaLeaf className="text-emerald-500" size={24} />,
    tag: "Popular",
  },
  {
    id: "7",
    name: "Food & Beverages",
    image: "/assests/category/c6.webp",
    color: "text-purple-600",
    gradient: "from-purple-50 to-purple-100",
    icon: <FaHeart className="text-purple-500" size={24} />,
  },
  {
    id: "8",
    name: "Organic Remedy",
    image: "/assests/category/c7.gif",
    color: "text-green-600",
    gradient: "from-green-50 to-green-100",
    icon: <FaBaby className="text-green-500" size={24} />,
  },
];

const CategoryCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = direction === "left" ? -250 : 250;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div id="category" className="py-12 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-[1280px] mx-auto relative px-4">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Shop by Categories
            </h2>
            <p className="text-gray-600 mt-1">
              Discover our wide range of health products
            </p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="group w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-lg text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FaArrowLeft size={18} className="group-hover:animate-pulse" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="group w-12 h-12 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-lg text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:text-white hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <FaArrowRight size={18} className="group-hover:animate-pulse" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((cat, index) => (
            <div
              key={`${cat.id}-${index}`}
              className={`group min-w-[240px] md:min-w-[220px] sm:min-w-[200px] bg-gradient-to-br ${cat.gradient} border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl p-6 flex-shrink-0 hover:scale-105 transition-all duration-500 cursor-pointer snap-start relative overflow-hidden`}
            >
              {/* Tag Badge */}
              {cat.tag && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {cat.tag}
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                  {cat.icon}
                </div>
              </div>

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Category Name */}
              <div className="text-center">
                <h3
                  className={`font-bold text-sm ${cat.color} line-clamp-2 leading-tight group-hover:text-gray-800 transition-colors duration-300`}
                >
                  {cat.name}
                </h3>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: Math.ceil(categories.length / 4) }).map(
            (_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-400 transition-all duration-300 cursor-pointer"
              ></div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarousel;
