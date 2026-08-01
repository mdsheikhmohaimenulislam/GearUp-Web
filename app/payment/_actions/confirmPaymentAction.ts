"use server";

import { confirmPayment } from "@/server/payment.service";
import { ConfirmPaymentRequest } from "@/lib/types";

export async function confirmPaymentAction(data: ConfirmPaymentRequest) {
  return await confirmPayment(data);
}
