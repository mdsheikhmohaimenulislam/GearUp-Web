import { ConfirmPaymentRequest, CreatePaymentData } from "@/lib/types";
import { serverUrl } from "@/lib/serverUrl";
import { cookies } from "next/headers";

export const createPayment = async (data: CreatePaymentData) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${serverUrl}/api/payments/create`, {
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

export const confirmPayment = async (data: ConfirmPaymentRequest) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${serverUrl}/api/payments/confirm`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Cookie: `accessToken=${token}`,
      },

      body: JSON.stringify(data),
    }
  );

  return res.json();
};

export const getPayment = async (id: string) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/payments/${id}`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
  });

  return res.json();
};
