"use server";

import { cookies } from "next/headers";
import { serverUrl } from "@/lib/serverUrl";


export async function updateGearStatusAction(
  id:string,
  data:{
    isActive:boolean;
  }
){

  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;



  const res = await fetch(
    `${serverUrl}/api/admin/gears/${id}`,
    {
      method:"PATCH",

      headers:{
        "Content-Type":"application/json",
        Cookie:`accessToken=${token}`,
      },

      body:JSON.stringify(data),

      cache:"no-store",
    }
  );


  return res.json();

}


export const gearDetailsActions = async (
  id:string
)=>{

  const cookieStore = await cookies();


  const token =
    cookieStore
    .get("accessToken")
    ?.value;



  const res =
    await fetch(
      `${serverUrl}/api/admin/gears/${id}`,
      {
        headers:{
          Cookie:
          `accessToken=${token}`
        },

        cache:"no-store"
      }
    );


  return res.json();

};