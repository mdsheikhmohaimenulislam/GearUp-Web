"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  Package,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";
import LogoutButton from "./LogoutButton";

type Props = {
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
};

export default function DashboardSidebar({ role }: Props) {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const providerMenus = [
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
        {
      name: "Profile",
      href: "/providerDashboard/profile",
      icon: User,
    },
  ];

  const customerMenus = [
    {
      name: "Dashboard",
      href: "/customerDashboard",
      icon: LayoutDashboard,
    },
    {
      name: "My Rentals",
      href: "/customerDashboard/rents",
      icon: Package,
    },
    {
      name: "Orders",
      href: "/orders",
      icon: ShoppingCart,
    },
    {
      name: "Profile",
      href: "/customerDashboard/profile",
      icon: User,
    },
  ];

  const adminMenus = [
    {
      name: "Dashboard",
      href: "/adminDashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Users",
      href: "/adminDashboard/users",
      icon: User,
    },
    {
      name: "Orders",
      href: "/adminDashboard/orders",
      icon: ShoppingCart,
    },
            {
      name: "Profile",
      href: "/adminDashboard/profile",
      icon: User,
    },
  ];

  const menus =
    role === "PROVIDER"
      ? providerMenus
      : role === "CUSTOMER"
        ? customerMenus
        : adminMenus;

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        onClick={() => setOpen(true)}
        className="
        md:hidden
        fixed
        top-4
        left-4
        z-50
        p-2
        rounded-md
        bg-white
        border
        shadow
        "
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            bg-black/40
            z-40
            md:hidden
            "
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed
        md:static

        top-0
        left-0

        z-50

        w-64
        min-h-screen

        border-r

        p-5

        flex
        flex-col

        bg-white
        dark:bg-black

        transition-transform
        duration-300


        ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}

        `}
      >
        {/* Close Button */}

        <button
          onClick={() => setOpen(false)}
          className="
          md:hidden
          absolute
          right-4
          top-4
          "
        >
          <X size={22} />
        </button>

        <Link href="/" className=" text-3xl font-bold mb-8 block ">
          GearUp
        </Link>

        <nav
          className="
          space-y-2
          flex-1
          "
        >
          {menus.map((menu) => {
            const Icon = menu.icon;

            const active =
              menu.href === "/customerDashboard" ||
              menu.href === "/providerDashboard" ||
              menu.href === "/adminDashboard"
                ? pathname === menu.href
                : pathname.startsWith(menu.href);

            return (
              <Link
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-md

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

        <LogoutButton />
      </aside>
    </>
  );
}
