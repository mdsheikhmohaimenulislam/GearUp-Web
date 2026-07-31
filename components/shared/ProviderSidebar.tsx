"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  Package,
  ShoppingCart,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";


export default function ProviderSidebar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);


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
    <>


      {/* Mobile Button */}

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
        border
        text-green-700
        bg-white
        "
      >
        <Menu size={22}/>
      </button>




      {/* Overlay */}

      {
        open && (

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

        )
      }




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
        bg-white
        dark:bg-black

        transition-transform
        duration-300

        ${
          open
          ? "translate-x-0"
          : "-translate-x-full md:translate-x-0"
        }
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
          <X size={22}/>
        </button>




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

          {
            menus.map((menu)=>{


              const Icon = menu.icon;

              const active =
                pathname === menu.href;



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
                  py-2
                  rounded-md

                  transition


                  ${
                    active
                    ? "bg-green-700 text-white"
                    : "dark:hover:bg-black hover:bg-gray-300 "
                  }

                  `}
                >

                  <Icon size={20}/>

                  <span>
                    {menu.name}
                  </span>


                </Link>

              );


            })
          }


        </nav>


      </aside>


    </>
  );
}