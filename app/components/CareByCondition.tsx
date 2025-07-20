// // components/ImageCardsSection.tsx
// "use client";

// import React from "react";
// import Image from "next/image";

// const brandImages = [
//   "/assests/cbc1.png",
//   "/assets/brand2.png",
//   "/assets/brand3.png",
//   "/assets/brand4.png",
//   "/assets/brand5.png",
//   "/assets/brand6.png",
// ];

// const ImageCardsSection = () => {
//   return (
//     <section className="w-full bg-white py-10">
//       <div className="max-w-[1280px] mx-auto px-4">
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
//           {brandImages.map((src, index) => (
//             <div
//               key={index}
//               className="bg-white border rounded-2xl shadow-md flex items-center justify-center p-6 hover:shadow-lg transition"
//             >
//               <Image
//                 src={src}
//                 alt={`Brand ${index + 1}`}
//                 width={500}
//                 height={5000}
//                 className="object-contain w-full h-[100px] sm:h-[120px]"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageCardsSection;

// components/ImageCardsSection.tsx
"use client";

import React from "react";
import Image from "next/image";

const brandImages = [
  "/assests/cbc1.png",
  "/assests/cbc2.png",
  "/assests/cbc3.png",
  "/assests/cbc4.png",
  "/assests/cbc5.png",
];

const ImageCardsSection = () => {
  return (
    <section className="w-full py-10">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {brandImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full aspect-[4/5] rounded-xl overflow-hidden hover:shadow-xl transition"
            >
              <Image
                src={src}
                alt={`Brand ${index + 1}`}
                fill
                className="object-container"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 20vw, 15vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCardsSection;
