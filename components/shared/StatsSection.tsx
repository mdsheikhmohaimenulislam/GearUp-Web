"use client";

import {
  Building2,
  ShieldCheck,
  Star,
  Sparkles,
} from "lucide-react";

const partners = [
  {
    name: "GearUp Marketplace",
    description: "Sports & Outdoor Gear",
    icon: Building2,
  },
  {
    name: "Verified Providers",
    description: "Trusted Gear Owners",
    icon: ShieldCheck,
  },
  {
    name: "Quality Equipment",
    description: "Reliable Rental Gear",
    icon: Star,
  },
  {
    name: "Outdoor Adventures",
    description: "Explore Without Limits",
    icon: Sparkles,
  },
  {
    name: "Easy Rentals",
    description: "Simple Booking Process",
    icon: Building2,
  },
  {
    name: "Secure Experience",
    description: "Safe & Reliable",
    icon: ShieldCheck,
  },
  {
    name: "Happy Renters",
    description: "Growing Community",
    icon: Star,
  },
  {
    name: "GearUp Community",
    description: "Built for Adventure",
    icon: Sparkles,
  },
];

export default function StatsSection() {
  return (
    <section className="overflow-hidden border-y bg-background py-16">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-green-600 dark:text-green-400">
            Why GearUp
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Built for Every{" "}
            <span className="text-green-600 dark:text-green-400">
              Adventure
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            GearUp brings trusted providers, quality equipment, and adventure
            lovers together in one simple and reliable rental platform.
          </p>
        </div>

        {/* Moving Cards */}
        <div className="relative mt-12 overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-36" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-36" />

          {/* Track */}
          <div className="partner-track flex w-max">
            {[...partners, ...partners].map((partner, index) => {
              const Icon = partner.icon;

              return (
                <div
                  key={`${partner.name}-${index}`}
                  className="partner-card mx-2.5 flex h-[78px] min-w-[220px] items-center gap-3 rounded-2xl border bg-background px-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50/50 hover:shadow-lg dark:hover:border-green-800 dark:hover:bg-green-950/20"
                >
                  {/* Icon */}
                  <div className="partner-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-all duration-300 dark:bg-green-950/30 dark:text-green-400">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Content */}
                  <div>
                    <p className="whitespace-nowrap text-sm font-bold text-gray-800 dark:text-gray-200">
                      {partner.name}
                    </p>

                    <p className="mt-0.5 whitespace-nowrap text-[11px] text-muted-foreground">
                      {partner.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Message */}
        <div className="mt-10 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />

          <span>
            Trusted equipment, verified providers, and better adventures with
            GearUp.
          </span>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx global>{`
        .partner-track {
          animation: partner-scroll 30s linear infinite;
          will-change: transform;
        }

        .partner-track:hover {
          animation-play-state: paused;
        }

        .partner-card:hover .partner-icon {
          transform: scale(1.08) rotate(-6deg);
          background-color: rgb(22 163 74);
          color: white;
        }

        @keyframes partner-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .partner-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}