"use server";

import { returnRental } from "@/server/rental.service";

export async function returnRentalAction(id: string) {
  return await returnRental(id);
}