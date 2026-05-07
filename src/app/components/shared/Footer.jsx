import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            TileMaster
          </h2>

          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Premium quality tiles for modern homes, offices, and luxury spaces.
            We provide durable, stylish, and affordable tile solutions.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">All Tiles</a></li>
            <li><a href="#" className="hover:text-orange-400">Featured</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Categories
          </h3>

          <ul className="space-y-2 text-sm">
            <li>Floor Tiles</li>
            <li>Wall Tiles</li>
            <li>Premium Tiles</li>
            <li>Outdoor Tiles</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Newsletter
          </h3>

          <p className="text-sm text-gray-400 mb-3">
            Get latest updates about new tile collections.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-l-lg text-black outline-none"
            />
            <button className="bg-orange-500 px-4 rounded-r-lg font-semibold">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TileMaster. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;