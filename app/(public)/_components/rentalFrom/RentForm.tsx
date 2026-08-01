"use client";

import { useState } from "react";
import { CalendarDays, Minus, Plus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { createRentalAction } from "../_actions/createRentalAction";
import { createPaymentAction } from "../_actions/paymentAction";

type Props = {
  gearId: string;
  maxQuantity?: number;
};

export default function RentForm({ gearId, maxQuantity = 10 }: Props) {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const [loading, setLoading] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async () => {
    if (!startDate || !endDate) {
      toast.error("Please select rental dates");

      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      toast.error("End date must be after start date");

      return;
    }

    try {
      setLoading(true);

      // 1. Create Rental Order

      const rentalResult = await createRentalAction({
        gearId,

        quantity,

        startDate,

        endDate,
      });

      console.log("Rental Response:", rentalResult);

      if (!rentalResult.success) {
        toast.error(rentalResult.message || "Rental failed");

        return;
      }

      /*
        Backend response example:

        {
          data:{
            id:"64ad7179..."
          }
        }

      */

      const orderId = rentalResult.data.id;

      console.log("Order ID:", orderId);

      // 2. Create Stripe Payment

      const paymentResult = await createPaymentAction({
        orderId,
      });

      console.log("Payment Response:", paymentResult);

      if (!paymentResult.success) {
        toast.error(paymentResult.message || "Payment failed");

        return;
      }

      // 3. Stripe Checkout URL

      const checkoutUrl = paymentResult.data.payment.rawResponse.url;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        toast.error("Stripe url not found");
      }
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold">Rental Details</h2>

        <p className="text-sm text-gray-500">Select your rental period</p>
      </div>

      {/* Date */}

      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-sm font-medium">Start Date</label>

          <div
            className="
          flex items-center gap-3
          border rounded-xl px-4
          bg-gray-50
          "
          >
            <CalendarDays size={20} />

            <input
              type="date"
              min={today}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="
              w-full py-3
              bg-transparent
              outline-none
              "
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">End Date</label>

          <div
            className="
          flex items-center gap-3
          border rounded-xl px-4
          bg-gray-50
          "
          >
            <CalendarDays size={20} />

            <input
              type="date"
              min={startDate || today}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="
              w-full py-3
              bg-transparent
              outline-none
              "
            />
          </div>
        </div>
      </div>

      {/* Quantity */}

      <div
        className="
      flex justify-between items-center
      border rounded-xl p-4
      "
      >
        <div>
          <p className="font-medium">Quantity</p>

          <p className="text-sm text-gray-500">Available: {maxQuantity}</p>
        </div>

        <div
          className="
        flex items-center gap-4
        "
        >
          <button
            type="button"
            disabled={quantity === 1}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="
          border rounded-full p-2
          "
          >
            <Minus size={16} />
          </button>

          <span className="font-bold text-lg">{quantity}</span>

          <button
            type="button"
            disabled={quantity >= maxQuantity}
            onClick={() => setQuantity(quantity + 1)}
            className="
          border rounded-full p-2
          "
          >
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Confirm Button */}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={loading}
        className="
      w-full
      flex
      justify-center
      items-center
      gap-2
      bg-green-700
      text-white
      py-3
      rounded-xl
      font-medium
      disabled:opacity-50
      "
      >
        <ShoppingBag size={20} />

        {loading ? "Processing..." : "Confirm Rental"}
      </button>
    </div>
  );
}
