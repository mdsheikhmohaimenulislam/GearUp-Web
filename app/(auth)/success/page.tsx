"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoogleAuthSuccessPage() {
  const router = useRouter();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       router.replace("/customerDashboard");
//     }, 500);

//     return () => clearTimeout(timer);
//   }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-green-600" />

        <h2 className="text-xl font-semibold">
          Google login successful
        </h2>

        <p className="mt-2 text-muted-foreground">
          Redirecting to your dashboard...
        </p>
      </div>
    </div>
  );
}