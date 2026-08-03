"use server";

import { serverUrl } from "@/lib/serverUrl";
import { RegisterValues } from "@/lib/types";
import { cookies } from "next/headers";

type LoginPayload = {
  email: string;
  password: string;
};


export async function loginAction(values: LoginPayload) {



  const res = await fetch(
    `${serverUrl}/api/auth/login`,
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values)
    }
  );


  const data = await res.json();






  if(data.success){

 


    const cookieStore = await cookies();


    cookieStore.set(
      "accessToken",
      data.data.accessToken,
      {
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        path:"/",
      }
    );


 

  }


  return data;
}



export async function registerAction(values: RegisterValues) {
  try {


    const res = await fetch(
      `${serverUrl}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await res.json();



    return data;

  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
