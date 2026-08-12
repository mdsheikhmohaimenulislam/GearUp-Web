"use server";

import { cookies } from "next/headers";

type GoogleLoginState =
  | {
      status: "idle";
    }
  | {
      status: "success";
      data: {
        message: string;
        user: {
          id: string;
          name: string;
          email: string;
          role: string;
        };
      };
    }
  | {
      status: "error";
      message: string;
    };

export async function loginWithGoogle(
  _prevState: GoogleLoginState,
  idToken: string,
): Promise<GoogleLoginState> {
  try {
    if (!idToken) {
      return {
        status: "error",
        message: "Google ID token is required.",
      };
    }

    const backendUrl =
      process.env.NEXT_PUBLIC_BACKEND_API_URL;

    if (!backendUrl) {
      return {
        status: "error",
        message: "Backend URL is not configured.",
      };
    }

    const response = await fetch(
      `${backendUrl}/api/auth/google-login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken,
        }),
        cache: "no-store",
      },
    );

    const result = await response.json();

    if (!response.ok) {
      return {
        status: "error",
        message:
          result?.message ||
          "Google login failed.",
      };
    }

    const accessToken =
      result?.data?.accessToken;

    const refreshToken =
      result?.data?.refreshToken;

    if (!accessToken || !refreshToken) {
      return {
        status: "error",
        message: "Tokens were not returned by backend.",
      };
    }

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return {
      status: "success",
      data: {
        message:
          result?.message ||
          "Google login successful.",
        user: result.data.user,
      },
    };
  } catch (error) {
    console.error("Google login error:", error);

    return {
      status: "error",
      message: "Something went wrong during Google login.",
    };
  }
}