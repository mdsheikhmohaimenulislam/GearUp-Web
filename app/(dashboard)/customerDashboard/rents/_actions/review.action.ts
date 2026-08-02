"use server";

import { CreateReviewData } from "@/lib/types";
import { createReview } from "@/server/review.service";

export async function createReviewAction(data: CreateReviewData) {
  return await createReview(data);
}
