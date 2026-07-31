"use server";

import { deleteGear } from "@/server/provider.service";


export async function deleteGearAction(
  id:string
){

  try{

    const result =
      await deleteGear(id);


    return result;


  }
  catch(error){

    return {
      success:false,
      message:"Failed to delete gear"
    };

  }

}