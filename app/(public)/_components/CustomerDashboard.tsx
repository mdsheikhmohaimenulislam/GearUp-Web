"use client";

import { Package, ShoppingCart, Clock, RotateCcw } from "lucide-react";

type Props = {
  user: {
    name: string;
    email: string;
  };

  stats: {
    totalRentals: number;
    activeOrders: number;
    pendingReturns: number;
    returnedOrders: number;
  };
};

export default function CustomerDashboard({ user, stats }: Props) {
  const cards = [
    {
      title: "My Rentals",
      value: stats.totalRentals,
      icon: Package,
    },

    {
      title: "Active Orders",
      value: stats.activeOrders,
      icon: ShoppingCart,
    },

    {
      title: "Pending Returns",
      value: stats.pendingReturns,
      icon: Clock,
    },
    {
      title: "Returned",
      value: stats.returnedOrders,
      icon: RotateCcw,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold">Customer Dashboard</h1>

        <p className="text-gray-500 mt-2">Welcome back, {user.name}</p>
      </div>

      <div
        className="
        grid
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
        "
      >
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="
                border
                rounded-xl
                p-6
                hover:shadow-lg
                transition
                bg-white
                "
            >
              <div
                className="
                  flex
                  justify-between
                  items-center
                  "
              >
                <div>
                  <p
                    className="
                      text-sm
                      text-gray-500
                      "
                  >
                    {card.title}
                  </p>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      mt-2
                      dark:text-black
                      "
                  >
                    {card.value}
                  </h2>
                </div>

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-green-50
                    flex
                    items-center
                    justify-center
                    "
                >
                  <Icon className="text-green-600" size={26} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
