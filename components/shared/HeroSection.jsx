import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ================= Left Side - Image Composition ================= */}
          <div className="relative min-h-[480px]">
            {/* Main Image */}
            <div className="absolute left-8 top-0 z-10 w-[78%] overflow-hidden rounded-[2rem] shadow-2xl sm:left-14 sm:w-[72%]">
              <Image
                src="https://i.ibb.co.com/r207Wqph/erica-steeves-Pf-Qh55-R0-Zt-E-unsplash.jpg"
                alt="Outdoor adventure"
                width={1000}
                height={700}
                unoptimized
                className="h-[360px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[400px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-300">
                  Explore Outdoors
                </p>

                <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                  Adventure Starts Here
                </h3>
              </div>
            </div>

            {/* Secondary Image */}
            <div className="absolute bottom-0 right-0 z-20 w-[45%] overflow-hidden rounded-[1.5rem] border-8 border-muted/20 bg-background shadow-2xl sm:w-[42%]">
              <Image
                src="https://i.ibb.co.com/QvmDVb3q/elizabeth-dunne-LHd-JEQp-q0w-unsplash.jpg"
                alt="Sports equipment"
                width={600}
                height={700}
                unoptimized
                className="h-[230px] w-full object-cover sm:h-[270px]"
              />
            </div>

            {/* Decorative Circle */}
            <div className="absolute -bottom-8 left-20 h-24 w-24 rounded-full border-[10px] border-green-500/10" />
          </div>

          {/* ================= Right Side - Content ================= */}
          <div className="max-w-xl">
            {/* Small Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 dark:bg-green-950/30 dark:text-green-400">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Welcome to GearUp
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
              Gear Up For Your
              <br />
              Next{" "}
              <span className="text-green-600 dark:text-green-400">
                Adventure
              </span>
            </h1>

            {/* Green Line */}
            <div className="my-6 h-1 w-16 rounded-full bg-green-600" />

            {/* Description */}
            <p className="max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Rent quality sports and outdoor equipment from trusted providers.
              Whether you are hiking, camping, cycling, playing sports, or
              exploring the water, GearUp has the equipment you need.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/gear"
                className="group inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-700 hover:shadow-xl"
              >
                Explore Gear
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-green-300 hover:bg-green-50 dark:hover:border-green-800 dark:hover:bg-green-950/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
