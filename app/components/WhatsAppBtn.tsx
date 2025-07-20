// components/WhatsAppButton.tsx
"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "923040536826";
  const message = "Hi I want to Order Medicine";
  const encodedMessage = encodeURIComponent(message);
  const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={link}
        target="_blank"
        className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-9 h-9" />
      </Link>
    </div>
  );
};

export default WhatsAppButton;
