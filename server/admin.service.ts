// import { serverUrl } from "@/lib/serverUrl";
// import { UpdateUserData } from "@/lib/types";

// export const getUsers = async () => {
//   const res = await fetch(`${serverUrl}/api/admin/users`, {
//     credentials: "include",
//   });

//   return res.json();
// };

// export const getAdminGear = async () => {
//   const res = await fetch(`${serverUrl}/api/admin/gear`, {
//     credentials: "include",
//   });

//   return res.json();
// };

// export const getAdminRentals = async () => {
//   const res = await fetch(`${serverUrl}/api/admin/rentals`, {
//     credentials: "include",
//   });

//   return res.json();
// };

// export const updateUser = async (id: string, data: UpdateUserData) => {
//   const res = await fetch(`${serverUrl}/api/admin/users/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };
