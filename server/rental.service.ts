import { serverUrl } from "@/lib/serverUrl";
import { CreateRentalData } from "@/lib/types";
import { cookies } from "next/headers";

export const createRental = async (data: CreateRentalData) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/rentals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getMyRentals = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/rentals`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
    cache: "no-store",
  });

  return res.json();
};

export const getSingleRental = async (id: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/rentals/${id}`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });

  return res.json();
};
