"use client";

import Lottie from "lottie-react";
import notFoundAnimation from "@/public/assets/notFound.json";

export default function NotFoundAnimation() {
  return (
    <Lottie animationData={notFoundAnimation} loop className="w-[350px]" />
  );
}
