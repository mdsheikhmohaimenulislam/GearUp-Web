import { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { jwtUtils } from "./utils/jwt";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = [
  "/",
  "/gear",
  "/categories",
  "/news",
  "/login",
  "/register",
];
const PROTECTED_ROUTES = [
  "/dashboard",
  "/provider-dashboard",
  "/admin-dashboard",
  "/profile",
  "/orders",
]

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const accessToken = request.cookies.get("accessToken")?.value;

  const decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(
        accessToken,
        process.env.JWT_ACCESS_SECRET as string
      )
    : null;

  let userRole = null;

  if (decodedAccessToken?.success && decodedAccessToken.data) {
    userRole = (decodedAccessToken.data as JwtPayload).role;
  }

  // invalid token হলে cookie remove
  if (accessToken && !decodedAccessToken?.success) {
    const response = NextResponse.redirect(
      new URL("/login", request.url)
    );

    response.cookies.delete("accessToken");

    return response;
  }

  // login/register এ logged user গেলে redirect
  if (accessToken && AUTH_ROUTES.includes(pathname)) {
    if (userRole === "CUSTOMER") {
      return NextResponse.redirect(
        new URL("/dashboard", request.url)
      );
    }

    if (userRole === "PROVIDER") {
      return NextResponse.redirect(
        new URL("/provider-dashboard", request.url)
      );
    }

    if (userRole === "ADMIN") {
      return NextResponse.redirect(
        new URL("/admin-dashboard", request.url)
      );
    }
  }

  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) =>
      pathname === route || pathname.startsWith(route + "/")
  );
const isProtectedRoute = PROTECTED_ROUTES.some(
  (route) =>
    pathname === route || pathname.startsWith(route + "/")
);


  // protected route
  if (!accessToken && !isPublicRoute && isProtectedRoute) {
    const loginUrl = new URL("/login", request.url);

    loginUrl.searchParams.set(
      "redirectTo",
      pathname + request.nextUrl.search
    );

    return NextResponse.redirect(loginUrl);
  }


  // role protection
  if (
    pathname.startsWith("/provider-dashboard") &&
    userRole !== "PROVIDER"
  ) {
    return NextResponse.redirect(
      new URL("/not-found", request.url)
    );
  }


  if (
    pathname.startsWith("/admin-dashboard") &&
    userRole !== "ADMIN"
  ) {
    return NextResponse.redirect(
      new URL("/not-found", request.url)
    );
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)",
  ],
};