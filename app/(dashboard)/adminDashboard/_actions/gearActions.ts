"use server";

import {
  getAdminGear,
  getAdminRentals,
  getUsers,
  updateUser,
} from "@/server/admin.service";

import { UpdateUserData } from "@/lib/types";

export async function gearActions() {
  const result = await getAdminGear();

  return result;
}

export async function orderActions() {
  const result = await getAdminRentals();

  return result;
}

export async function getUserActions() {
  const result = await getUsers();

  return result;
}

export async function getUserUpdateActions(id: string, data: UpdateUserData) {
  const result = await updateUser(id, data);

  return result;
}
