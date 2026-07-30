"use server";

import { RegisterValues } from "@/lib/types";
import { cookies } from "next/headers";

type LoginPayload = {
  email: string;
  password: string;
};

export const loginAction = async (payload: LoginPayload) => {
  const apiUrl = process.env.BACKEND_API_URL || "http://localhost:5000";

  const res = await fetch(`${apiUrl}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });
  }

  return result;
};

export const registerAction = async (values: RegisterValues) => {
  try {
    const apiUrl = process.env.BACKEND_APP_URL || "http://localhost:5000";

    const res = await fetch(`${apiUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      cache: "no-store",
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message || "Registration failed",
      };
    }

    return {
      success: true,
      message: result.message || "Registration successful",
      data: result.data,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
