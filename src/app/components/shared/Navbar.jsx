"use client";

import Link from "next/link";

export default function Navbar() {
  const user = null; // replace with auth

  return (
    <div className="navbar px-4 md:px-8 bg-white/10 backdrop-blur-lg border-b border-white/20 sticky top-0 z-50">

      {/* Left */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
        >
          TilesGallery
        </Link>
      </div>

     

      {/* Right */}
      <div className="flex items-center gap-3">

        {user ? (
          <div className="dropdown dropdown-end">

            {/* Avatar */}
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full ring ring-orange-400 ring-offset-2">
                <img src={user?.photoURL || "https://i.pravatar.cc/150"} />
              </div>
            </label>

            {/* Dropdown */}
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-3 shadow-lg menu menu-sm dropdown-content bg-white rounded-xl w-44"
            >
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <button className="text-red-500">Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="btn btn-sm bg-orange-500 hover:bg-orange-600 text-white border-none"
            >
              Login
            </Link>

            <Link
              href="/auth/register"
              className="btn btn-sm btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              Register
            </Link>
          </>
        )}

        

      </div>
    </div>
  );
}