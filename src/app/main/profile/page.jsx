"use client";

import React, { useState } from 'react';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [showEditModal, setShowEditModal] = useState(false);

    // Static user data as provided
    const user = {
        "id": 101,
        "user_id": "USR-2026-0001",
        "username": "mahmud_dev",
        "full_name": "Md Mahmud",
        "email": "mahmud@example.com",
        "phone": "+8801712345678",
        "avatar": "https://i.pravatar.cc/300?img=12",
        "cover_photo": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        "role": "admin",
        "status": "active",
        "is_verified": true,
        "gender": "male",
        "date_of_birth": "2000-05-12",
        "nationality": "Bangladeshi",
        "location": {
            "country": "Bangladesh",
            "city": "Dhaka",
            "area": "Kaliganj",
            "address": "Kaliganj, Gazipur, Dhaka"
        },
        "social_links": {
            "facebook": "https://facebook.com/mahmud",
            "github": "https://github.com/mahmud",
            "linkedin": "https://linkedin.com/in/mahmud",
            "website": "https://mahmud.dev"
        },
        "bio": "Full stack developer focused on Next.js, React, Node.js and mobile app development.",
        "skills": ["JavaScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Firebase", "PHP", "MySQL"],
        "education": [
            { "institution": "Dhaka University", "degree": "BSc in Computer Science", "year": "2022 - 2026" },
            { "institution": "Govt College", "degree": "HSC Science", "year": "2019 - 2021" }
        ],
        "experience": [
            { "company": "TechSoft Ltd", "position": "Frontend Developer", "duration": "2024 - Present", "details": "Working on React & Next.js applications" },
            { "company": "Freelance", "position": "Web Developer", "duration": "2022 - 2024", "details": "Built multiple client websites and dashboards" }
        ],
        "projects": [
            { "name": "Tiles Gallery App", "stack": ["Next.js", "Tailwind", "JSON API"], "link": "https://tiles-app.com", "status": "completed" },
            { "name": "Fulus Finance API", "stack": ["PHP", "MySQL"], "link": "https://api.fulus.com", "status": "in-progress" }
        ],
        "preferences": { "theme": "dark", "language": "en", "notifications": { "email": true, "sms": false, "push": true } },
        "stats": { "total_projects": 12, "completed_projects": 9, "pending_tasks": 5, "followers": 1240, "following": 320 },
        "payment_info": { "currency": "BDT", "total_earnings": 125000, "withdrawable_balance": 45000, "payment_methods": ["bKash", "Nagad", "Bank"] },
        "activity_log": [
            { "action": "login", "time": "2026-05-06T10:20:00Z" },
            { "action": "updated profile", "time": "2026-05-05T14:10:00Z" },
            { "action": "created project", "time": "2026-05-04T09:00:00Z" }
        ],
        "created_at": "2025-01-10T08:00:00Z",
        "updated_at": "2026-05-07T12:00:00Z"
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
            
            {/* Cover Photo Section */}
            <div className="relative h-72 lg:h-96 overflow-hidden">
                <img 
                    src={user.cover_photo} 
                    alt="Cover" 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Avatar */}
                <div className="absolute -bottom-16 left-8 lg:left-12">
                    <div className="relative group">
                        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl border-4 border-white shadow-2xl overflow-hidden bg-white">
                            <img 
                                src={user.avatar} 
                                alt={user.full_name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition">
                            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
                
                {/* Edit Button */}
                <button 
                    onClick={() => setShowEditModal(true)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-white transition shadow-lg flex items-center gap-2"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Edit Profile
                </button>
            </div>

            {/* Profile Info Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 lg:mt-24">
                <div className="bg-white rounded-2xl shadow-xl p-6 -mt-8 relative z-10">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="text-3xl font-bold text-gray-900">{user.full_name}</h1>
                                {user.is_verified && (
                                    <div className="bg-blue-500 rounded-full p-1">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    user.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                                }`}>
                                    {user.role}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                }`}>
                                    {user.status}
                                </span>
                            </div>
                            <p className="text-gray-500">@{user.username}</p>
                            <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {user.email}
                                </span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {user.phone}
                                </span>
                            </div>
                        </div>
                        
                        {/* Stats Cards */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-3">
                                <p className="text-2xl font-bold text-blue-600">{user.stats.followers}</p>
                                <p className="text-xs text-gray-600">Followers</p>
                            </div>
                            <div className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3">
                                <p className="text-2xl font-bold text-green-600">{user.stats.completed_projects}</p>
                                <p className="text-xs text-gray-600">Projects</p>
                            </div>
                            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3">
                                <p className="text-2xl font-bold text-purple-600">{user.payment_info.total_earnings.toLocaleString()}</p>
                                <p className="text-xs text-gray-600">Earnings</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Left Sidebar */}
                    <div className="space-y-6">
                        {/* Bio Card */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                About
                            </h3>
                            <p className="text-gray-700 leading-relaxed">{user.bio}</p>
                        </div>

                        {/* Personal Info */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Personal Information
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">User ID</span>
                                    <span className="font-semibold text-gray-800">{user.user_id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Gender</span>
                                    <span className="font-semibold text-gray-800 capitalize">{user.gender}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Date of Birth</span>
                                    <span className="font-semibold text-gray-800">{formatDate(user.date_of_birth)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Nationality</span>
                                    <span className="font-semibold text-gray-800">{user.nationality}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Location</span>
                                    <span className="font-semibold text-gray-800 text-right">{user.location.city}, {user.location.country}</span>
                                </div>
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                Skills & Expertise
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {user.skills.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gradient-to-r from-orange-50 to-amber-50 text-orange-700 rounded-full text-sm font-medium">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
                                </svg>
                                Connect
                            </h3>
                            <div className="space-y-2">
                                {Object.entries(user.social_links).map(([platform, url]) => (
                                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" 
                                       className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition group">
                                        <span className="capitalize text-gray-700">{platform}</span>
                                        <svg className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Tabs */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Tabs Navigation */}
                        <div className="bg-white rounded-2xl shadow-lg p-1 flex gap-2">
                            {['overview', 'experience', 'projects', 'activity'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-3 rounded-xl font-semibold capitalize transition-all duration-300 ${
                                        activeTab === tab
                                            ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Overview Tab */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                {/* Education */}
                                <div className="bg-white rounded-2xl shadow-lg p-6">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                        Education
                                    </h3>
                                    <div className="space-y-4">
                                        {user.education.map((edu, idx) => (
                                            <div key={idx} className="border-l-4 border-orange-500 pl-4">
                                                <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                                                <p className="text-gray-600 text-sm">{edu.institution}</p>
                                                <p className="text-gray-400 text-xs">{edu.year}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Experience Tab */}
                        {activeTab === 'experience' && (
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Work Experience
                                </h3>
                                <div className="space-y-6">
                                    {user.experience.map((exp, idx) => (
                                        <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-bold text-gray-800">{exp.position}</h4>
                                                    <p className="text-gray-600 text-sm">{exp.company}</p>
                                                </div>
                                                <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">{exp.duration}</span>
                                            </div>
                                            <p className="text-gray-600 text-sm mt-2">{exp.details}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Projects Tab */}
                        {activeTab === 'projects' && (
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    Projects
                                </h3>
                                <div className="grid gap-4">
                                    {user.projects.map((project, idx) => (
                                        <div key={idx} className="border rounded-xl p-4 hover:shadow-lg transition">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-gray-800">{project.name}</h4>
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    project.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                                }`}>
                                                    {project.status}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {project.stack.map((tech, i) => (
                                                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">{tech}</span>
                                                ))}
                                            </div>
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" 
                                               className="text-orange-500 text-sm hover:underline">
                                                View Project →
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Activity Tab */}
                        {activeTab === 'activity' && (
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Recent Activity
                                </h3>
                                <div className="space-y-3">
                                    {user.activity_log.map((activity, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                <span className="text-gray-700 capitalize">{activity.action}</span>
                                            </div>
                                            <span className="text-sm text-gray-400">{formatTimeAgo(activity.time)}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Member Since */}
                                <div className="mt-6 pt-4 border-t">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Member since</span>
                                        <span className="font-semibold text-gray-800">{formatDate(user.created_at)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm mt-2">
                                        <span className="text-gray-500">Last updated</span>
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
};

export default ProfilePage;