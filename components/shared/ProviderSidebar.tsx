"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  Package,
  ShoppingCart,
} from "lucide-react";

export default function ProviderSidebar() {
  const pathname = usePathname();

  const menus = [
    {
      name: "Dashboard",
      href: "/providerDashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Add Gear",
      href: "/providerDashboard/add-gear",
      icon: PlusCircle,
    },
    {
      name: "My Gears",
      href: "/providerDashboard/gears",
      icon: Package,
    },
    {
      name: "Orders",
      href: "/providerDashboard/orders",
      icon: ShoppingCart,
    },
  ];

  return (
    <aside
      className="
      w-64
      min-h-screen

      border-r
      p-5

      bg-white
      dark:bg-black
      "
    >
      <Link
        href="/"
        className="
        text-xl
        font-bold
        mb-8
        block
        "
      >
        Provider Dashboard
      </Link>

      <nav className="space-y-2">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            pathname === menu.href ||
            (menu.href !== "/providerDashboard" &&
              pathname.startsWith(menu.href + "/"));

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`
                flex
                items-center
                gap-3

                px-4
                py-3

                rounded-md

                transition


                ${
                  active
                    ? "bg-green-700 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }

                `}
            >
              <Icon size={20} />

              <span>{menu.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
