import { serverUrl } from "@/lib/serverUrl";
import { UpdateUserData } from "@/lib/types";
import { cookies } from "next/headers";

// Get all users
export const getUsers = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/admin/users`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });

  return res.json();
};

// Get all gears
export const getAdminGear = async (
   query?: {
    search?: string;
    category?: string;
    available?: string;
    page?: string;
    limit?: string;
  }
) => {


  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;



  const params = new URLSearchParams();



  if(query?.search){
    params.set(
      "search",
      query.search
    );
  }



  if(query?.category){
    params.set(
      "category",
      query.category
    );
  }



  if(query?.available){
    params.set(
      "available",
      query.available
    );
  }



  params.set(
    "page",
    query?.page || "1"
  );


  params.set(
    "limit",
    query?.limit || "10"
  );



  const res = await fetch(
    `${serverUrl}/api/admin/gear?${params.toString()}`,
    {
      headers:{
        Cookie:`accessToken=${token}`
      },

      cache:"no-store"
    }
  );


  return res.json();

};
// Get all rentals
export const getAdminRentals = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/admin/rentals`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
  });

  return res.json();
};

// Update user
export const updateUser = async (id: string, data: UpdateUserData) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/admin/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateGearStatus = async (
  id: string,
  data: {
    isActive: boolean;
  }
) => {

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

      credentials:"include",

      body:JSON.stringify(data),
    }
  );


  return res.json();

};


// Get all payments
export const getAdminPayments = async () => {

  const cookieStore = await cookies();

  const token =
    cookieStore.get("accessToken")?.value;


  const res = await fetch(
    `${serverUrl}/api/admin/payments`,
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