import { serverUrl } from "@/lib/serverUrl";
import { CreateReviewData } from "@/lib/types";

export const createReview = async (data: CreateReviewData) => {
  const res = await fetch(`${serverUrl}/api/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};
