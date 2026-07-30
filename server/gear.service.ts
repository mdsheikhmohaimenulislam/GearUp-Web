import { serverUrl } from "@/lib/serverUrl";

export const getGears = async (query = "") => {
  const res = await fetch(`${serverUrl}/api/gear${query}`, {
    cache: "no-store",
  });

  return res.json();
};

export const getSingleGear = async (id: string) => {
  const res = await fetch(`${serverUrl}/api/gear/${id}`, {
    cache: "no-store",
  });

  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${serverUrl}/api/categories`, {
    cache: "no-store",
  });

  return res.json();
};
