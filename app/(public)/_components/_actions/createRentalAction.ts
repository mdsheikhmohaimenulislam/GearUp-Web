"use server";

import { createRental } from "@/server/rental.service";
import { CreateRentalData } from "@/lib/types";


export async function createRentalAction(
  data: CreateRentalData
) {

  return await createRental(data);

}