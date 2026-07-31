"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateOrderStatusAction } from "@/app/(public)/_components/(provider)/updateOrderStatusAction";


export default function UpdateOrderButton({
  id,
  status,
  text,
}: {
  id: string;
  status: "CONFIRMED" | "PICKED_UP" | "RETURNED" | "CANCELLED";
  text: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleUpdate = async () => {
    try {
      setLoading(true);

      const result = await updateOrderStatusAction(id, { status });

      if (result.success) {
        toast.success("Order status updated");

        // UI refresh
        router.refresh();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleUpdate}
      disabled={loading}
      className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-600 disabled:opacity-50"
    >
      {loading ? "Updating..." : text}
    </button>
  );
}