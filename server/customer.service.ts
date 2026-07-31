import { cookies } from "next/headers";
import { serverUrl } from "@/lib/serverUrl";


export const getCustomerDashboard = async () => {

  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;



  const res = await fetch(
    `${serverUrl}/dashboard`,
    {
      headers:{
        Cookie:`accessToken=${token}`,
      },

      credentials:"include",

      cache:"no-store",
    }
  );


  return res.json();

};