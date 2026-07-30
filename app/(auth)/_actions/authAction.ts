"use server";

import { RegisterValues } from "@/lib/types";

export const loginAction = async (data: {
  email: string;
  password: string;
}) => {
  const res = await fetch(`${process.env.BACKEND_APP_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
};

export const registerAction = async (values: RegisterValues) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        cache: "no-store",
      },
    );

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
  } catch (error) {
    console.log("Register Action Error:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
