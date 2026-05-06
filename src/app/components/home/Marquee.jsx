"use client";

import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductMarquee() {
  const [items, setItems] = useState([]);

  // API fetch (example)
  useEffect(() => {
    const fetchData = async () => {
      // replace with your real API
      const res = await fetch("https://assignment.mmsoftware.top/Api/tiles.json");
      const data = await res.json();
      setItems(data);
    };

    fetchData();
  }, []);

  return (
    <div className="py-10 space-y-6 bg-gray-100">

      {/* LEFT → RIGHT */}
      <Marquee direction="right" speed={50} pauseOnHover>
        {items.slice(0, 10).map((item) => (
          <div
            key={item.id}
            className="mx-4 w-64 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Image
              src={item.image}
              className="h-32 w-full object-cover"
              alt="product"
            />

            <div className="p-3">
              <h2 className="text-sm font-semibold line-clamp-1">
                {item.name}
              </h2>
              <p className="text-orange-500 font-bold mt-1">
                ${item.category}
              </p>
            </div>
          </div>
        ))}
      </Marquee>

      {/* RIGHT → LEFT */}
      <Marquee direction="left" speed={60} pauseOnHover>
        {items.slice(10, 20).map((item) => (
          <div
            key={item.id}
            className="mx-4 w-64 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Image
              src={item.image}
              className="h-32 w-full object-cover"
              alt="product"
            />

            <div className="p-3">
              <h2 className="text-sm font-semibold line-clamp-1">
                {item.name}
              </h2>
              <p className="text-orange-500 font-bold mt-1">
                ${item.slug}
              </p>
            </div>
          </div>
        ))}
      </Marquee>

    </div>
  );
}