"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { createReviewAction } from "@/app/(dashboard)/customerDashboard/rents/_actions/review.action";
import { Star } from "lucide-react";

type Props = {
  gearItemId: string;
  orderId: string;
};

export default function ReviewSection({ gearItemId, orderId }: Props) {
  const [comment, setComment] = useState("");

  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) {
      toast.error("Please write a comment");

      return;
    }

    try {
      setLoading(true);

      const reviewData = {
        gearItemId,
        orderId,
        rating,
        comment,
      };

      console.log("Review Data:", reviewData);
      const res = await createReviewAction(reviewData);

      if (res?.success === false) {
        toast.error(res.message || "Failed to submit review");

        return;
      }

      toast.success("Review submitted successfully");

      setComment("");

      setRating(5);
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      border
      rounded-2xl
      p-6
      space-y-5
      bg-white
      dark:bg-black
      "
    >
      <h2
        className="
        text-2xl
        font-bold
        "
      >
        Write a Review
      </h2>

      <div className="space-y-3">
        <label className="font-medium">Rating</label>

        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="
        transition
        hover:scale-110
        "
            >
              <Star
                size={32}
                className={`
          ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
          `}
              />
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500">Selected Rating: {rating}/5</p>
      </div>

      <div className="space-y-2">
        <label className="font-medium">Comment</label>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="
          border
          rounded-lg
          p-3
          w-full
          min-h-32
          resize-none
          "
          placeholder="
          Share your experience...
          "
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={loading}
        className="
        w-full
        "
      >
        {loading ? "Submitting..." : "Submit Review"}
      </Button>
    </div>
  );
}
