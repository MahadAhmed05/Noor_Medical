"use client"

import React, { useState } from "react";
import {
  FaStar,
  FaHeart,
  FaEye,
  FaShippingFast,
  FaTruck,
} from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";

type Product = {
  id: string;
  name: string;
  image: string;
  type: string;
  packSize: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  description?: string;
  rating: number;
  reviews: number;
  inStock: number;
  isFeatured?: boolean;
};

const products: Product[] = [
  {
    id: "1",
    name: "Almond Oil 120 ml Bottle",
    image: "/assests/pp1.jpeg",
    type: "Oil",
    packSize: "120 ml",
    price: 560,
    originalPrice: 800,
    discountPercent: 30,
    description: "Cold-pressed natural oil",
    rating: 4.5,
    reviews: 128,
    inStock: 15,
  },
  {
    id: "2",
    name: "Coconut Oil 120ml Bottle",
    image: "/assests/pp2.webp",
    type: "Oil",
    packSize: "120 ml",
    price: 238,
    originalPrice: 340,
    discountPercent: 30,
    description: "Organic virgin coconut oil",
    rating: 4.8,
    reviews: 95,
    inStock: 8,
    isFeatured: true,
  },
  {
    id: "3",
    name: "KN95 Mask without filter",
    image: "/assests/pp3.webp",
    type: "Others",
    packSize: "1",
    price: 218,
    originalPrice: 229,
    discountPercent: 5,
    description: "Premium protection mask",
    rating: 4.2,
    reviews: 67,
    inStock: 25,
  },
  {
    id: "4",
    name: "FreeStyle Libre Glucose Sensor",
    image: "/assests/pp4.webp",
    type: "Pcs",
    packSize: "1 Pcs.",
    price: 18026,
    originalPrice: 18975,
    discountPercent: 5,
    description: "Advanced glucose monitoring",
    rating: 4.9,
    reviews: 203,
    inStock: 3,
  },
  {
    id: "5",
    name: "Cosarb Cream",
    image: "/assests/pp5.webp",
    type: "Cream",
    packSize: "35 gm",
    price: 2655,
    originalPrice: 2950,
    discountPercent: 10,
    description: "Dermatologist recommended",
    rating: 4.6,
    reviews: 89,
    inStock: 12,
  },
];

const PopularProductsPage = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const getBadgeColor = (discount: number) => {
    if (discount >= 30) return "from-red-500 to-red-600";
    if (discount >= 15) return "from-orange-500 to-orange-600";
    return "from-blue-500 to-blue-600";
  };

  const getStockStatus = (stock: number) => {
    if (stock <= 5)
      return {
        text: `Only ${stock} left!`,
        color: "text-red-600",
        bgColor: "bg-red-50",
      };
    if (stock <= 10)
      return {
        text: `${stock} in stock`,
        color: "text-orange-600",
        bgColor: "bg-orange-50",
      };
    return {
      text: "In Stock",
      color: "text-green-600",
      bgColor: "bg-green-50",
    };
  };

  return (
    <main className="py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Popular Products
          </h2>
          <p className="text-gray-600 mt-2">
            Top-rated healthcare products trusted by thousands
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {products.map((product, index) => {
            const stockStatus = getStockStatus(product.inStock);
            const savings = product.originalPrice - product.price;
            const isHovered = hoveredCard === product.id;
            const isFavorite = favorites.has(product.id);

            return (
              <div
                key={product.id}
                className={`group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer ${
                  product.isFeatured
                    ? "lg:col-span-1 lg:row-span-1 ring-2 ring-green-200"
                    : ""
                } ${isHovered ? "scale-105 -translate-y-2" : ""}`}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-green-200 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-200 to-purple-200 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Discount Badge */}
                {product.discountPercent > 0 && (
                  <div
                    className={`absolute top-0 right-0 z-10 bg-gradient-to-r ${getBadgeColor(
                      product.discountPercent
                    )} text-white px-3 py-1 text-xs font-bold rounded-bl-2xl rounded-tr-2xl shadow-lg`}
                  >
                    {product.discountPercent}% OFF
                  </div>
                )}

                {/* Featured Badge */}
                {product.isFeatured && (
                  <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-1 text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                    <MdLocalOffer size={12} />
                    Editor's Pick
                  </div>
                )}

                {/* Quick Actions */}
                <div
                  className={`absolute top-3 left-3 flex flex-col gap-2 z-20 transition-all duration-300 ${
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  } ${product.isFeatured ? "top-12" : ""}`}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-all duration-300 ${
                      isFavorite
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
                    }`}
                  >
                    <FaHeart size={12} />
                  </button>
                  <button className="w-8 h-8 bg-white text-gray-600 rounded-full flex items-center justify-center shadow-md hover:bg-blue-50 hover:text-blue-500 transition-all duration-300">
                    <FaEye size={12} />
                  </button>
                </div>

                <div className="p-6">
                  {/* Product Image */}
                  <div className="relative mb-4 flex justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-3 group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-green-50 transition-all duration-500">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="text-center space-y-2">
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-1 mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            size={12}
                            className={
                              i < Math.floor(product.rating)
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 min-h-[2.5rem] leading-tight">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-blue-600 font-medium">
                      {product.description}
                    </p>

                    {/* Type and Pack Size */}
                    <p className="text-xs text-gray-500">
                      {product.type} • Pack Size: {product.packSize}
                    </p>

                    {/* Stock Status */}
                    <div
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.bgColor} ${stockStatus.color}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${stockStatus.color.replace(
                          "text-",
                          "bg-"
                        )}`}
                      ></div>
                      {stockStatus.text}
                    </div>

                    {/* Pricing */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-lg font-bold text-gray-800">
                          Rs {product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          Rs {product.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <p className="text-xs text-green-600 font-medium">
                        You save Rs {savings.toLocaleString()}!
                      </p>
                    </div>

                    {/* Delivery Info */}
                    <div className="flex items-center justify-center gap-1 text-xs text-green-600">
                      <FaShippingFast size={12} />
                      <span>Free Delivery</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-2.5 px-4 rounded-xl font-medium text-sm transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaTruck className="text-green-600" size={20} />
              <span className="text-lg font-semibold text-gray-800">
                4.8/5 Customer Rating
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Based on 1,200+ verified orders this week • Free delivery on
              orders above Rs 500
            </p>
            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" size={16} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PopularProductsPage;
