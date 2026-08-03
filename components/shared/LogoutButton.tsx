"use client";

import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/(auth)/_actions/logoutAction";
import { useState } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);

      const result = await logoutAction();

      if (result.success) {
        toast.success("Logout successful");

        router.replace("/login");
        router.refresh();
      } else {
        toast.error(result.message || "Logout failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className="
        flex
        items-center
        gap-3
        w-full
        px-4
        py-3
        rounded-md
        text-red-600
        hover:bg-red-50
        transition
        disabled:opacity-50
      "
    >
      <LogOut size={20} />

      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}