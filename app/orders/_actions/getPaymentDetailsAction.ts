"use server";

import { getPaymentDetails } from "@/server/payment.service";


export async function getPaymentDetailsAction(
  id: string
) {

  const result = await getPaymentDetails(id);

  return result;

}