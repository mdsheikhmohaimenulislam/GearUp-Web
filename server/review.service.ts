import { serverUrl } from "@/lib/serverUrl";
import { CreateReviewData } from "@/lib/types";
import { cookies } from "next/headers";

export const createReview = async (data: CreateReviewData) => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;
  const res = await fetch(`${serverUrl}/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Cookie: `accessToken=${token}`,
    },
    cache: "no-store",
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};
