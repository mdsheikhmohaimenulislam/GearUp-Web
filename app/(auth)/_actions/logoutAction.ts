"use server";

import { logout } from "@/server/Logout";




export async function logoutAction() {

  const result = await logout();

  return result;

}