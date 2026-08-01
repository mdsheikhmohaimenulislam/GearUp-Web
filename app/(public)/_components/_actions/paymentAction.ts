"use server";

import { createPayment } from "@/server/payment.service";



export async function createPaymentAction(
  data: {
    orderId: string;
  }
) {

  return await createPayment(data);

}