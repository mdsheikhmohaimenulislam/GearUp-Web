import { serverUrl } from "@/lib/serverUrl";
import { cookies } from "next/headers";

export const googleService = async (idToken: string) => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${serverUrl}/api/auth/google`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(accessToken
        ? {
            Cookie: `accessToken=${accessToken}`,
          }
        : {}),
    },
    body: JSON.stringify({
      idToken,
    }),
    cache: "no-store",
  });

  return res.json();
};