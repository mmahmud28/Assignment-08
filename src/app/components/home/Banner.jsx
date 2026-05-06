"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
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