"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle, Phone, ChevronRight } from "lucide-react";
import Logo from "../../public/assests/a-minimalist-logo-design-featuring-the-t_nLJKfNQ0T0uGtJNKLQ3r3g_zrM7N7OFRf6zuVquxBMHuA-removebg-preview.png";
import { FaWhatsapp } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={Logo}
                  alt="Noor Medical Logo"
                  width={120}
                  height={50}
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-emerald-600 font-medium transition-all duration-200 group rounded-lg hover:bg-emerald-50"
                >
                  {link.name}
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-6 group-hover:left-1/2 group-hover:-translate-x-1/2 rounded-full"></span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="tel:+923001234567"
                className="flex items-center px-4 py-2 text-emerald-700 border border-emerald-200 rounded-full hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 font-medium group"
              >
                <Phone className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                Call Now
              </a>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 font-medium group"
              >
                <MessageCircle className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                WhatsApp
              </a>
            </div> */}
            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Call Button */}
              <Link
                href="tel:+923040536826"
                className="flex items-center gap-2 px-5 py-2.5 border border-emerald-300 text-emerald-700 rounded-full hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200 shadow-sm group"
              >
                <Phone className="w-5 h-5 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Call Now</span>
              </Link>

              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/923040536826?text=Hi I want to Order Medicine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <FaWhatsapp className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
                <span className="font-medium">WhatsApp</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src={Logo}
              alt="Noor Medical Logo"
              width={100}
              height={40}
              className="object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex-1 py-6 overflow-y-auto">
            <div className="space-y-1 px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between py-4 px-4 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200 font-medium group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 transition-colors" />
                </Link>
              ))}
            </div>
            {/* Mobile Contact Section */}

            <div className="mt-8 px-6 space-y-4">
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider px-4">
                Get in Touch
              </div>

              {/* Call Button */}
              <Link
                href="tel:+923040536826"
                className="flex items-center w-full py-3 px-4 text-emerald-700 border border-emerald-200 rounded-xl hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-200 font-medium group"
              >
                <Phone className="w-5 h-5 mr-3 text-emerald-600 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">Call Now</div>
                  <div className="text-sm text-gray-500">+92 304 0536826</div>
                </div>
              </Link>

              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/923040536826?text=Hi I want to Order Medicine"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-all duration-200 font-medium group shadow-md hover:shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5 mr-3 text-white group-hover:scale-110 transition-transform" />
                <div>
                  <div className="font-medium">WhatsApp Chat</div>
                  <div className="text-sm text-emerald-100">Quick response</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Mobile Footer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="text-center">
              <p className="text-sm font-medium text-gray-900">
                Noor Medical Services
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Professional Healthcare Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
