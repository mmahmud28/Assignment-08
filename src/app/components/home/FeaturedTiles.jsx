"use client";

import { useEffect, useState } from "react";

export default function FeaturedTiles() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🚀 Fetching JSON...");

        const res = await fetch("/FeaturedTiles.json");

        console.log("📡 Response status:", res.status);

        if (!res.ok) {
          throw new Error("HTTP Error: " + res.status);
        }

        const data = await res.json();

        console.log("📦 RAW DATA:", data);

        // SAFE PARSING
        let finalData = [];

        if (Array.isArray(data)) {
          finalData = data;
        } else if (Array.isArray(data?.tiles)) {
          finalData = data.tiles;
        } else {
          console.warn("⚠️ Unexpected JSON format:", data);
        }

        console.log("✅ FINAL DATA:", finalData);

        setTiles(finalData);

      } catch (err) {
        console.error("❌ FETCH ERROR:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // LOADING
  if (loading) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Loading Featured Tiles...
      </div>
    );
  }

  // ERROR STATE
  if (error) {
    return (
      <div className="text-center py-20 text-red-600 font-semibold">
        ❌ Error: {error}
      </div>
    );
  }

  // EMPTY STATE
  if (!tiles || tiles.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No tiles found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {tiles.map((tile) => (
          <div
            key={tile.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-2xl transition duration-300"
          >

            {/* IMAGE */}
            <img
              src={tile.image}
              alt={tile.name}
              className="w-full h-52 object-cover"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x200?text=No+Image";
              }}
            />

            {/* CONTENT */}
            <div className="p-4 space-y-2">

              <h2 className="text-lg font-bold text-gray-800 line-clamp-1">
                {tile.name}
              </h2>

              <p className="text-sm text-gray-500">
                {tile.category} • {tile.origin}
              </p>

              <p className="text-sm text-gray-600 line-clamp-2">
                {tile.description}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-2 pt-2">

                <span className="text-xs px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                  {tile.slug}
                </span>

                {tile?.technical_specs?.thickness_mm?.[0] && (
                  <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {tile.technical_specs.thickness_mm[0]}mm
                  </span>
                )}

                <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                  {tile?.technical_specs?.water_absorption}
                </span>

              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}