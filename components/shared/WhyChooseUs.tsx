
"use client";

import {
  Search,
  CalendarDays,
  PartyPopper,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Find Your Gear",
    description:
      "Explore a wide range of sports and outdoor equipment and find the perfect gear for your adventure.",
  },
  {
    number: "02",
    icon: CalendarDays,
    title: "Choose Your Dates",
    description:
      "Select your rental dates and duration based on your trip, schedule, and equipment availability.",
  },
  {
    number: "03",
    icon: PartyPopper,
    title: "Start Your Adventure",
    description:
      "Confirm your booking, collect your gear, and enjoy your adventure without worrying about expensive equipment.",
  },
];

export default function HowGearUpWorks() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

      <div className="container relative mx-auto px-5">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400">
            Simple & Easy
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
            How <span className="text-green-600 dark:text-green-400">GearUp</span>{" "}
            Works
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Renting your favorite sports and outdoor equipment is easier than
            ever. Just follow three simple steps and get ready for your next
            adventure.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14">
          {/* Connecting Line */}
          <div className="absolute left-[16%] right-[16%] top-14 hidden h-px bg-gradient-to-r from-transparent via-green-300 to-transparent lg:block dark:via-green-800" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative text-center"
                >
                  {/* Step Icon */}
                  <div className="relative mx-auto flex h-28 w-28 items-center justify-center">
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border border-green-200 bg-green-50 transition-all duration-300 group-hover:scale-110 group-hover:border-green-400 dark:border-green-800 dark:bg-green-950/30" />

                    {/* Inner Circle */}
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-green-700">
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Number */}
                    <span className="absolute -right-1 top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-gray-900 text-xs font-bold text-white dark:bg-green-500 dark:text-black">
                      {index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
                      Step {step.number}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="absolute -bottom-10 left-1/2 hidden -translate-x-1/2 lg:block">
                      <ArrowRight className="h-5 w-5 text-green-400/70" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-16 rounded-2xl border border-green-100 bg-green-50/70 px-6 py-7 text-center dark:border-green-900/50 dark:bg-green-950/20">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Ready to explore?
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Find the gear you need and make your next adventure memorable.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700">
            Start Exploring
            <ArrowRight className="h-4 w-4" />
          </div>
        </div> */}
      </div>
    </section>
  );
}

