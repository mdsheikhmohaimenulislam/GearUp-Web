import { serverUrl } from "@/lib/serverUrl";

export const getGears = async () => {

  const res = await fetch(
    `${serverUrl}/api/gear`,
    {
      cache: "no-store",
    }
  );

  return res.json();

};



export const getGearById = async (
  id:string
) => {

  const res = await fetch(
    `${serverUrl}/api/gear/${id}`,
    {
      cache:"no-store"
    }
  );

  return res.json();

};



export const getCategories = async () => {

  const res = await fetch(
    `${serverUrl}/api/categories`
  );

  return res.json();

};