import { serverUrl } from "@/lib/serverUrl";
import { UpdateUserData } from "@/lib/types";
import { cookies } from "next/headers";

// Get all users
export const getUsers = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/admin/users`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });

  return res.json();
};

// Get all gears
export const getAdminGear = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/admin/gear`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });
  const data = await res.json();
  return data;
};

// Get all rentals
export const getAdminRentals = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/admin/rentals`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });

  return res.json();
};

// Update user
export const updateUser = async (id: string, data: UpdateUserData) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/admin/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};
