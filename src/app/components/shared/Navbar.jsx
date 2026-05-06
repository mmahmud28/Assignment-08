"use client";
import Link from "next/link";

export default function Navbar() {
  const user = null; // replace with auth

  return (
    <div className="navbar bg-base-100 shadow">
      
      {/* Left */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          TilesGallery
        </Link>
      </div>

      {/* Center */}
      <div className="hidden md:flex gap-5">
        <Link href="/">Home</Link>
        <Link href="/tiles">All Tiles</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      {/* Right */}
      <div>
        {user ? (
          <>
            <Link href="/profile">Profile</Link>
            <button className="btn btn-sm">Logout</button>
          </>
        ) : (
          <Link href="/login" className="btn btn-sm">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}