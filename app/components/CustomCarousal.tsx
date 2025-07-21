"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CustomCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto my-8 px-4 sm:px-6 lg:px-8 mt-[7rem]">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full rounded-2xl overflow-hidden shadow-2xl"
        style={{
          height: "clamp(200px, 40vh, 350px)",
        }}
      >
        {/* Demo slides with placeholder images since we can't access your local files */}
        <SwiperSlide>
          <div className="relative w-full h-full group">
            <img
              src="../assests/i1.jpeg"
              alt="Slide 1"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full group">
            <img
              src="../assests/i2.jpeg"
              alt="Slide 2"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full group">
            <img
              src="../assests/i3.jpeg"
              alt="Slide 3"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full group">
            <img
              src="../assests/i4.jpeg"
              alt="Slide 4"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full group">
            <img
              src="../assests/i5.jpeg"
              alt="Slide 5"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: "center center" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full group">
            <img
              src="https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Snowy mountains"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom styles for better mobile experience */}
      <style jsx global>{`
        /* Position pagination inside the carousel */
        .swiper-pagination {
          position: absolute !important;
          bottom: 20px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          z-index: 10 !important;
          width: auto !important;
        }

        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.6) !important;
          width: 12px !important;
          height: 12px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          border: 2px solid rgba(255, 255, 255, 0.8) !important;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          transform: scale(1.3) !important;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4) !important;
          border: 2px solid white !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.3) !important;
          border-radius: 50% !important;
          width: 44px !important;
          height: 44px !important;
          backdrop-filter: blur(4px) !important;
          transition: all 0.3s ease !important;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.5) !important;
          transform: scale(1.1) !important;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: bold !important;
        }

        /* Mobile pagination adjustments */
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }

          .swiper-pagination {
            bottom: 15px !important;
          }

          .swiper-pagination-bullet {
            width: 10px !important;
            height: 10px !important;
            margin: 0 4px !important;
          }
        }

        /* Responsive height adjustments */
        @media (max-width: 480px) {
          .swiper {
            height: 250px !important;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .swiper {
            height: 350px !important;
          }
        }

        @media (min-width: 769px) {
          .swiper {
            height: 450px !important;
          }
        }
      `}</style>
    </div>
  );
}
