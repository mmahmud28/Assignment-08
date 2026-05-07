"use client";

import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function ProductMarquee() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/TilesData.json");
        const data = await res.json();

        setItems(data.tiles || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // LOADING UI
  if (loading) {
    return (
      <div className="py-20 text-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  // SAFE SPLIT (2 ROW)
  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  // CARD COMPONENT
  const Card = ({ item }) => (
    <div className="mx-4 w-64 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">

      {/* IMAGE (NO next/image ISSUE) */}
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
          {item.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {item.category}
        </p>

        <p className="text-orange-500 font-semibold mt-2">
          {item.slug}
        </p>
      </div>

    </div>
  );

  return (
    <div className="py-10 space-y-8 bg-gray-100 overflow-hidden">

      {/* ROW 1 → RIGHT */}
      <Marquee
        direction="right"
        speed={200}
       
        gradient={false}
      >
        {row1.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Marquee>

      {/* ROW 2 → LEFT */}
      <Marquee
        direction="left"
        speed={300}
       
        gradient={false}
      >
        {row2.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Marquee>

    </div>
  );
}