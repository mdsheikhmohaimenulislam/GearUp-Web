"use client";

import Link from "next/link";
import { Package, ShoppingCart, Clock, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CustomerDashboardProps } from "@/lib/types";

export default function CustomerDashboard({ user }: CustomerDashboardProps) {
  const cards = [
    {
      title: "My Rentals",
      value: "0",
      icon: Package,
      href: "/rents",
    },
    {
      title: "Active Orders",
      value: "0",
      icon: ShoppingCart,
      href: "/orders",
    },
    {
      title: "Pending Returns",
      value: "0",
      icon: Clock,
      href: "/returns",
    },
    {
      title: "Profile",
      value: "View",
      icon: User,
      href: "/customerDashboard/profile",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">Customer Dashboard</h1>

        <p className="text-muted-foreground mt-2">Welcome back, {user?.name}</p>
      </div>

      {/* Cards */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link key={card.title} href={card.href}>
              <div
                className="
                  rounded-xl
                  border
                  p-5
                  hover:shadow-md
                  transition
                "
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {card.title}
                    </p>

                    <h2 className="text-2xl font-bold mt-2">{card.value}</h2>
                  </div>

                  <Icon className="h-8 w-8 text-green-500" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Quick Actions */}

      <div className="rounded-xl border p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/gear">Browse Gear</Link>
          </Button>

          <Button variant="outline" asChild>
            <Link href="/rents">My Rentals</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
