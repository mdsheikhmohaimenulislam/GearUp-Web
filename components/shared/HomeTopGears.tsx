import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { getGears } from "@/server/gear.service";

type Gear = {
  id: string;
  title: string;
  brand?: string;
  pricePerDay: string | number;
  images?: string[];
};

export default async function HomeTopGears() {
  const response = await getGears();

  const gears: Gear[] = response?.data?.gears?.slice(0, 6) ?? [];

  return (
    <section className="py-20">
      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="animate-in fade-in slide-in-from-left-10 duration-700">
            <span className="mb-5 inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700 shadow-sm">
              Featured Collection
            </span>

            <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Top <span className="text-green-600">Rental Gears</span>
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Discover the most popular sports and outdoor equipment trusted by
              our community for every adventure.
            </p>
          </div>

          {/* View All */}
          <div className="animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
            <Link
              href="/gear"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition-all hover:border-green-200 hover:bg-green-50 hover:text-green-700"
            >
              View all gears
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Empty State */}
        {gears.length === 0 ? (
          <div className="rounded-3xl border border-dashed p-14 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Star className="h-8 w-8 text-green-700" />
            </div>

            <h3 className="text-xl font-semibold">No featured gears yet</h3>

            <p className="mt-2 text-muted-foreground">
              New rental gear will appear here soon.
            </p>
          </div>
        ) : (
          /* Gear Cards */
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {gears.map((gear, index) => (
              <Link
                key={gear.id}
                href={`/gear/${gear.id}`}
                className="group overflow-hidden rounded-3xl border bg-background shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={gear.images?.[0] || "/placeholder.jpg"}
                    alt={gear.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Popular Badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm backdrop-blur">
                      <Star className="h-3 w-3 fill-current" />
                      Popular
                    </span>
                  </div>

                  {/* Image Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      {gear.brand && (
                        <p className="text-xs font-medium uppercase tracking-wide text-white/80">
                          {gear.brand}
                        </p>
                      )}

                      <h3 className="mt-1 line-clamp-1 text-xl font-bold text-white">
                        {gear.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Price */}
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Rental price
                      </p>

                      <p className="mt-1 text-3xl font-bold text-green-700">
                        ৳{Number(gear.pricePerDay).toLocaleString()}
                        <span className="text-sm font-medium text-muted-foreground">
                          /day
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Instant booking
                    </span>

                    <span className="font-semibold text-green-700">
                      Available
                    </span>
                  </div>

                  {/* Details Button */}
                  <div className="mt-5">
                    <span
                      className="
                        inline-flex w-full
                        items-center justify-center gap-2
                        rounded-xl
                        bg-green-600
                        px-5 py-3
                        text-sm font-semibold
                        text-white
                        transition-all duration-300
                        group-hover:bg-green-700
                        group-hover:shadow-lg
                      "
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
