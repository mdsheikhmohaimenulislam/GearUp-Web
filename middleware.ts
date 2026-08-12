import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

type UserRole = "ADMIN" | "PROVIDER" | "CUSTOMER";

interface JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
  iat?: number;
  exp?: number;
}

const AUTH_ROUTES = ["/login", "/register"];

const ROLE_ROUTES: Record<UserRole, string> = {
  ADMIN: "/adminDashboard",
  PROVIDER: "/providerDashboard",
  CUSTOMER: "/customerDashboard",
};

const CUSTOMER_ROUTES = [
  "/order",
  "/rent",
  "/payment",
];

function getUserFromToken(
  accessToken: string | undefined,
): JwtPayload | null {
  if (!accessToken) {
    return null;
  }

  try {
    const user = jwtDecode<JwtPayload>(accessToken);

    // Token expired
    if (user.exp && user.exp * 1000 < Date.now()) {
      return null;
    }

    // Invalid role
    if (
      user.role !== "ADMIN" &&
      user.role !== "PROVIDER" &&
      user.role !== "CUSTOMER"
    ) {
      return null;
    }

    return user;
  } catch (error) {
    console.error("JWT decode error:", error);
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken =
    request.cookies.get("accessToken")?.value;

  const user = getUserFromToken(accessToken);

  // =====================================================
  // Google OAuth success page
  // IMPORTANT: Never protect this route
  // =====================================================

  if (pathname.startsWith("/auth/success")) {
    return NextResponse.next();
  }

  // =====================================================
  // Login / Register
  // If already logged in -> send to role dashboard
  // =====================================================

  if (AUTH_ROUTES.includes(pathname) && user) {
    return NextResponse.redirect(
      new URL(ROLE_ROUTES[user.role], request.url),
    );
  }

  // =====================================================
  // Customer protected routes
  // =====================================================

  if (
    CUSTOMER_ROUTES.some((route) =>
      pathname.startsWith(route),
    )
  ) {
    // Not logged in
    if (!user) {
      const loginUrl = new URL(
        "/login",
        request.url,
      );

      loginUrl.searchParams.set(
        "redirect",
        pathname,
      );

      return NextResponse.redirect(loginUrl);
    }

    // Logged in but not customer
    if (user.role !== "CUSTOMER") {
      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url,
        ),
      );
    }

    return NextResponse.next();
  }

  // =====================================================
  // Admin Dashboard
  // =====================================================

  if (
    pathname.startsWith("/adminDashboard")
  ) {
    if (!user) {
      return NextResponse.redirect(
        new URL("/login", request.url),
      );
    }

    if (user.role !== "ADMIN") {
      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url,
        ),
      );
    }

    return NextResponse.next();
  }

  // =====================================================
  // Provider Dashboard
  // =====================================================

  if (
    pathname.startsWith("/providerDashboard")
  ) {
    if (!user) {
      return NextResponse.redirect(
        new URL("/login", request.url),
      );
    }

    if (user.role !== "PROVIDER") {
      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url,
        ),
      );
    }

    return NextResponse.next();
  }

  // =====================================================
  // Customer Dashboard
  // =====================================================

  if (
    pathname.startsWith("/customerDashboard")
  ) {
    if (!user) {
      return NextResponse.redirect(
        new URL("/login", request.url),
      );
    }

    if (user.role !== "CUSTOMER") {
      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url,
        ),
      );
    }

    return NextResponse.next();
  }

  // =====================================================
  // Everything else
  // =====================================================

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/login",
    "/register",

    "/auth/success",

    "/order/:path*",
    "/rent/:path*",
    "/payment/:path*",

    "/adminDashboard/:path*",
    "/providerDashboard/:path*",
    "/customerDashboard/:path*",
  ],
};