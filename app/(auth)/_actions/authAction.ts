"use server";

import { RegisterValues } from "@/lib/types";
import { cookies } from "next/headers";

type LoginPayload = {
  email: string;
  password: string;
};


export async function loginAction(values: LoginPayload) {

  console.log(values);

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(values)
    }
  );


  const data = await res.json();


  console.log("LOGIN RESPONSE:", data);



  if(data.success){

    console.log(
      "ACCESS TOKEN FROM BACKEND:",
      data.data.accessToken
    );


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


    console.log(
      "COOKIE SET DONE"
    );

  }


  return data;
}



export async function registerAction(values: RegisterValues) {
  try {
    console.log("REGISTER DATA:", values);

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    const data = await res.json();

    console.log("REGISTER RESPONSE:", data);

    return data;

  } catch (error) {
    console.log("REGISTER ERROR:", error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
