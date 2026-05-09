"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarMain() {

  const pathname = usePathname();

  const user = true;

  const navItems = [
    {
      name: "Tiles",
      path: "/main/tiles",
    },
    {
      name: "Profile",
      path: "/main/profile",
    },
    {
      name: "Logout",
      path: "/",
    },
  ];

  return (
    <div className="sticky top-0 z-50">

      <div className="navbar px-6 md:px-10 bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-lg">

        {/* Logo */}
        <div className="flex-1">

          <Link
            href="/main"
            className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"
          >
            TileMaster
          </Link>

        </div>

        {/* Center Menu */}
        <div className="flex justify-center flex-1">

          <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-2 backdrop-blur-md shadow-lg">

            {navItems.map((item) => {

              const active = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  
                  ${
                    active
                      ? "bg-orange-500 text-white shadow-md"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }
                  
                  `}
                >
                  {item.name}
                </Link>
              );
            })}

          </div>

        </div>

        {/* Right Avatar */}
        <div className="flex-1 flex justify-end">

          {user && (
            <div className="avatar">

              <div className="w-10 rounded-full ring ring-orange-400 ring-offset-2 ring-offset-slate-900 overflow-hidden">

                <img
                  src="https://i.pravatar.cc/150"
                  alt="user"
                />

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}