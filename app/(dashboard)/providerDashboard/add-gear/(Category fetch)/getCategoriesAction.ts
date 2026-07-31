"use server";

import { getCategories } from "@/server/gear.service";

export async function getCategoriesAction() {
  const result = await getCategories();

  return result;
}