import { ConfirmPaymentData, CreatePaymentData } from "@/lib/types";
import { serverUrl } from "@/lib/serverUrl";

export const createPayment = async (data: CreatePaymentData) => {
  const res = await fetch(`${serverUrl}/api/payments/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const confirmPayment = async (data: ConfirmPaymentData) => {
  const res = await fetch(`${serverUrl}/api/payments/confirm`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const getPayment = async (id: string) => {
  const res = await fetch(`${serverUrl}/api/payments/${id}`);

  return res.json();
};
