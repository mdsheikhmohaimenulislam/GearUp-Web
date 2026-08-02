import { NextRequest, NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";
import { JwtPayload } from "./lib/types";


const AUTH_ROUTES = [
  "/login",
  "/register",
];


const CUSTOMER_ROUTES = [
  "/order",
  "/rent",
  "/payment",
];


export function middleware(request: NextRequest) {

  const pathname = request.nextUrl.pathname;


  const accessToken =
    request.cookies.get("accessToken")?.value;



  // =========================
  // Auth Route Protection
  // =========================

  if (
    accessToken &&
    AUTH_ROUTES.includes(pathname)
  ) {

    const user: JwtPayload =
      jwtDecode(accessToken);


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





  // =========================
  // Customer Only Routes
  // order/rent/payment
  // =========================


  if(
    CUSTOMER_ROUTES.some(
      (route)=> pathname.startsWith(route)
    )
  ){

    if(!accessToken){

      return NextResponse.redirect(
        new URL(
          `/login?redirect=${pathname}`,
          request.url
        )
      );

    }


    const user: JwtPayload =
      jwtDecode(accessToken);



    if(user.role !== "CUSTOMER"){

      return NextResponse.redirect(
        new URL(
          "/",
          request.url
        )
      );

    }

  }





  // =========================
  // Provider Dashboard
  // =========================


  if(
    pathname.startsWith(
      "/providerDashboard"
    )
  ){


    if(!accessToken){

      return NextResponse.redirect(
        new URL(
          "/login",
          request.url
        )
      );

    }


    const user: JwtPayload =
      jwtDecode(accessToken);



    if(user.role !== "PROVIDER"){

      if(user.role === "CUSTOMER"){

        return NextResponse.redirect(
          new URL(
            "/customerDashboard",
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

  }






  // =========================
  // Customer Dashboard
  // =========================


  if(
    pathname.startsWith(
      "/customerDashboard"
    )
  ){


    if(!accessToken){

      return NextResponse.redirect(
        new URL(
          "/login",
          request.url
        )
      );

    }


    const user: JwtPayload =
      jwtDecode(accessToken);



    if(user.role !== "CUSTOMER"){

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

  }







  // =========================
  // Admin Dashboard
  // =========================


  if(
    pathname.startsWith(
      "/adminDashboard"
    )
  ){


    if(!accessToken){

      return NextResponse.redirect(
        new URL(
          "/login",
          request.url
        )
      );

    }


    const user: JwtPayload =
      jwtDecode(accessToken);



    if(user.role !== "ADMIN"){


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

    "/providerDashboard/:path*",
    "/customerDashboard/:path*",
    "/adminDashboard/:path*",
  ],

};