import { ProviderOrder } from "@/lib/types";
import { getProviderOrders } from "@/server/provider.service";
import OrderCard from "./OrderCard";

export default async function ProviderOrdersPage() {
  const result = await getProviderOrders();

  const orders: ProviderOrder[] = result?.data?.orders || [];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Orders</h1>

        <p className="text-gray-500 mt-2">
          Manage customer rental orders for your gears.
        </p>
      </div>

      {orders.length === 0 ? (
        <div
          className="
            border
            rounded-xl
            p-10
            text-center
            text-gray-500
            "
        >
          No orders found
        </div>
      ) : (
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            "
        >
          {orders.map((order: ProviderOrder) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
