import { Star, BadgeCheck, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
type Review = {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
};
type ReviewsProps = { reviews: Review[] };
const Reviews = ({ reviews }: ReviewsProps) => {
  const averageRating =
    reviews.length > 0
      ? (
          reviews.reduce((sum, review) => sum + review.rating, 0) /
          reviews.length
        ).toFixed(1)
      : "0.0";
  return (
    <div className="space-y-8">
      {" "}
      {/* Header */}{" "}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {" "}
        <div>
          {" "}
          <h2 className="text-2xl font-bold tracking-tight">
            {" "}
            Customer Reviews{" "}
          </h2>{" "}
          <p className="text-sm text-muted-foreground mt-1">
            {" "}
            Real experiences from customers who rented this gear{" "}
          </p>{" "}
        </div>{" "}
        <div className="flex items-center gap-4 rounded-2xl border bg-background px-5 py-4 shadow-sm">
          {" "}
          <div className="text-4xl font-bold text-yellow-500">
            {" "}
            {averageRating}{" "}
          </div>{" "}
          <div>
            {" "}
            <div className="flex items-center gap-1">
              {" "}
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className={
                    index < Math.round(Number(averageRating))
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}{" "}
            </div>{" "}
            <p className="text-sm font-medium mt-1">
              {" "}
              {reviews.length} review{reviews.length !== 1 ? "s" : ""}{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <Separator /> {/* Empty State */}{" "}
      {reviews.length === 0 ? (
        <Card className="border-dashed">
          {" "}
          <CardContent className="py-14 text-center">
            {" "}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              {" "}
              <MessageCircle className="text-muted-foreground" size={24} />{" "}
            </div>{" "}
            <h3 className="text-lg font-semibold"> No reviews yet </h3>{" "}
            <p className="text-sm text-muted-foreground mt-2">
              {" "}
              Be the first customer to share your experience with this
              gear.{" "}
            </p>{" "}
          </CardContent>{" "}
        </Card>
      ) : (
        <div className="grid gap-5">
          {" "}
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {" "}
              <CardContent className="p-6">
                {" "}
                <div className="flex items-start justify-between gap-4">
                  {" "}
                  {/* Left */}{" "}
                  <div className="space-y-3 flex-1">
                    {" "}
                    <div className="flex items-center gap-3">
                      {" "}
                      <div className="h-11 w-11 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-semibold">
                        {" "}
                        C{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <div className="flex items-center gap-2">
                          {" "}
                          <p className="font-semibold"> Customer </p>{" "}
                          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                            {" "}
                            <BadgeCheck size={12} /> Verified{" "}
                          </span>{" "}
                        </div>{" "}
                        <div className="flex items-center gap-1 mt-1">
                          {" "}
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              size={15}
                              className={
                                index < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}{" "}
                        </div>{" "}
                      </div>{" "}
                    </div>{" "}
                    <p className="text-sm leading-7 text-foreground">
                      {" "}
                      {review.comment || "No comment provided."}{" "}
                    </p>{" "}
                  </div>{" "}
                  {/* Right */}{" "}
                  <div className="shrink-0 text-right">
                    {" "}
                    <p className="text-xs text-muted-foreground">
                      {" "}
                      {new Date(review.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
              </CardContent>{" "}
            </Card>
          ))}{" "}
        </div>
      )}{" "}
    </div>
  );
};
export default Reviews;
