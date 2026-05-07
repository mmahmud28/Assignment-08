"use client";

import { useEffect, useState } from "react";

export default function FeaturedTiles() {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredTile, setHoveredTile] = useState(null);

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
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent mb-4"></div>
          <p className="text-gray-600 font-medium">Loading Featured Tiles...</p>
        </div>
      </div>
    );
  }

  // ERROR STATE
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
        <div className="text-center bg-white rounded-2xl shadow-xl p-8 max-w-md">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Unable to Load Tiles</h3>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // EMPTY STATE
  if (!tiles || tiles.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className="text-gray-500 text-lg">No tiles found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-1.5 rounded-full mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-xs font-semibold text-orange-700 uppercase tracking-wide">Premium Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Featured Tiles
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Discover our handpicked selection of premium tiles for your next project
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tiles.map((tile, index) => (
            <div
              key={tile.id || index}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              onMouseEnter={() => setHoveredTile(tile.id || index)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gray-200 h-64">
                <img
                  src={tile.image}
                  alt={tile.name}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredTile === (tile.id || index) ? "scale-110" : "scale-100"
                  }`}
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop";
                  }}
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Title and Category Row */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
                      {tile.name}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs text-gray-500">{tile.origin}</span>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 rounded-full font-medium">
                    {tile.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {tile.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                    {tile.slug}
                  </span>

                  {tile?.technical_specs?.thickness_mm?.[0] && (
                    <span className="text-xs px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      {tile.technical_specs.thickness_mm[0]}mm
                    </span>
                  )}

                  {tile?.technical_specs?.water_absorption && (
                    <span className="text-xs px-2.5 py-1 bg-green-50 text-green-700 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      {tile.technical_specs.water_absorption}
                    </span>
                  )}
                </div>

                {/* Decorative Line */}
                <div className="pt-2">
                  <div className="h-0.5 bg-gradient-to-r from-orange-200 via-transparent to-transparent group-hover:w-full transition-all duration-700 w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Section */}
        <div className="text-center mt-12 pt-4">
          <div className="inline-flex items-center gap-2 text-sm text-gray-400">
            <span className="w-8 h-px bg-gray-300"></span>
            <span>Premium Quality Tiles</span>
            <span className="w-8 h-px bg-gray-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
}