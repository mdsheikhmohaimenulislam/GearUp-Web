import { serverUrl } from "@/lib/serverUrl";
import { CreateCategoryData, UpdateCategoryData } from "@/lib/types";
import { cookies } from "next/headers";

export const getCategories = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/categories`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
  });

  return res.json();
};

export const createCategory = async (data: CreateCategoryData) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
          Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateCategory = async (id: string, data: UpdateCategoryData) => {
    const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/categories/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
          Cookie: `accessToken=${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteCategory = async (id: string) => {
    const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/categories/${id}`, {
    headers: {
      Cookie: `accessToken=${token}`,
    },
    method: "DELETE",
  });

  return res.json();
};
