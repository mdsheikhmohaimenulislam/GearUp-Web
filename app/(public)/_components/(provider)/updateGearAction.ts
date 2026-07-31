"use server";

import { UpdateGear } from "@/lib/types";
import { updateGear } from "@/server/provider.service";


export async function updateGearAction(
  id: string,
  data: UpdateGear
) {

  try {

    const result = await updateGear(
      id,
      data 
    );


    return result;


  } catch(error){

    return {
      success:false,
      message:"Failed to update gear"
    };

  }

}