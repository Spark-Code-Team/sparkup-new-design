import { NextResponse } from "next/server";

export function middleware(request) {
  const accessToken = request.cookies.get("access_token")?.value;

  const { pathname } = request.nextUrl;

  if (!accessToken && pathname.startsWith("/admin")) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect_to", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && pathname === "/login") {
    const adminUrl = new URL("/admin", request.url);
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
