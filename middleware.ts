import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "./lib/types";


const AUTH_ROUTES = [
  "/login",
  "/register",
];



export function middleware(request: NextRequest) {


  const pathname = request.nextUrl.pathname;


  const accessToken =
    request.cookies.get("accessToken")?.value;




  if(
    accessToken &&
    AUTH_ROUTES.includes(pathname)
  ){


    const user:JwtPayload = jwtDecode(accessToken);



    if(user.role === "CUSTOMER"){

      return NextResponse.redirect(
        new URL(
          "/customerDashboard",
          request.url
        )
      );

    }



    if(user.role === "PROVIDER"){

      return NextResponse.redirect(
        new URL(
          "/providerDashboard",
          request.url
        )
      );

    }




    if(user.role === "ADMIN"){

      return NextResponse.redirect(
        new URL(
          "/adminDashboard",
          request.url
        )
      );

    }


  }




  return NextResponse.next();


}




export const config = {

  matcher: [

    "/login",

    "/register",

  ],

};