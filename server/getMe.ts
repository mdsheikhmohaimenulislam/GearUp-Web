"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in..",
    };
  }

  const apiUrl = process.env.BACKEND_API_URL || "http://localhost:5000";

  const res = await fetch(`${apiUrl}/api/auth/me`, {
    headers: {
      cookie: `accessToken=${accessToken}`,
    },
    cache: "no-store",
  });

  return res.json();
};
