import { serverUrl } from "@/lib/serverUrl";
import {
  CreateGearData,
  UpdateGearData,
  UpdateOrderStatusData,
} from "@/lib/types";
import { cookies } from "next/headers";

export const getMyGears = async () => {
  const cookieStore = await cookies();

  const res = await fetch(`${serverUrl}/api/provider/gear`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  return res.json();
};

export async function createGea(data: CreateGearData) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${serverUrl}/api/provider/gear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

export const updateGear = async (id: string, data: UpdateGearData) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${serverUrl}/api/provider/gear/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteGear = async (id: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/provider/gear/${id}`, {
    method: "DELETE",
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });

  return res.json();
};

export const getProviderOrders = async () => {
  const res = await fetch(`${serverUrl}/api/provider/orders`, {
    credentials: "include",
    cache: "no-store",
  });

  return res.json();
};

export const updateOrderStatus = async (
  id: string,
  data: UpdateOrderStatusData,
) => {
  const res = await fetch(`${serverUrl}/api/provider/orders/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};
