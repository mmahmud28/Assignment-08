"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const TilesPage = () => {
  const [tiles, setTiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const observerRef = useRef(null);

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const res = await fetch("/TilesData.json");
        const data = await res.json();
        setTiles(data.tiles || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTiles();
  }, []);

  // Get unique categories
  const categories = ["all", ...new Set(tiles.map(tile => tile.category))];
  
  // Filter tiles
  const filteredTiles = tiles.filter(tile => {
    const matchesFilter = filter === "all" || tile.category === filter;
    const matchesSearch = tile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tile.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tile.origin.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const displayedTiles = filteredTiles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredTiles.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, filteredTiles.length));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-orange-300 rounded-full animate-ping opacity-75"></div>
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/60 font-medium whitespace-nowrap">Loading Premium Collection</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 -right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center animate-in fade-in zoom-in duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Premium Collection</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Premium Tiles Collection
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover our curated selection of high-quality tiles crafted for elegance and durability
            </p>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 text-slate-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search by name, category, or origin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    filter === cat
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat === "all" ? "All Tiles" : cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <p className="text-gray-600">
            Showing <span className="font-bold text-gray-900">{displayedTiles.length}</span> of{" "}
            <span className="font-bold text-gray-900">{filteredTiles.length}</span> premium tiles
          </p>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="text-sm text-orange-500 hover:text-orange-600 font-medium"
            >
              Clear Search
            </button>
          )}
        </div>
      </div>

      {/* Tiles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-16">
        {filteredTiles.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No tiles found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => { setSearchTerm(""); setFilter("all"); }}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedTiles.map((tile, index) => (
                <div
                  key={tile.id}
                  className="group relative animate-in fade-in slide-in-from-bottom duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  
                  {/* Card Content */}
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                    
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-64">
                      <img
                        src={tile.image}
                        alt={tile.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 shadow-lg">
                          {tile.category}
                        </div>
                      </div>
                      
                      {/* Origin Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-white">
                          {tile.origin}
                        </div>
                      </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                          <svg className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="text-xs font-semibold text-white">{tile.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 space-y-3">
                      <h2 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {tile.name}
                      </h2>
                      
                      <p className="text-sm text-gray-500">
                        {tile.category} • {tile.origin}
                      </p>
                      
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {tile.description}
                      </p>
                      
                      {/* Price Range */}
                      <div className="flex items-center justify-between pt-2">
                        <div>
                          <p className="text-xs text-gray-400">Price Range</p>
                          <p className="text-lg font-bold text-gray-800">
                            {tile.price.currency} {tile.price.min_per_sqft} - {tile.price.max_per_sqft}
                            <span className="text-xs font-normal text-gray-500">/sqft</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-green-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>In Stock</span>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-3">
                        <Link href={`/main/tiles/${tile.id}`} className="flex-1">
                          <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                            View Details
                          </button>
                        </Link>
                        <button className="px-4 py-2.5 border border-gray-300 rounded-xl hover:border-orange-500 hover:text-orange-500 transition-all duration-300 group">
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="text-center mt-12">
                <button
                  onClick={loadMore}
                  className="group relative px-8 py-3 bg-white border-2 border-orange-500 text-orange-600 rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <span className="relative z-10">Load More Tiles</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoom-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slide-in-from-bottom {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-in {
          animation-duration: 0.7s;
          animation-fill-mode: both;
        }
        .fade-in { animation-name: fade-in; }
        .zoom-in { animation-name: zoom-in; }
        .slide-in-from-bottom { animation-name: slide-in-from-bottom; }
        .duration-700 { animation-duration: 0.7s; }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default TilesPage;