"use client";

import Link from "next/link";
import {
  Package,
  ShoppingCart,
  Clock,
  User,
} from "lucide-react";


type Props = {
  user: {
    name: string;
    email: string;
  };
};


export default function CustomerDashboard({
  user,
}: Props) {


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
      href: "/profile",
    },
  ];


  return (

    <div className="space-y-8">


<div className="text-center sm:text-left">
  <h1 className="text-2xl font-bold">
    Customer Dashboard
  </h1>

  <p className="text-gray-500 mt-2">
    Welcome back, {user.name}
  </p>
</div>



      <div className="
      grid
      sm:grid-cols-2
      lg:grid-cols-4
      gap-5
      ">

      {
        cards.map((card)=>{

          const Icon = card.icon;


          return (

            <Link
            key={card.title}
            href={card.href}
            >

              <div className="
              border
              rounded-xl
              p-5
              hover:shadow-lg
              transition
              ">

                <div className="
                flex
                justify-between
                items-center
                ">

                  <div>

                    <p className="text-sm text-gray-500">
                      {card.title}
                    </p>

                    <h2 className="text-2xl font-bold mt-2">
                      {card.value}
                    </h2>

                  </div>


                  <Icon
                  className="text-green-600"
                  size={32}
                  />

                </div>

              </div>

            </Link>

          );

        })
      }

      </div>


    </div>

  );
}