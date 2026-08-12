"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  MapPin,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Find Your Destination",
    description:
      "Choose the adventure, activity, or outdoor experience you have been planning.",
  },
  {
    number: "02",
    icon: PackageCheck,
    title: "Choose Your Gear",
    description:
      "Explore quality equipment from trusted providers and find what fits your trip.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Book & Go",
    description:
      "Select your rental dates, confirm your booking, and get ready to explore.",
  },
];

export default function HowGearUpWorks() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* ================= Background ================= */}
      <div
        className="
          absolute inset-0 -z-20
          bg-gradient-to-br
          from-green-50
          via-white
          to-emerald-50
          dark:from-[#eef3ef]
          dark:via-[#151b17]
          dark:to-[#020403]
        "
      />

      {/* Left Glow */}
      <div
        className="
          pointer-events-none absolute
          -left-48 top-20 -z-10
          h-[500px] w-[500px]
          rounded-full
          bg-green-200/40
          blur-3xl
          dark:bg-green-100/10
        "
      />

      {/* Right Black Area */}
      <div
        className="
          pointer-events-none absolute
          -right-60 -top-40 -z-10
          h-[650px] w-[650px]
          rounded-full
          bg-emerald-200/30
          blur-3xl
          dark:bg-black/90
        "
      />

      <div className="container mx-auto px-5">
        {/* ================= Main Feature ================= */}
        <div
          className="
            relative overflow-hidden
            rounded-[2.5rem]
            border border-green-100
            bg-white/70
            shadow-2xl
            backdrop-blur-xl
            dark:border-white/10
            dark:bg-black/40
          "
        >
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            {/* ================= Image ================= */}
            <div className="relative min-h-[420px] overflow-hidden lg:min-h-[580px]">
              <Image
                src="/assets/adventure-2.jpg"
                alt="Outdoor adventure"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                "
              />

              {/* Top Label */}
              <div
                className="
                  absolute left-6 top-6
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/20
                  bg-black/40
                  px-4 py-2
                  text-sm font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                <Sparkles className="h-4 w-4 text-green-400" />
                Adventure Made Simple
              </div>

              {/* Image Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-10">
                <p className="text-sm font-medium text-green-400">
                  YOUR NEXT EXPERIENCE
                </p>

                <h3 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                  Go Further.
                  <br />
                  Experience More.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
                  Access the gear you need without filling your home with
                  equipment you only use occasionally.
                </p>
              </div>
            </div>

            {/* ================= Right Content ================= */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
              <div
                className="
                  inline-flex w-fit
                  items-center gap-2
                  rounded-full
                  border border-green-200
                  bg-green-50
                  px-4 py-2
                  text-sm font-semibold
                  text-green-700
                  dark:border-green-800
                  dark:bg-green-950/30
                  dark:text-green-400
                "
              >
                <Sparkles className="h-4 w-4" />
                How GearUp Works
              </div>

              <h2
                className="
                  mt-6
                  max-w-xl
                  text-4xl font-bold
                  leading-tight
                  tracking-tight
                  text-gray-900
                  sm:text-5xl
                  dark:text-white
                "
              >
                From Planning
                <span className="block text-green-600 dark:text-green-400">
                  To Exploring.
                </span>
              </h2>

              <p
                className="
                  mt-5 max-w-xl
                  text-base leading-7
                  text-gray-600
                  dark:text-gray-300
                "
              >
                Renting outdoor equipment should be simple. GearUp connects you
                with the right equipment so you can spend less time worrying
                about gear and more time enjoying your journey.
              </p>

              {/* Steps */}
              <div className="mt-9 space-y-6">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div key={step.number} className="relative flex gap-4">
                      {/* Connector */}
                      {index !== steps.length - 1 && (
                        <div
                          className="
                            absolute
                            left-[21px]
                            top-12
                            h-12
                            w-px
                            bg-green-200
                            dark:bg-green-900
                          "
                        />
                      )}

                      {/* Number / Icon */}
                      <div
                        className="
                          relative z-10
                          flex h-11 w-11
                          shrink-0
                          items-center justify-center
                          rounded-xl
                          bg-green-600
                          text-white
                          shadow-md
                        "
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="
                              text-xs font-bold
                              tracking-wider
                              text-green-600
                              dark:text-green-400
                            "
                          >
                            {step.number}
                          </span>

                          <h3
                            className="
                              font-bold
                              text-gray-900
                              dark:text-white
                            "
                          >
                            {step.title}
                          </h3>
                        </div>

                        <p
                          className="
                            mt-1
                            max-w-md
                            text-sm
                            leading-6
                            text-gray-500
                            dark:text-gray-400
                          "
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="mt-9">
                <Link
                  href="/gear"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-green-700
                    px-6 py-3.5
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:bg-green-800
                    hover:shadow-xl
                  "
                >
                  Explore Available Gear
                  <ArrowUpRight
                    className="
                      h-4 w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Bottom Statement ================= */}
        {/* <div className="mt-8">
          <div
            className="
              flex flex-col
              gap-5
              rounded-3xl
              border border-green-100
              bg-white/60
              px-6 py-6
              shadow-sm
              backdrop-blur-md
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-8
              dark:border-white/10
              dark:bg-black/40
            "
          >
            <div>
              <p
                className="
                  text-sm font-semibold
                  text-green-600
                  dark:text-green-400
                "
              >
                READY WHEN YOU ARE
              </p>

              <h3
                className="
                  mt-1
                  text-xl font-bold
                  text-gray-900
                  dark:text-white
                "
              >
                Your next adventure is closer than you think.
              </h3>
            </div>

            <Link
              href="/gear"
              className="
                group
                inline-flex
                shrink-0
                items-center
                gap-2
                text-sm
                font-semibold
                text-green-700
                transition-colors
                hover:text-green-800
                dark:text-green-400
                dark:hover:text-green-300
              "
            >
              Browse Gear
              <ArrowUpRight
                className="
                  h-4 w-4
                  transition-transform
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
