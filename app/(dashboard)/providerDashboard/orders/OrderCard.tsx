import Image from "next/image";
import UpdateOrderButton from "./UpdateOrderButton";
import { PackageCheck } from "lucide-react";
import { ProviderOrder } from "@/lib/types";

export default function OrderCard({ order }: { order: ProviderOrder }) {



  return (
    <div
      className="
      border
      rounded-xl
      overflow-hidden
      shadow-sm
      hover:shadow-lg
      transition
      bg-white
      dark:bg-black
      "
    >
      {/* Image */}

      <div
        className="
        relative
        h-48
        w-full
        bg-gray-100
        "
      >
        {order.gear?.images?.[0] && (
          <Image
            src={order.gear.images[0]}
            alt={order.gear.title}
            fill
            sizes="(max-width:768px)100vw,33vw"
            className="object-cover"
          />
        )}
      </div>

      {/* Content */}

      <div className="p-5 space-y-4">
        <div
          className="
          flex
          justify-between
          items-start
          "
        >
          <h2 className="text-xl font-bold">{order.gear?.title}</h2>

          <span
            className="
            text-xs
            px-3
            py-1
            rounded-full
            bg-green-100
            text-green-700
            "
          >
            {order.status}
          </span>
        </div>

        {/* Customer */}

        <div className="text-sm space-y-1">
          <p>
            <span className="font-medium">Customer:</span>{" "}
            {order.customer?.name}
          </p>

          <p>
            <span className="font-medium">Email:</span> {order.customer?.email}
          </p>
        </div>

        {/* Order Info */}

        <div
          className="
          border-t
          pt-4
          space-y-2
          text-sm
          "
        >
          <p className="flex items-center gap-2">
            <PackageCheck size={18} />
            Quantity:
            {order.quantity}
          </p>

          <p>Price: ৳{order.totalPrice ?? 0}</p>
        </div>

        {/* Action */}

        {order.status === "PLACED" && (
          <UpdateOrderButton
            id={order.id}
            status="CONFIRMED"
            text="Confirm Order"
          />
        )}

        {order.status === "CONFIRMED" && (
          <UpdateOrderButton
            id={order.id}
            status="PICKED_UP"
            text="Mark as Picked Up"
          />
        )}

        {order.status === "PICKED_UP" && (
          <UpdateOrderButton
            id={order.id}
            status="RETURNED"
            text="Mark as Returned"
          />
        )}
      </div>
    </div>
  );
}
