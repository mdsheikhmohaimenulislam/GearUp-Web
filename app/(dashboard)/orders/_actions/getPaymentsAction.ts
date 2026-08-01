"use server";

import { getMyPayments } from "@/server/payment.service";


export async function getPaymentsAction() {

  const result = await getMyPayments();

  return result;

}