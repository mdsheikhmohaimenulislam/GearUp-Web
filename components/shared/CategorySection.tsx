
"use client";

import {
  Mountain,
  MapPin,
  Star,
  ArrowUpRight,
  Users,
  Clock3,
} from "lucide-react";
import Link from "next/link";

const adventures = [
  {
    title: "Weekend Camping",
    location: "Forest & Hills",
    duration: "2 Days",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Shuttlecock",
    location: "Mountain Trails",
    duration: "1 Day",
    rating: "4.8",
    image:
      "https://i.ibb.co.com/KjByDTTq/saif71-com-Sd-Qy-Rs-Swx4-Y-unsplash.jpg",
  },
];

export default function AdventureInspiration() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-background via-green-50/30 to-background dark:via-green-950/10" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
              <Mountain className="h-4 w-4" />
              Adventure Inspiration
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Gear Up for Your{" "}
              <span className="text-green-600 dark:text-green-400">
                Next Journey
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Whether you ore heading into the mountains, exploring a forest,
              or planning a weekend escape, find the equipment that makes
              every adventure better.
            </p>
          </div>

<Link
  href="/gear"
  className="group inline-flex w-fit items-center gap-2 rounded-xl border border-green-200 bg-background px-5 py-3 text-sm font-semibold text-green-700 shadow-sm transition-all duration-300 hover:border-green-400 hover:bg-green-50 hover:shadow-md dark:border-green-800 dark:text-green-400 dark:hover:bg-green-950/30"
>
  Explore Gear
  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
</Link>
        </div>

        {/* Featured Experience */}
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Large Featured Image */}
          <div className="group relative min-h-[420px] overflow-hidden rounded-[2rem]">
            <img
              src={adventures[0].image}
              alt={adventures[0].title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Top Badge */}
            <div className="absolute left-5 top-5">
              <span className="rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg backdrop-blur-md">
                Featured Experience
              </span>
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
              <div className="flex items-center gap-2 text-sm text-green-300">
                <MapPin className="h-4 w-4" />
                {adventures[0].location}
              </div>

              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                {adventures[0].title}
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-gray-200">
                Everything you need for a comfortable outdoor escape,
                available when you need it.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur-md">
                  <Clock3 className="h-4 w-4 text-green-300" />
                  {adventures[0].duration}
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs backdrop-blur-md">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  {adventures[0].rating}
                </div>
              </div>
            </div>
          </div>

          {/* Side Content */}
          <div className="flex flex-col gap-6">
            {/* Secondary Adventure */}
            <div className="group relative min-h-[260px] overflow-hidden rounded-[2rem]">
              <img
                src={adventures[1].image}
                alt={adventures[1].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 text-xs text-green-300">
                  <MapPin className="h-4 w-4" />
                  {adventures[1].location}
                </div>

                <h3 className="mt-1 text-xl font-bold">
                  {adventures[1].title}
                </h3>

                <div className="mt-3 flex items-center gap-3 text-xs text-gray-200">
                  <span>{adventures[1].duration}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                    {adventures[1].rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Community Panel */}
            <div className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[2rem] border border-green-100 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/20">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-300/20 blur-3xl" />

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white shadow-md">
                  <Users className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">
                  Adventure Starts Here
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Join other outdoor lovers and discover gear that helps turn
                  your plans into memorable experiences.
                </p>
              </div>

              {/* <div className="relative mt-6 flex items-center justify-between border-t border-green-200 pt-4 dark:border-green-900">
                <div>
                  <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                    10K+
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Adventure Lovers
                  </p>
                </div>

                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-white transition-all duration-300 hover:scale-110 hover:bg-green-700"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-lg font-medium leading-8 text-gray-700 dark:text-gray-300 sm:text-xl">
            “The best adventures are the ones where you spend less time
            worrying about equipment and more time enjoying the journey.”
          </p>

          <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-green-600" />
        </div>
      </div>
    </section>
  );
}

