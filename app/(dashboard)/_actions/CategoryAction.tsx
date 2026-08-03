"use server";

import {
  createCategory as createCategoryService,
  updateCategory as updateCategoryService,
  deleteCategory as deleteCategoryService,
} from "@/server/category.service";

import { CreateCategoryData, UpdateCategoryData } from "@/lib/types";

export async function createCategoryAction(data: CreateCategoryData) {
  return await createCategoryService(data);
}

export async function updateCategoryAction(
  id: string,
  data: UpdateCategoryData,
) {
  return await updateCategoryService(id, data);
}

export async function deleteCategoryAction(id: string) {
  return await deleteCategoryService(id);
}
