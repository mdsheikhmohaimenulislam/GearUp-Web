import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Package, ShoppingCart, DollarSign, Star } from "lucide-react";

import { getMyGears, getProviderOrders } from "@/server/provider.service";
import { ProviderDashboardOrder } from "@/lib/types";

export default async function ProviderDashboardPage() {
  const gearsResult = await getMyGears();

  const ordersResult = await getProviderOrders();

  const gears = gearsResult?.data || [];

  const orders: ProviderDashboardOrder[] = ordersResult?.data?.orders || [];

  const totalGear = gears.length;

  const totalRentals = orders.length;

  const totalRevenue = orders.reduce(
    (sum: number, order) => sum + Number(order.totalPrice || 0),
    0,
  );

  const stats = [
    {
      title: "Total Gear",
      value: totalGear,
      icon: Package,
    },

    {
      title: "Total Rentals",
      value: totalRentals,
      icon: ShoppingCart,
    },

    {
      title: "Total Revenue",
      value: `৳${totalRevenue}`,
      icon: DollarSign,
    },

    {
      title: "Average Rating",
      value: "4.8",
      icon: Star,
    },
  ];

  return (
    <div className="space-y-8 p-6">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Provider Dashboard</h1>

        <p className="text-muted-foreground mt-2">
          Manage your gear, rentals, and earnings.
        </p>
      </div>

      {/* Stats */}

      <div
        className="
        grid
        gap-4
        md:grid-cols-2
        lg:grid-cols-4
        "
      >
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardHeader
                className="
                  flex
                  flex-row
                  items-center
                  justify-between
                  pb-2
                  "
              >
                <CardTitle
                  className="
                    text-sm
                    font-medium
                    "
                >
                  {stat.title}
                </CardTitle>

                <Icon
                  className="
                    h-5
                    w-5
                    text-muted-foreground
                    "
                />
              </CardHeader>

              <CardContent>
                <div
                  className="
                    text-3xl
                    font-bold
                    "
                >
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div
        className="
        grid
        gap-6
        lg:grid-cols-2
        "
      >
        {/* Recent Orders */}

        <Card>
          <CardHeader>
            <CardTitle>Recent Rentals</CardTitle>
          </CardHeader>

          <CardContent
            className="
            space-y-4
            "
          >
            {orders.length === 0 ? (
              <p className="text-muted-foreground">No rentals found</p>
            ) : (
              orders.slice(0, 5).map((order: ProviderDashboardOrder) => (
                <div
                  key={order.id}
                  className="
                  flex
                  items-center
                  justify-between
                  border-b
                  pb-3
                  "
                >
                  <div>
                    <p className="font-medium">{order.gear?.title}</p>

                    <p
                      className="
                      text-sm
                      text-muted-foreground
                      "
                    >
                      Rented by {order.customer?.name}
                    </p>
                  </div>

                  <span
                    className="
                    text-sm
                    font-medium
                    text-green-600
                    "
                  >
                    {order.status}
                  </span>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>

          <CardContent
            className="
            grid
            gap-3
            "
          >
            <Link
              href="/providerDashboard/add-gear"
              className="
              rounded-lg
              border
              p-4
              hover:bg-muted
              transition
              "
            >
              <p className="font-medium">Add New Gear</p>

              <p className="text-sm text-muted-foreground">
                Create a new gear listing
              </p>
            </Link>

            <Link
              href="/providerDashboard/orders"
              className="
              rounded-lg
              border
              p-4
              hover:bg-muted
              transition
              "
            >
              <p className="font-medium">Manage Orders</p>

              <p className="text-sm text-muted-foreground">
                View and update rental orders
              </p>
            </Link>

            <Link
              href="/providerDashboard/gears"
              className="
              rounded-lg
              border
              p-4
              hover:bg-muted
              transition
              "
            >
              <p className="font-medium">Manage Gears</p>

              <p className="text-sm text-muted-foreground">
                Update your inventory
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
