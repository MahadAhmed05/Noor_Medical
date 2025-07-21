"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Copy,
  Check,
  Navigation,
  Star,
  Accessibility,
  Truck,
} from "lucide-react";

// Types
interface BusinessHours {
  day: string;
  hours: string;
  isToday?: boolean;
}

interface ContactInfo {
  pharmacyName: string;
  address: string;
  phone: string;
  whatsapp: string;
  mapEmbedUrl: string;
  businessHours: BusinessHours[];
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  closingTime: string;
  features: string[];
}

// Sample data - replace with your actual pharmacy data
const pharmacyData: ContactInfo = {
  pharmacyName: "Noor Medical Store",
  address: "Noor Medical Store, Bihar Muslim Society BMCHS Sharafabad, Karachi",
  phone: "+92 304 0536826",
  whatsapp: "+92 304 0536826",
  //   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3203793477214!2d67.0669388!3d24.8870512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ee8fa05ff9f%3A0xf88df579b3b798e0!2sNoor%20Medical%20Store!5e0!3m2!1sen!2s!4v1753134070919!5m2!1sen!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3203793477214!2d67.0669388!3d24.8870512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ee8fa05ff9f%3A0xf88df579b3b798e0!2sNoor%20Medical%20Store!5e0!3m2!1sen!2s!4v1753134070919!5m2!1sen!2s",
  businessHours: [
    { day: "Monday", hours: "8:00 AM - 11:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 11:00 PM", isToday: true },
    { day: "Wednesday", hours: "8:00 AM - 11:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 11:00 PM" },
    { day: "Friday", hours: "8:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 10:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 9:00 PM" },
  ],
  rating: 4.8,
  reviewCount: 1247,
  isOpen: true,
  closingTime: "11:00 PM",
  features: [
    "24/7 Emergency Delivery",
    "Wheelchair Accessible",
    "Home Delivery Available",
  ],
};

const PharmacyContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(type);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to inquire about your pharmacy services."
    );
    window.open(
      `https://wa.me/${pharmacyData.whatsapp.replace(
        /[^0-9]/g,
        ""
      )}?text=${message}`,
      "_blank"
    );
  };

  const openDirections = () => {
    const encodedAddress = encodeURIComponent(pharmacyData.address);
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
      "_blank"
    );
  };

  const callPhone = () => {
    window.open(`tel:${pharmacyData.phone}`, "_self");
  };

  return (
    <main id="location" className="py-12 bg-gradient-to-br from-slate-50 via-white to-gray-50 min-h-screen">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Visit Our Pharmacy
          </h2>
          <p className="text-gray-600 mt-2">
            Your trusted healthcare partner in the heart of Karachi
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Status Banner */}
        <div className="mb-8 flex justify-center">
          <div
            className={`group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
              pharmacyData.isOpen
                ? "ring-2 ring-green-200"
                : "ring-2 ring-red-200"
            }`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-full -translate-y-8 translate-x-8"></div>
            </div>

            <div
              className={`relative px-6 py-4 flex items-center gap-3 ${
                pharmacyData.isOpen
                  ? "bg-gradient-to-r from-green-50 to-green-50"
                  : "bg-gradient-to-r from-red-50 to-red-50"
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full ${
                  pharmacyData.isOpen ? "bg-green-500" : "bg-red-500"
                } animate-pulse`}
              ></div>
              <span
                className={`font-medium text-sm ${
                  pharmacyData.isOpen ? "text-green-800" : "text-red-800"
                }`}
              >
                {pharmacyData.isOpen
                  ? `🟢 Open Now · Closes at ${pharmacyData.closingTime}`
                  : "🔴 Currently Closed"}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Contact Details */}
          <div className="space-y-6">
            {/* Pharmacy Name Card */}
            <div
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard("pharmacy-name")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-green-200 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-200 to-purple-200 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              <div className="relative p-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-3">
                  {pharmacyData.pharmacyName}
                </h3>
                <div className="flex items-center space-x-2 text-sm">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(pharmacyData.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-bold text-gray-800">
                      {pharmacyData.rating}
                    </span>
                    <span className="text-gray-600">
                      ({pharmacyData.reviewCount.toLocaleString()}+ reviews)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-green-600 font-medium mt-2">
                  Trusted by thousands of customers
                </p>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Address Card */}
              <div
                className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard("address")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-green-200 rounded-full -translate-y-10 translate-x-10"></div>
                </div>

                <div className="relative p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-green-600 transition-all duration-500 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Address
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">
                        {pharmacyData.address}
                      </p>
                      <button
                        onClick={() =>
                          copyToClipboard(pharmacyData.address, "address")
                        }
                        className="inline-flex items-center text-sm bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                      >
                        {copiedItem === "address" ? (
                          <>
                            <Check className="w-4 h-4 mr-1 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Copy Address
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div
                className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-1"
                onMouseEnter={() => setHoveredCard("phone")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-200 to-purple-200 rounded-full translate-y-8 -translate-x-8"></div>
                </div>

                <div className="relative p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-3 group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-500 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Phone
                      </h4>
                      <p className="text-gray-600 text-sm mb-3 font-medium">
                        {pharmacyData.phone}
                      </p>
                      <div className="flex space-x-3">
                        <button
                          onClick={callPhone}
                          className="inline-flex items-center text-sm bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent font-medium hover:from-green-700 hover:to-green-700 transition-all duration-300"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          Call Now
                        </button>
                        <button
                          onClick={() =>
                            copyToClipboard(pharmacyData.phone, "phone")
                          }
                          className="inline-flex items-center text-sm bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-300"
                        >
                          {copiedItem === "phone" ? (
                            <>
                              <Check className="w-4 h-4 mr-1 text-green-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-1" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-1 ring-2 ring-green-200">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-300 to-green-400 rounded-full -translate-y-12 translate-x-12"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-green-200 to-green-300 rounded-full translate-y-10 -translate-x-10"></div>
              </div>

              <div className="relative p-6 bg-gradient-to-r from-green-500 to-green-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-2xl p-3 group-hover:bg-white/30 transition-all duration-500 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        Chat with us on WhatsApp
                      </h4>
                      <p className="text-green-100 text-sm">
                        Get instant support and quick responses
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={openWhatsApp}
                    className="bg-white text-green-600 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                  >
                    Chat Now
                  </button>
                </div>
              </div>
            </div>

            {/* Business Hours Card */}
            <div
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard("hours")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full -translate-y-14 translate-x-14"></div>
              </div>

              <div className="relative p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-3 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-lg">
                    Business Hours
                  </h4>
                </div>
                <div className="space-y-3">
                  {pharmacyData.businessHours.map((schedule, index) => (
                    <div
                      key={index}
                      className={`flex justify-between items-center text-sm py-2 px-4 rounded-xl transition-all duration-300 ${
                        schedule.isToday
                          ? "bg-gradient-to-r from-blue-50 to-green-50 border-l-4 border-gradient-to-b border-blue-500 font-medium shadow-md"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <span
                        className={
                          schedule.isToday
                            ? "text-blue-900 font-semibold"
                            : "text-gray-700"
                        }
                      >
                        {schedule.day}
                      </span>
                      <span
                        className={
                          schedule.isToday
                            ? "text-blue-900 font-semibold"
                            : "text-gray-600"
                        }
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Card */}
            <div
              className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-1"
              onMouseEnter={() => setHoveredCard("features")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-green-200 to-blue-200 rounded-full translate-y-16 translate-x-16"></div>
              </div>

              <div className="relative p-6">
                <h4 className="font-semibold text-gray-900 mb-4 text-lg">
                  Our Services
                </h4>
                <div className="space-y-4">
                  {pharmacyData.features.map((feature, index) => {
                    const getIcon = (feature: string) => {
                      if (feature.includes("Emergency"))
                        return <Truck className="w-5 h-5 text-red-500" />;
                      if (feature.includes("Wheelchair"))
                        return (
                          <Accessibility className="w-5 h-5 text-blue-500" />
                        );
                      if (feature.includes("Home Delivery"))
                        return <Truck className="w-5 h-5 text-green-500" />;
                      return <Check className="w-5 h-5 text-green-500" />;
                    };

                    const getBgColor = (feature: string) => {
                      if (feature.includes("Emergency")) return "bg-red-50";
                      if (feature.includes("Wheelchair")) return "bg-blue-50";
                      if (feature.includes("Home Delivery"))
                        return "bg-green-50";
                      return "bg-green-50";
                    };

                    return (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-3 rounded-xl ${getBgColor(
                          feature
                        )} hover:shadow-md transition-all duration-300`}
                      >
                        {getIcon(feature)}
                        <span className="text-gray-700 text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Get Directions Button */}
            <button
              onClick={openDirections}
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-4 px-6 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <Navigation className="w-5 h-5" />
              <span>Get Directions</span>
            </button>
          </div>

          {/* Right Column - Map */}
          <div className="lg:sticky lg:top-8">
            <div className="group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-1">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 z-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-green-200 rounded-full -translate-y-12 translate-x-12"></div>
              </div>

              <div className="relative p-4 bg-gradient-to-r from-gray-50 to-gray-50 border-b border-gray-200">
                <h4 className="font-semibold text-gray-900">Find Us Here</h4>
                <p className="text-sm text-gray-600">
                  Interactive map with our exact location
                </p>
              </div>
              <div className="relative">
                <iframe
                  src={pharmacyData.mapEmbedUrl}
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Pharmacy Location"
                />
              </div>
            </div>

            {/* Emergency Banner */}
            <div className="mt-6 group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-1 ring-2 ring-red-200">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-red-300 to-pink-300 rounded-full -translate-y-10 -translate-x-10"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tr from-red-200 to-red-300 rounded-full translate-y-8 translate-x-8"></div>
              </div>

              <div className="relative p-6 bg-gradient-to-r from-red-500 to-pink-600">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl p-3 group-hover:bg-white/30 transition-all duration-500 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">
                      Emergency Medicine Delivery
                    </h4>
                    <p className="text-red-100 text-sm">
                      Available 24/7 for urgent medical needs
                    </p>
                  </div>
                </div>
                <button
                  onClick={openWhatsApp}
                  className="w-full bg-white text-red-600 py-3 px-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                >
                  Contact for Emergency Delivery
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-12 group relative bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-1 ring-2 ring-green-200">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200 to-blue-200 rounded-full -translate-y-16 -translate-x-16"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full translate-y-12 translate-x-12"></div>
          </div>

          <div className="relative p-6 bg-gradient-to-r from-green-50 to-blue-50">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Truck className="text-green-600" size={20} />
                <span className="text-lg font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {pharmacyData.rating}/5 Customer Rating
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Based on {pharmacyData.reviewCount.toLocaleString()}+ verified
                orders this week • Free delivery on orders above Rs 500
              </p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PharmacyContactSection;
