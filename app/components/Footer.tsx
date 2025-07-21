"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaChevronRight,
  FaHeart,
  FaShieldAlt,
  FaTruck,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

interface FooterProps {
  pharmacyName?: string;
  tagline?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  googleMapsUrl?: string;
}

const PharmacyFooter: React.FC<FooterProps> = ({
  pharmacyName = "Noor Medical Store",
  tagline = "Trusted Healthcare Since 1998",
  phone = "+92 304 0536826",
  whatsapp = "+92 304 0536826",
  email = "info@medicareplus.pk",
  address = "Noor Medical Store, Bihar Muslim Society BMCHS Sharafabad, Karachi",
  googleMapsUrl = "https://maps.app.goo.gl/qJjUuDZpMSMjsnGm7?g_st=ipc",
}) => {
  const [email_subscription, setEmailSubscription] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email_subscription.trim()) {
      setIsSubscribed(true);
      setEmailSubscription("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const isOpen = () => {
    const hour = currentTime.getHours();
    return hour >= 9 && hour < 23; // 9 AM to 11 PM
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Popular Products", href: "/popular" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ / Help", href: "/help" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Trust Badges Section */}
      <div className="bg-emerald-600 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-medium">
            <div className="flex items-center gap-2">
              <FaShieldAlt className="w-4 h-4" />
              <span>Licensed Pharmacy</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTruck className="w-4 h-4" />
              <span>Home Delivery Available</span>
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="w-4 h-4" />
              <span>Serving Karachi Since 1998</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Pharmacy Branding */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-emerald-400 mb-2">
                {pharmacyName}
              </h3>
              <p className="text-slate-300 text-sm">{tagline}</p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted healthcare partner providing quality medicines,
              health products, and expert pharmaceutical care to the community.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 p-2 rounded-full transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-colors duration-200"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-500 p-2 rounded-full transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                  >
                    <FaChevronRight className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Hours */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Info
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:${phone}`}
                className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <FaPhone className="w-4 h-4 mr-3 text-emerald-400" />
                {phone}
              </a>

              <a
                href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <FaWhatsapp className="w-4 h-4 mr-3 text-green-400" />
                <span>
                  Chat Now
                  <span className="ml-2 text-xs bg-green-600 px-2 py-1 rounded-full">
                    {isOpen() ? "Online" : "Offline"}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <FaEnvelope className="w-4 h-4 mr-3 text-emerald-400" />
                {email}
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-slate-300 hover:text-emerald-400 transition-colors duration-200"
              >
                <FaMapMarkerAlt className="w-4 h-4 mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                <span className="text-sm">{address}</span>
              </a>

              {/* Opening Hours */}
              <div className="flex items-start mt-4">
                <FaClock className="w-4 h-4 mr-3 mt-1 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">Mon - Sun</p>
                  <p className="text-slate-300 text-sm">9:00 AM - 11:00 PM</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
                      isOpen()
                        ? "bg-green-600 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {isOpen() ? "Open Now" : "Closed"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & App Store */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Connected
            </h4>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-slate-300 text-sm mb-3">
                Get latest offers & health tips
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email_subscription}
                  onChange={(e) => setEmailSubscription(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-800 text-white py-2 px-4 rounded-md transition-colors duration-200 font-medium"
                >
                  {isSubscribed ? "Subscribed!" : "Subscribe"}
                </button>
              </form>
            </div>

            {/* App Store Buttons */}
            <div className="space-y-2">
              <p className="text-slate-300 text-sm mb-3">Download Our App</p>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md transition-colors duration-200 text-sm border border-slate-600 flex items-center justify-center gap-2">
                <FaApple className="w-4 h-4" />
                Download on App Store
              </button>
              <button className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-md transition-colors duration-200 text-sm border border-slate-600 flex items-center justify-center gap-2">
                <FaGooglePlay className="w-4 h-4" />
                Get it on Google Play
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-700 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © 2025 {pharmacyName}. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-slate-600">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="text-center mt-4 text-slate-500 text-xs">
            Powered by Your Development Team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PharmacyFooter;
