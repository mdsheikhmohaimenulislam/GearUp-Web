"use server";

import {
  getAdminGear,
  getAdminRentals,
  getUsers,
  updateUser,
} from "@/server/admin.service";

import { UpdateUserData } from "@/lib/types";
export async function gearActions(
 params?:{
  search?:string;
  category?:string;
  available?:string;
  page?:string;
  limit?:string;
 }
){

 return await getAdminGear(params);

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

