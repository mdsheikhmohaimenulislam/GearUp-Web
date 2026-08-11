"use client";

import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Headphones,
  RefreshCcw,
  Zap,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Providers",
    description:
      "Rent from verified providers offering quality sports and outdoor equipment you can rely on.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Rental Prices",
    description:
      "Enjoy affordable daily rental rates without compromising on performance or quality.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description:
      "Join thousands of adventurers and gear owners connected through one trusted platform.",
  },
  {
    icon: Zap,
    title: "Easy Booking",
    description:
      "Search gear, choose dates, and confirm your booking in just a few simple steps.",
  },
  {
    icon: RefreshCcw,
    title: "Flexible Rentals",
    description:
      "Select the rental duration that matches your trip and return the gear with ease.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Get fast and friendly support whenever you need help with your rental experience.",
  },
];

const stats = [
  {
    value: "1K+",
    label: "Gear Listings",
  },
  {
    value: "500+",
    label: "Providers",
  },
  {
    value: "50+",
    label: "Locations",
  },
  {
    value: "99%",
    label: "Happy Renters",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-green-50 via-background to-background dark:from-green-950/20 dark:via-background dark:to-background" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-green-300/20 blur-3xl dark:bg-green-700/10" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-700/10" />

      <div className="container mx-auto px-5">
        {/* ================= TOP CONTENT ================= */}


        {/* ================= FEATURE HEADER ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-500">
            Why Rent With Us
          </span>

          <h3 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Designed Around Your Adventure
          </h3>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            From discovering the right equipment to completing your rental,
            GearUp keeps the entire experience smooth and hassle-free.
          </p>
        </div>

        {/* ================= FEATURES ================= */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl dark:hover:border-green-900"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Hover Background */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-green-950/30" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white dark:bg-green-950/50 dark:text-green-400 dark:group-hover:bg-green-600 dark:group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Accent */}
                  <div className="mt-5 h-1 w-7 rounded-full bg-green-600 transition-all duration-500 group-hover:w-14" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}