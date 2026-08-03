"use server";


import { getAdminPayments } from "@/server/admin.service";


export async function paymentActions(){

  return await getAdminPayments();

}

