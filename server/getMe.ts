"use server";

import { serverUrl } from "@/lib/serverUrl";
import { cookies } from "next/headers";

export const getMe = async () => {

  const cookieStore = await cookies();


const accessToken = cookieStore.get("accessToken")?.value;





  if(!accessToken){
    return {
      success:false,
      message:"User not logged in.."
    };
  }


  const res = await fetch(
    `${serverUrl}/api/auth/me`,
    {
      method:"GET",
      headers:{
        Cookie:`accessToken=${accessToken}`
      },
      cache:"no-store"
    }
  );


  return res.json();

};