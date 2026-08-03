"use client";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { getUserUpdateActions } from "../../_actions/gearActions";

type Props = { user: { id: string; status: "ACTIVE" | "BLOCKED" } };
export default function UserActionButton({ user }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleUpdate = () => {
    startTransition(async () => {
      const newStatus: "ACTIVE" | "SUSPENDED" =
        user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
  
      const result = await getUserUpdateActions(user.id, { status: newStatus });
  
      router.refresh();
    });
  };

  return (
    <button
      onClick={handleUpdate}
      disabled={isPending}
      className={
        user.status === "ACTIVE"
          ? "px-3 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 disabled:opacity-50"
          : "px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 disabled:opacity-50"
      }
    >
      {" "}
      {isPending
        ? "Updating..."
        : user.status === "ACTIVE"
          ? "SUSPENDED"
          : "Activate"}{" "}
    </button>
  );
}
