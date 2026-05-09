"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { Image } from "next/image";

const ProfilePage = () => {


    const userData = authClient.useSession();    
   const userdata = userData?.data?.user;
    


    const [activeTab, setActiveTab] = useState("overview");

    // Tiles Buyer User Data
    const user = {
        id: 201,
        user_id: "CUS-2026-0145",
        username: "rahim_tiles_buyer",
        full_name: "Abdur Rahim",
        email: "rahim.tilesbuyer@example.com",
        phone: "+8801812345678",

        avatar: "https://i.pravatar.cc/300?img=22",

        cover_photo:
            "https://www.enduratiles.com/images/gallery/edc/edc-11.jpg",

        role: "customer",
        status: "active",
        is_verified: true,

        gender: "male",
        date_of_birth: "1994-08-18",
        nationality: "Bangladeshi",

        location: {
            country: "Bangladesh",
            city: "Dhaka",
            area: "Mirpur",
            address: "Mirpur DOHS, Dhaka",
        },

        social_links: {
            facebook: "https://facebook.com/rahim.tiles",
            linkedin: "https://linkedin.com/in/rahim-tiles",
            website: "https://rahimhome.com",
        },

        bio: "Home owner and interior design enthusiast. Interested in premium floor and wall tiles for residential and commercial projects.",

        preferred_tiles: [
            "Porcelain Tiles",
            "Glossy Floor Tiles",
            "Bathroom Wall Tiles",
            "Wood Finish Tiles",
        ],

        favorite_brands: [
            "RAK Ceramics",
            "DBL Ceramics",
            "X Ceramics",
        ],

        recent_orders: [
            {
                order_id: "ORD-1001",
                product: "Glossy White Floor Tiles",
                quantity: "250 sqft",
                price: 55000,
                status: "delivered",
                order_date: "2026-04-28",
            },
            {
                order_id: "ORD-1002",
                product: "Bathroom Wall Tiles",
                quantity: "120 sqft",
                price: 22000,
                status: "processing",
                order_date: "2026-05-03",
            },
        ],

        wishlist: [
            {
                name: "Marble Finish Porcelain Tile",
                category: "Living Room",
            },
            {
                name: "Wood Texture Ceramic Tile",
                category: "Bedroom",
            },
        ],

        preferences: {
            preferred_color: "White & Gray",
            tile_size: "24x24",
            delivery_area: "Dhaka",
        },

        stats: {
            total_orders: 13,
            completed_orders: 11,
            pending_orders: 2,
            wishlist_items: 6,
        },

        payment_info: {
            currency: "BDT",
            total_spent: 282000,
            due_amount: 12000,
            payment_methods: ["bKash", "Nagad", "Visa Card"],
        },

        activity_log: [
            {
                action: "placed a new order",
                time: "2026-05-06T10:20:00Z",
            },
            {
                action: "added tiles to wishlist",
                time: "2026-05-05T14:10:00Z",
            },
            {
                action: "submitted a product review",
                time: "2026-05-04T09:00:00Z",
            },
        ],

        created_at: "2025-02-15T08:00:00Z",
        updated_at: "2026-05-07T12:00:00Z",
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    const formatTimeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now - date;

        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (minutes < 60) return `${minutes} minutes ago`;
        if (hours < 24) return `${hours} hours ago`;

        return `${days} days ago`;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50">
            {/* Cover Section with Parallax Effect */}
            <div className="relative h-80 lg:h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                <img
                    src={userdata?.image}
                    alt="cover"
                    className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Decorative overlay pattern */}
                <div className="absolute inset-0 opacity-30 z-20" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
                
                {/* Avatar */}
                <div className="absolute -bottom-16 left-6 md:left-10 z-30">
                    <div className="relative">
                        <div className="w-28 mb-18 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-white">
                            <img
                                src={userdata?.image}
                                alt={userdata?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                </div>
            </div>

            {/* Profile Info Card */}
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    {userdata?.name}
                                </h1>
                                {user.is_verified && (
                                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs px-2.5 py-1 rounded-full shadow-md">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Verified
                                    </span>
                                )}
                                <span className="inline-flex items-center gap-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-md">
                                    {user.role}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 mb-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span className="text-sm">@{userdata?.name}</span>
                            </div>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {userdata?.email}
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {user.phone}
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {user.location.city}, {user.location.country}
                                </div>
                            </div>
                        </div>

                        {/* Stats Cards with Animation */}
                        <div className="grid grid-cols-3 gap-3">
                            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-3 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <p className="text-2xl font-bold text-blue-600">{user.stats.total_orders}</p>
                                <p className="text-xs text-gray-600">Total Orders</p>
                            </div>
                            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-3 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <p className="text-2xl font-bold text-green-600">{user.stats.completed_orders}</p>
                                <p className="text-xs text-gray-600">Completed</p>
                            </div>
                            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-3 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <p className="text-xl font-bold text-purple-600">৳ {user.payment_info.total_spent.toLocaleString()}</p>
                                <p className="text-xs text-gray-600">Total Spent</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* About Card */}
                        <div className="group bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">About Buyer</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{user.bio}</p>
                        </div>

                        {/* Buyer Info Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg flex items-center justify-center">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800">Buyer Information</h3>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-500">Customer ID</span>
                                    <span className="font-semibold text-gray-800">{user.user_id}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-500">Preferred Size</span>
                                    <span className="font-semibold text-gray-800">{user.preferences.tile_size}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                    <span className="text-gray-500">Preferred Color</span>
                                    <span className="font-semibold text-gray-800">{user.preferences.preferred_color}</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-500">Delivery Area</span>
                                    <span className="font-semibold text-gray-800">{user.preferences.delivery_area}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Modern Tab Bar */}
                        <div className="bg-white rounded-2xl shadow-lg p-1.5 flex gap-1">
                            {["overview", "wishlist", "orders", "activity"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-2.5 rounded-xl capitalize font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                        activeTab === tab
                                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md"
                                            : "text-gray-600 hover:bg-gray-100"
                                    }`}
                                >
                                    {tab === "overview" && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                        </svg>
                                    )}
                                    {tab === "wishlist" && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    )}
                                    {tab === "orders" && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    )}
                                    {tab === "activity" && (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Overview Tab */}
                        {activeTab === "overview" && (
                            <div className="space-y-6 animate-fadeIn">
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">Preferred Tiles</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        {user.preferred_tiles.map((tile, idx) => (
                                            <span
                                                key={idx}
                                                className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300 cursor-pointer"
                                            >
                                                {tile}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-800">Favorite Brands</h3>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        {user.favorite_brands.map((brand, idx) => (
                                            <div
                                                key={idx}
                                                className="border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50 to-white hover:shadow-md transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                                                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="font-semibold text-gray-800">{brand}</h4>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Wishlist Tab */}
                        {activeTab === "wishlist" && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">Wishlist Items</h3>
                                </div>
                                <div className="grid gap-4">
                                    {user.wishlist.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="group border border-gray-100 rounded-xl p-4 bg-gradient-to-r from-gray-50 to-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                                        >
                                            <div className="flex items-start justify-between">
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                                        {item.name}
                                                    </h4>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                                            {item.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Orders Tab */}
                        {activeTab === "orders" && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">Recent Orders</h3>
                                </div>
                                <div className="space-y-4">
                                    {user.recent_orders.map((order, idx) => (
                                        <div
                                            key={idx}
                                            className="group border border-gray-100 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                                        >
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h4 className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                                                        {order.product}
                                                    </h4>
                                                    <p className="text-xs text-gray-500 mt-1">
                                                        Order ID: {order.order_id}
                                                    </p>
                                                </div>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                        order.status === "delivered"
                                                            ? "bg-green-100 text-green-700"
                                                            : "bg-yellow-100 text-yellow-700"
                                                    }`}
                                                >
                                                    {order.status === "delivered" ? "✓ Delivered" : "⏳ Processing"}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 text-sm">
                                                <div>
                                                    <p className="text-gray-500">Quantity</p>
                                                    <p className="font-semibold text-gray-800">{order.quantity}</p>
                                                </div>
                                                <div>
                                                    <p className="text-gray-500">Price</p>
                                                    <p className="font-semibold text-gray-800">৳ {order.price.toLocaleString()}</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 text-xs text-gray-400">
                                                Ordered on {formatDate(order.order_date)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Activity Tab */}
                        {activeTab === "activity" && (
                            <div className="bg-white rounded-2xl shadow-lg p-6 animate-fadeIn">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800">Recent Activity</h3>
                                </div>
                                <div className="space-y-3">
                                    {user.activity_log.map((activity, idx) => (
                                        <div
                                            key={idx}
                                            className="flex justify-between items-center bg-gradient-to-r from-gray-50 to-white rounded-xl p-4 hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                                <span className="capitalize text-gray-700 font-medium">
                                                    {activity.action}
                                                </span>
                                            </div>
                                            <span className="text-sm text-gray-400">
                                                {formatTimeAgo(activity.time)}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Member Since</span>
                                        <span className="font-semibold text-gray-800">{formatDate(user.created_at)}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Last Updated</span>
                                        <span className="font-semibold text-gray-800">{formatDate(user.updated_at)}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfilePage;