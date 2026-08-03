import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "./lib/types";


const AUTH_ROUTES = [
  "/login",
  "/register",
];


const ROLE_ROUTES = {
  ADMIN: "/adminDashboard",
  PROVIDER: "/providerDashboard",
  CUSTOMER: "/customerDashboard",
};


const CUSTOMER_ROUTES = [
  "/order",
  "/rent",
  "/payment",
];


export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;


  const accessToken =
    request.cookies.get("accessToken")?.value;



  let user: JwtPayload | null = null;


  if(accessToken){

    try{

      user = jwtDecode<JwtPayload>(accessToken);

    }catch(error){

      return NextResponse.redirect(
        new URL("/login", request.url)
      );

    }

  }



  // =========================
  // Already logged in
  // login/register block
  // =========================

  if(
    AUTH_ROUTES.includes(pathname)
    &&
    user
  ){

    return NextResponse.redirect(
      new URL(
        ROLE_ROUTES[user.role],
        request.url
      )
    );

  }





  // =========================
  // Customer Routes
  // =========================


  if(
    CUSTOMER_ROUTES.some(
      route => pathname.startsWith(route)
    )
  ){


    if(!user){

      return NextResponse.redirect(
        new URL(
          `/login?redirect=${pathname}`,
          request.url
        )
      );

    }


    if(user.role !== "CUSTOMER"){

      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url
        )
      );

    }

  }





  // =========================
  // Dashboard Protection
  // =========================


  if(
    pathname.startsWith("/adminDashboard")
    ||
    pathname.startsWith("/providerDashboard")
    ||
    pathname.startsWith("/customerDashboard")
  ){


    if(!user){

      return NextResponse.redirect(
        new URL(
          "/login",
          request.url
        )
      );

    }


    if(
      pathname.startsWith("/adminDashboard")
      &&
      user.role !== "ADMIN"
    ){

      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url
        )
      );

    }



    if(
      pathname.startsWith("/providerDashboard")
      &&
      user.role !== "PROVIDER"
    ){

      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url
        )
      );

    }



    if(
      pathname.startsWith("/customerDashboard")
      &&
      user.role !== "CUSTOMER"
    ){

      return NextResponse.redirect(
        new URL(
          ROLE_ROUTES[user.role],
          request.url
        )
      );

    }


  }



  return NextResponse.next();

}





export const config = {

  matcher:[

    "/login",
    "/register",

    "/order/:path*",
    "/rent/:path*",
    "/payment/:path*",

    "/adminDashboard/:path*",
    "/providerDashboard/:path*",
    "/customerDashboard/:path*",

  ],

};