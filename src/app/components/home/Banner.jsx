"use client";

import { useEffect, useState } from "react";

const images = [
  "https://www.hansetile.com/uploads/201916238/porcelain-tile-flooring-gallery09359958091.jpg",
  "https://haisdisplay.com/cdn/shop/products/bhgf_faf90bdd-3240-4fca-a623-bb950cfe83f0.jpg",
  "https://haisdisplay.com/cdn/shop/products/gryr_53de7bec-4e1e-4046-8845-ee58ff62b6c4.jpg",
  "https://haisdisplay.com/cdn/shop/products/gyr.jpg",
];

const titles = [
  "Modern Tile Collection",
  "Luxury Interior Design",
  "Premium Wall Tiles",
  "Elegant Home Style",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">

      {/* Slider */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <div key={i} className="min-w-full h-[500px] relative">

            <img
              src={img}
              className="w-full h-full object-cover"
              alt="banner"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">

              <h1 className="text-3xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg">
                {titles[i]}
              </h1>

            </div>

          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-orange-500" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
}