import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";

const adventures = [
  {
    title: "Sports Balls in Storage",
    category: "Sports & Fitness",
    description:
      "A vibrant collection of colorful playground balls, tennis balls, and soccer balls resting inside a wheeled storage cart or bin.",
    image:
      "https://i.ibb.co.com/QvmDVb3q/elizabeth-dunne-LHd-JEQp-q0w-unsplash.jpg",
  },
  {
    title: "Tennis Racket and Ball",
    category: "Sports & Fitness",
    description:
      "A yellow tennis ball resting on the strings of a black tennis racket, laid flat on a blue outdoor hardcourt surface.",
    image: "https://i.ibb.co.com/rR1DpH95/lan-gao-Yx648l-GDX28-unsplash.jpg",
  },
  {
    title: "Outdoor Coffee Brewing",
    category: "Camping & Outdoors",
    description:
      "A classic blue enamel coffee pot heating up on top of a portable orange camp stove in a grassy outdoor setting.",
    image: "https://i.ibb.co.com/rShKw6G/kampbros-ENE25tz-YDl4-unsplash.jpg",
  },
  {
    title: "Campsite Cooking Setup",
    category: "Camping & Outdoors",
    description:
      "A pan and a pot cooking on small backpacking stoves placed inside an outdoor park grill, with a camping tent visible in the background.",
    image:
      "https://i.ibb.co.com/LDVsR1Kr/lydia-venjohn-QFx-SP4-DFz-Oc-unsplash.jpg",
  },
];

export default function UpcomingAdventures() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-20">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-green-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="container relative mx-auto px-5">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700 dark:border-green-800 dark:bg-green-950/30 dark:text-green-400">
              <CalendarDays className="h-4 w-4" />
              Upcoming Adventures
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
              Get Ready for Your{" "}
              <span className="text-green-600 dark:text-green-400">
                Next Adventure
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Discover exciting outdoor experiences and find the perfect gear to
              make your next adventure unforgettable.
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

        {/* Adventure Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {adventures.map((adventure) => (
            <div
              key={adventure.title}
              className="group overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-green-300 hover:shadow-xl dark:hover:border-green-800"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={adventure.image}
                  alt={adventure.title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm backdrop-blur">
                    {adventure.category}
                  </span>
                </div>

                {/* Image Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">
                    {adventure.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm leading-6 text-muted-foreground">
                  {adventure.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
