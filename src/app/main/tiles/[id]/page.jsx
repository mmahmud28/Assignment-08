"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

const TilesDetailes = () => {
  const { id } = useParams();
  const [tile, setTile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/TilesData.json");
        const data = await res.json();
        const found = data.tiles.find((item) => item.id === Number(id));
        setTile(found || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = (scroll / maxScroll) * 100;
      setScrollProgress(progress);
      setIsSticky(scroll > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-orange-300 rounded-full animate-ping opacity-75"></div>
          <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/60 font-medium whitespace-nowrap">Loading Masterpiece</p>
        </div>
      </div>
    );
  }

  if (!tile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center animate-in fade-in zoom-in duration-500">
          <div className="text-8xl mb-6 opacity-80">🔍</div>
          <h2 className="text-3xl font-bold text-white mb-3">Tile Not Found</h2>
          <p className="text-gray-400 mb-8">The tile you're looking for doesn't exist in our collection</p>
          <button 
            onClick={() => window.history.back()}
            className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            <span className="relative z-10">Browse Collections</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    );
  }

  // Generate gallery images (simulated multiple views)
  const galleryImages = [tile.image, tile.image, tile.image, tile.image];

  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100">
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-orange-500/20 z-50">
        <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-200" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Sticky Navigation */}
      <div className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isSticky ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.history.back()}
              className={`group flex items-center gap-2 transition-all duration-300 ${isSticky ? 'text-gray-700' : 'text-gray-600'}`}
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-medium">Back</span>
            </button>
            <div className={`font-semibold transition-all duration-300 ${isSticky ? 'text-gray-900 opacity-100' : 'opacity-0'}`}>
              {tile.name}
            </div>
            <button className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Premium Design */}
      <div className="relative overflow-hidden pt-20 lg:pt-28">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-amber-500/5 pointer-events-none"></div>
        <div className="absolute top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Image Gallery Section */}
            <div className="space-y-4 animate-in slide-in-from-left duration-700">
              <div className="relative group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                <img
                  src={galleryImages[activeImage]}
                  alt={tile.name}
                  className="w-full h-[450px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-5 left-5">
                  <div className="backdrop-blur-md bg-white/20 px-4 py-2 rounded-full text-sm font-semibold text-white border border-white/30 shadow-lg">
                    {tile.category}
                  </div>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute top-5 right-5">
                  <div className="backdrop-blur-md bg-black/40 px-3 py-1.5 rounded-full text-sm font-semibold text-white flex items-center gap-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {tile.rating}
                  </div>
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative rounded-xl overflow-hidden transition-all duration-300 ${activeImage === idx ? 'ring-2 ring-orange-500 ring-offset-2 scale-95' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-24 object-cover" />
                    <div className={`absolute inset-0 bg-black/20 transition-opacity ${activeImage === idx ? 'opacity-0' : 'opacity-30'}`}></div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="space-y-6 animate-in slide-in-from-right duration-700">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  {tile.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {tile.origin}
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l5 5a2 2 0 01.586 1.414V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                    </svg>
                    SKU: {tile.slug}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg border-l-4 border-orange-500 pl-4 py-1 bg-gradient-to-r from-orange-50/50 to-transparent">
                {tile.description}
              </p>

              {/* Premium Price Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm opacity-80 font-medium tracking-wide">PRICE RANGE</p>
                      <p className="text-4xl lg:text-5xl font-bold mt-1 tracking-tight">
                        {tile.price.currency} {tile.price.min_per_sqft} - {tile.price.max_per_sqft}
                      </p>
                      <p className="text-sm opacity-80 mt-1">per square foot</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <button className="mt-5 px-6 py-2.5 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                    Request Quote
                  </button>
                </div>
              </div>

              {/* Quick Stats Dashboard */}
              <div className="grid grid-cols-3 gap-4">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <p className="text-2xl font-bold text-gray-800">{tile.technical_specs.thickness_mm[0]}</p>
                    <p className="text-xs text-gray-500 mt-1">Thickness (mm)</p>
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <p className="text-2xl font-bold text-gray-800">{tile.technical_specs.weight_per_box_kg}</p>
                    <p className="text-xs text-gray-500 mt-1">Weight (kg/box)</p>
                  </div>
                </div>
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-300"></div>
                  <div className="relative bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <p className="text-2xl font-bold text-gray-800">{tile.technical_specs.coverage_per_box_sqft}</p>
                    <p className="text-xs text-gray-500 mt-1">Coverage (sqft)</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Free Sample</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Grid - Premium Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Technical Specs - Premium Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Technical Specifications</h2>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Water Absorption", value: tile.technical_specs.water_absorption },
                  { label: "Thickness", value: `${tile.technical_specs.thickness_mm.join(", ")} mm` },
                  { label: "Weight per Box", value: `${tile.technical_specs.weight_per_box_kg} kg` },
                  { label: "Pieces per Box", value: tile.technical_specs.pcs_per_box },
                  { label: "Coverage per Box", value: `${tile.technical_specs.coverage_per_box_sqft} sq ft` }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-semibold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance - Premium Card */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Performance Ratings</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 font-medium">Durability</span>
                    <span className="font-semibold text-gray-900">{tile.performance.durability}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2.5 transition-all duration-1000" style={{ width: tile.performance.durability === 'High' ? '90%' : tile.performance.durability === 'Medium' ? '70%' : '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600 font-medium">Scratch Resistance</span>
                    <span className="font-semibold text-gray-900">{tile.performance.scratch_resistance}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2.5 transition-all duration-1000" style={{ width: tile.performance.scratch_resistance === 'High' ? '90%' : '70%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Slip Resistance</span>
                  <span className="font-semibold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">{tile.performance.slip_resistance_rating}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600 font-medium">Stain Resistance</span>
                  <span className="font-semibold text-gray-900 bg-gray-50 px-3 py-1 rounded-lg">{tile.performance.stain_resistance}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Key Features</h2>
              </div>
              <div className="space-y-3">
                {tile.features.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-emerald-50/50 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Applications */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Best Applications</h2>
              </div>
              <div className="space-y-3">
                {tile.applications.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-indigo-50/50 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advantages */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-teal-50/50 to-emerald-50/50 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 border border-teal-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-teal-800">Advantages</h2>
              </div>
              <div className="space-y-3">
                {tile.advantages.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-teal-100/30 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">+</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Disadvantages */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-rose-50/50 to-orange-50/50 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 border border-rose-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-rose-800">Considerations</h2>
              </div>
              <div className="space-y-3">
                {tile.disadvantages.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-lg hover:bg-rose-100/30 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-rose-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">−</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Available Sizes */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Available Sizes</h2>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {tile.available_sizes.map((size, i) => (
                  <div key={i} className="relative group/size">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl blur opacity-0 group-hover/size:opacity-30 transition duration-300"></div>
                    <div className="relative bg-gray-50 rounded-xl p-4 text-center border border-gray-200 hover:border-amber-300 transition-all cursor-pointer">
                      <p className="font-bold text-gray-800 text-lg">{size.label}</p>
                      <p className="text-sm text-gray-500 mt-1">{size.cm}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Color Options */}
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Color Options</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {tile.color_options.map((color, i) => (
                  <span
                    key={i}
                    className="group/color px-5 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm font-medium text-gray-700 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all cursor-pointer"
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Brands */}
          <div className="md:col-span-2 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-gradient-to-r from-orange-50/30 to-amber-50/30 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Trusted Brands</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {tile.brand_examples.map((brand, i) => (
                  <span
                    key={i}
                    className="group/brand px-6 py-2.5 bg-white rounded-full text-sm font-semibold text-orange-600 border-2 border-orange-200 hover:border-orange-400 hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Maintenance */}
          <div className="md:col-span-2 group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
            <div className="relative bg-gradient-to-r from-cyan-50/30 to-blue-50/30 rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">Cleaning Method</h3>
                  </div>
                  <p className="text-gray-700 pl-14">{tile.maintenance.cleaning_method}</p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg">Maintenance Level</h3>
                  </div>
                  <div className="pl-14">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm ${tile.maintenance.maintenance_level === 'Low' ? 'bg-gradient-to-r from-green-400 to-emerald-400 text-white' : 'bg-gradient-to-r from-yellow-400 to-amber-400 text-white'}`}>
                      {tile.maintenance.maintenance_level}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="group relative w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110">
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <svg className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
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
        @keyframes slide-in-from-left {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slide-in-from-right {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-in {
          animation-duration: 0.7s;
          animation-fill-mode: both;
        }
        .fade-in { animation-name: fade-in; }
        .zoom-in { animation-name: zoom-in; }
        .slide-in-from-left { animation-name: slide-in-from-left; }
        .slide-in-from-right { animation-name: slide-in-from-right; }
        .duration-700 { animation-duration: 0.7s; }
        .duration-1000 { animation-duration: 1s; }
      `}</style>
    </div>
  );
};

export default TilesDetailes;