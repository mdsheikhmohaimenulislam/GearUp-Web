"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { createCategoryAction } from "../../_actions/CategoryAction";

export default function CategoryForm() {
  const router = useRouter();

  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Category name required");

      return;
    }

    const result = await createCategoryAction({
      name,
    });

    if (result.success) {
      toast.success("Category created");

      setName("");

      router.refresh();
    } else {
      toast.error(result.message || "Create failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      flex
      gap-3
      mb-6
      "
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="
        Category name
        "
        className="
        border
        rounded-lg
        px-4
        py-2
        "
      />

      <button
        type="submit"
        className="
        border
        rounded-lg
        px-4
        py-2
        "
      >
        Add
      </button>
    </form>
  );
}
