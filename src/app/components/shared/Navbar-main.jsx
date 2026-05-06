"use client";

import Link from "next/link";

export default function NavbarMain() {
  const user = true; // replace with auth

  const handleLogout = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="sticky top-0 z-50">

      <div className="navbar px-6 md:px-10 bg-white/10 backdrop-blur-xl border-b border-white/20">

        {/* Logo */}
        <div className="flex-1">
          <Link
            href="/main"
            className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
          >
            TilesGallery
          </Link>
        </div>

        {/* Center Menu */}
        <div className="flex justify-center flex-1">

          <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 backdrop-blur-md shadow-lg">

            <Link
              href="/tiles"
              className="px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-orange-500 hover:text-white transition"
            >
              Tiles
            </Link>

            <Link
              href="/profile"
              className="px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-orange-500 hover:text-white transition"
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded-full text-sm text-gray-200 hover:bg-red-500 hover:text-white transition"
            >
              Logout
            </button>

          </div>

        </div>

        {/* Right (optional user avatar) */}
        <div className="flex-1 flex justify-end">
          {user && (
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-orange-400 ring-offset-2">
                <img src="https://i.pravatar.cc/150" />
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}