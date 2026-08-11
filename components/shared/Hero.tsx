"use client";

import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { ArrowRight, Play, Star, ShieldCheck } from "lucide-react";

import coverImage from "@/public/assets/cover.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-green-100/50 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[320px] w-[320px] rounded-full bg-green-50 blur-3xl" />
      </div>

      <div className="container mx-auto grid min-h-[calc(100vh-64px)] items-center gap-14 px-5 lg:grid-cols-2">
        {/* Left Content */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-10 duration-700">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 shadow-sm backdrop-blur">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-foreground">
              Rent Sports & Outdoor Gear Instantly
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Gear Up for
              <span className="block text-green-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                Every Adventure
              </span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Explore and rent premium sports equipment, camping gear, and outdoor essentials without buying expensive equipment. Get the gear you need, exactly when you need it.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <Button asChild size="lg" className="h-12 rounded-xl px-6 shadow-lg shadow-green-600/20 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-green-600/30">
              <Link href="/gear">
                Explore Gear
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-xl px-6 backdrop-blur transition-all hover:scale-[1.02] hover:bg-background/80"
            >
              <Link href="/about">
                <Play className="mr-2 h-4 w-4" />
                Learn More
              </Link>
            </Button>
          </div>

          {/* Trust row */}
          <div className="flex items-center gap-4 text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <div className="flex -space-x-2">
              <div className="h-9 w-9 rounded-full border-2 border-background bg-green-100" />
              <div className="h-9 w-9 rounded-full border-2 border-background bg-green-200" />
              <div className="h-9 w-9 rounded-full border-2 border-background bg-green-300" />
            </div>
            <div>
              <p className="font-semibold">Trusted by 1,000+ renters</p>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                4.9 average rating
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
            {[
              { end: 500, suffix: "+", label: "Gear Items" },
              { end: 50, suffix: "+", label: "Providers" },
              { end: 24, suffix: "/7", label: "Support" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-2xl font-bold text-green-600">
                  <CountUp
                    end={stat.end}
                    duration={2.5}
                    suffix={stat.suffix}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative animate-in fade-in slide-in-from-right-10 duration-700 delay-300">
          <div className="relative mx-auto aspect-square max-w-[560px]">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-green-200/50 via-transparent to-green-100/40 blur-2xl" />

            {/* Main image */}
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border bg-muted shadow-2xl">
              <Image
                src={coverImage}
                alt="Outdoor adventure gear"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            </div>

            {/* Floating availability card */}
            <div className="absolute -left-4 bottom-8 rounded-2xl border bg-background/90 p-4 shadow-xl backdrop-blur animate-in fade-in slide-in-from-left-6 duration-700 delay-700">
              <p className="text-sm font-semibold text-green-700">Available Today</p>
              <h3 className="text-xl font-bold">100+ Gear Ready</h3>
              <p className="text-sm text-muted-foreground mt-1">Instant booking available</p>
            </div>

            {/* Floating rating card */}
            <div className="absolute -right-4 top-8 rounded-2xl border bg-background/90 p-4 shadow-xl backdrop-blur animate-in fade-in slide-in-from-right-6 duration-700 delay-1000">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Community Rating</p>
                  <p className="font-bold">4.9 / 5.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}