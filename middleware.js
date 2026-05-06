import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("token");

  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  // যদি login না থাকে → auth page এ যেতে দিবে
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}