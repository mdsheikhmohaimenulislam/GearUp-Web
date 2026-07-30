import { NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = ["/login", "/register"];

const PUBLIC_ROUTES = [
  "/",
  "/gear",
  "/categories",
  "/me",
  "/login",
  "/register",
];

const PROTECTED_ROUTES = [
  "/dashboard",
  "/provider-dashboard",
  "/admin-dashboard",
  "/profile",
  "/orders",
];

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const accessToken = request.cookies.get("accessToken")?.value;

  const isProtectedRoute = PROTECTED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  // token নাই protected page এ গেলে login
  if (!accessToken && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // token থাকলে login/register এ যেতে দিবে না
  if (accessToken && AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)"],
};
