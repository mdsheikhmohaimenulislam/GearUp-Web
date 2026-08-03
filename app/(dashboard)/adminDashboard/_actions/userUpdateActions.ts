"use server";
import { getUsers, updateUser } from "@/server/admin.service";
export async function getUserActions() {
  return await getUsers();
}
export async function getUserUpdateActions(
  id: string,
  data: { status: "ACTIVE" | "SUSPENDED" },
) {
  return await updateUser(id, data);
}
