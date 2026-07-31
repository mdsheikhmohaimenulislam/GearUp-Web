"use client";

import { useState } from "react";
import { toast } from "sonner";
import { updateGearAction } from "./updateGearAction";

export function useUpdateGear(id: string) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      title: formData.get("title") as string,

      description: formData.get("description") as string,

      pricePerDay: Number(formData.get("pricePerDay")),

      quantityTotal: Number(formData.get("quantityTotal")),

      quantityAvailable: Number(formData.get("quantityAvailable")),
    };

    try {
      setLoading(true);

      const result = await updateGearAction(id, data);

      if (result.success) {
        toast.success("Gear updated successfully");
        form.reset();
      } else {
        toast.error(result.message);
      }

      return result;
    } catch (error) {
      toast.error("Something went wrong");

      return {
        success: false,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    loading,
  };
}
