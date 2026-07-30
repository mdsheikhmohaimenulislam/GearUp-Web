import { serverUrl } from "@/lib/serverUrl";
import { CreateRentalData } from "@/lib/types";

export const createRental = async (data: CreateRentalData) => {
  const res = await fetch(`${serverUrl}/api/rentals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getRentals = async () => {
  const res = await fetch(`${serverUrl}/api/rentals`, {
    credentials: "include",
    cache: "no-store",
  });

  return res.json();
};

export const getSingleRental = async (id: string) => {
  const res = await fetch(`${serverUrl}/api/rentals/${id}`, {
    credentials: "include",
  });

  return res.json();
};
