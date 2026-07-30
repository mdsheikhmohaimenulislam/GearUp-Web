import { serverUrl } from "@/lib/serverUrl";
import { CreateCategoryData, UpdateCategoryData } from "@/lib/types";

export const getCategories = async () => {
  const res = await fetch(`${serverUrl}/api/categories`);

  return res.json();
};

export const createCategory = async (data: CreateCategoryData) => {
  const res = await fetch(`${serverUrl}/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const updateCategory = async (id: string, data: UpdateCategoryData) => {
  const res = await fetch(`${serverUrl}/api/categories/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteCategory = async (id: string) => {
  const res = await fetch(`${serverUrl}/api/categories/${id}`, {
    method: "DELETE",
  });

  return res.json();
};
