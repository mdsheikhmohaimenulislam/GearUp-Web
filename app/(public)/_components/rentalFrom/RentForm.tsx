"use client";
import { useState } from "react";
import { CalendarDays, Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

import { createRentalAction } from "../_actions/rentalAction";
import { useRouter } from "next/navigation";

type Props = {
  gearId: string;
};

export default function RentForm({ gearId }: Props) {
  const [quantity, setQuantity] = useState(1);

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (!startDate || !endDate) {
      toast.error("Please select rental dates");

      return;
    }

    setLoading(true);

    const result = await createRentalAction({
      gearId,
      quantity,
      startDate,
      endDate,
    });

    setLoading(false);

    if (result.success) {
      toast.success("Rental request created successfully");
      router.push("/customerDashboard/rents");
      router.refresh();
    } else {
      toast.error(result.message || "Something went wrong");
    }
  };

  return (
    <div
      className="
      border
      rounded-2xl
      p-6
      space-y-6
      bg-white
      dark:bg-black
      shadow-sm
      "
    >
      {/* Header */}

      <div>
        <h2 className="text-xl font-semibold">Rental Details</h2>

        <p className="text-sm text-gray-500 mt-1">Select your rental period</p>
      </div>

      {/* Date */}

      <div className="grid md:grid-cols-2 gap-5">
        {/* Start Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">Start Date</label>

          <div
            className="
      group
      flex
      items-center
      gap-3
      rounded-xl
      border
      bg-gray-50
      dark:bg-gray-900
      px-4
      transition
      focus-within:border-green-600
      focus-within:ring-2
      focus-within:ring-green-100
      "
          >
            <CalendarDays
              size={20}
              className="
        text-gray-500
        group-focus-within:text-green-600
        "
            />

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="
        w-full
        py-3
        bg-transparent
        outline-none
        text-sm
        cursor-pointer
        "
            />
          </div>
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <label className="text-sm font-semibold">End Date</label>

          <div
            className="
      group
      flex
      items-center
      gap-3
      rounded-xl
      border
      bg-gray-50
      dark:bg-gray-900
      px-4
      transition
      focus-within:border-green-600
      focus-within:ring-2
      focus-within:ring-green-100
      "
          >
            <CalendarDays
              size={20}
              className="
        text-gray-500
        group-focus-within:text-green-600
        "
            />

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="
        w-full
        py-3
        bg-transparent
        outline-none
        text-sm
        cursor-pointer
        "
            />
          </div>
        </div>
      </div>
      {/* Quantity */}

      <div
        className="
        flex
        items-center
        justify-between
        border
        rounded-xl
        p-4
        "
      >
        <div>
          <p className="font-medium">Quantity</p>

          <p className="text-sm text-gray-500">Number of gears</p>
        </div>

        <div
          className="
          flex
          items-center
          gap-4
          "
        >
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="
            border
            rounded-full
            p-2
            hover:bg-gray-100
            "
          >
            <Minus size={16} />
          </button>

          <span className="font-bold text-lg">{quantity}</span>

          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="
            border
            rounded-full
            p-2
            hover:bg-gray-100
            "
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Button */}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="
        w-full
        flex
        items-center
        justify-center
        gap-2
        bg-green-700
        text-white
        py-3
        rounded-xl
        font-medium
        hover:bg-green-600
        transition
        disabled:opacity-50
        "
      >
        <ShoppingBag size={20} />

        {loading ? "Processing..." : "Confirm Rental"}
      </button>
    </div>
  );
}
