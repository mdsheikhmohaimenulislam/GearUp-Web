"use server";

import { gearSchema } from "./gearSchema";
import { createGea } from "@/server/provider.service";


export async function createGearAction(
  data: unknown
) {

  try {

    const validatedData =
      gearSchema.parse(data);


    const result =
      await createGea(validatedData);


    return result;


  } catch (error) {

    console.log("Create Gear Error:", error);


    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to create gear",
    };

  }

}