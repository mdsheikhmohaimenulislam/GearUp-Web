import { serverUrl } from "@/lib/serverUrl";
import {
  CreateGearData,
  UpdateGearData,
  UpdateOrderStatusData,
} from "@/lib/types";

export const createGear = async (data: CreateGearData) => {
  const res = await fetch(`${serverUrl}/api/provider/gear`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateGear = async (id: string, data: UpdateGearData) => {
  const res = await fetch(`${serverUrl}/api/provider/gear/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteGear = async (id: string) => {
  const res = await fetch(`${serverUrl}/api/provider/gear/${id}`, {
    method: "DELETE",
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
