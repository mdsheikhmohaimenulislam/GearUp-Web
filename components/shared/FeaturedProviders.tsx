"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
const providerImages = [
  { src: "/assets/provider-1.jpg", alt: "Camping gear" },
  { src: "/assets/provider-2.jpg", alt: "Outdoor adventure gear" },
  { src: "/assets/provider-3.jpg", alt: "Sports equipment" },
];
export default function FeaturedProviders() {
  return (
    <section className="container mx-auto overflow-hidden px-5 py-20">
      {" "}
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {" "}
        {/* ================= Left Content ================= */}{" "}
        <div className="animate-[fadeInUp_0.8s_ease-out]">
          {" "}
          {/* Label */}{" "}
          <div className="mb-5 inline-flex animate-[fadeInUp_0.6s_ease-out] items-center gap-2 rounded-full border bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            {" "}
            <ShieldCheck className="h-4 w-4" /> Trusted Gear Providers{" "}
          </div>{" "}
          {/* Heading */}{" "}
          <h2 className="max-w-xl animate-[fadeInUp_0.8s_ease-out] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {" "}
            Quality Gear From{" "}
            <span className="block text-green-600">
              {" "}
              Trusted Providers{" "}
            </span>{" "}
          </h2>{" "}
          {/* Description */}{" "}
          <p className="mt-6 max-w-xl animate-[fadeInUp_1s_ease-out] text-base leading-7 text-muted-foreground sm:text-lg">
            {" "}
            GearUp connects you with reliable providers offering quality sports
            and outdoor equipment. Find the right gear for your next adventure
            without the hassle of buying expensive equipment.{" "}
          </p>{" "}
          <p className="mt-4 max-w-xl animate-[fadeInUp_1.1s_ease-out] text-base leading-7 text-muted-foreground">
            {" "}
            From camping and cycling to hiking and water sports, discover
            equipment that fits your adventure and rental needs.{" "}
          </p>{" "}
          {/* Features */}{" "}
          <div className="mt-7 space-y-3">
            {" "}
            <div className="group flex animate-[fadeInLeft_0.8s_ease-out] items-center gap-3">
              {" "}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                {" "}
                <ShieldCheck className="h-4 w-4" />{" "}
              </div>{" "}
              <span className="text-sm font-medium">
                {" "}
                Verified and trusted providers{" "}
              </span>{" "}
            </div>{" "}
            <div className="group flex animate-[fadeInLeft_1s_ease-out] items-center gap-3">
              {" "}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                {" "}
                <Sparkles className="h-4 w-4" />{" "}
              </div>{" "}
              <span className="text-sm font-medium">
                {" "}
                Quality equipment for every adventure{" "}
              </span>{" "}
            </div>{" "}
            <div className="group flex animate-[fadeInLeft_1.2s_ease-out] items-center gap-3">
              {" "}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
                {" "}
                <MapPin className="h-4 w-4" />{" "}
              </div>{" "}
              <span className="text-sm font-medium">
                {" "}
                Convenient rental options across Bangladesh{" "}
              </span>{" "}
            </div>{" "}
          </div>{" "}
          {/* CTA */}{" "}
          <Link
            href="/gear"
            className="group mt-8 inline-flex animate-[fadeInUp_1.3s_ease-out] items-center gap-2 rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg"
          >
            {" "}
            Explore Gear{" "}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />{" "}
          </Link>{" "}
        </div>{" "}
        {/* ================= Right Image Gallery ================= */}{" "}
        <div className="relative min-h-[500px] animate-[fadeInRight_1s_ease-out]">
          {" "}
          {/* Main Image */}{" "}
          <div className="group absolute right-0 top-0 h-[390px] w-[82%] overflow-hidden rounded-3xl shadow-xl">
            {" "}
            <Image
              src="/assets/provider-main.jpg"
              alt="Outdoor adventure gear"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 45vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />{" "}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />{" "}
          </div>{" "}
          {/* Small Image 1 */}{" "}
          <div className="group absolute bottom-12 left-0 h-36 w-36 animate-[float_5s_ease-in-out_infinite] overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-44 sm:w-44">
            {" "}
            <Image
              src={providerImages[0].src}
              alt={providerImages[0].alt}
              fill
              sizes="180px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />{" "}
          </div>{" "}
          {/* Small Image 2 */}{" "}
          <div className="group absolute bottom-0 left-[40%] h-32 w-32 animate-[float_6s_ease-in-out_infinite_0.5s] overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-40 sm:w-40">
            {" "}
            <Image
              src={providerImages[1].src}
              alt={providerImages[1].alt}
              fill
              sizes="160px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />{" "}
          </div>{" "}
          {/* Small Image 3 */}{" "}
          <div className="group absolute right-0 top-[52%] h-28 w-28 animate-[float_5.5s_ease-in-out_infinite_1s] overflow-hidden rounded-2xl border-4 border-background shadow-xl sm:h-36 sm:w-36">
            {" "}
            <Image
              src={providerImages[2].src}
              alt={providerImages[2].alt}
              fill
              sizes="150px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />{" "}
          </div>{" "}
          {/* Floating Badge */}{" "}
          <div className="absolute left-5 top-8 animate-[float_4s_ease-in-out_infinite] rounded-2xl border bg-background/95 px-5 py-4 shadow-lg backdrop-blur">
            {" "}
            <div className="flex items-center gap-3">
              {" "}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700 transition-transform duration-300 hover:scale-110">
                {" "}
                <ShieldCheck className="h-5 w-5" />{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-sm font-bold"> Trusted Providers </p>{" "}
                <p className="text-xs text-muted-foreground">
                  {" "}
                  Quality gear, reliable service{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      {/* Custom Animations */}{" "}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-25px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>{" "}
    </section>
  );
}
