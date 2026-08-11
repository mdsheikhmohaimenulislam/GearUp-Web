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
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="animate-in fade-in slide-in-from-left-10 duration-700">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold mb-5 shadow-sm">
              Featured Collection
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Top <span className="text-green-600">Rental Gears</span>
            </h2>

            <p className="text-muted-foreground mt-4 text-lg max-w-2xl leading-relaxed">
              Discover the most popular sports and outdoor equipment trusted by our community for every adventure.
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
            <Link
              href="/gear"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold hover:border-green-200 transition-all"
            >
              View all gears
              <ArrowRight className="h-4 w-4" />
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
            <p className="text-muted-foreground mt-2">
              New rental gear will appear here soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {gears.map((gear, index) => (
              <Link
                key={gear.id}
                href={`/gear/${gear.id}`}
                className="group rounded-3xl border shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 120}ms` }}
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

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute left-4 top-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-green-700 shadow-sm backdrop-blur">
                      <Star className="h-3 w-3 fill-current" />
                      Popular
                    </span>
                  </div>

                  {/* Bottom floating info */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div>
                      {gear.brand && (
                        <p className="text-xs font-medium uppercase tracking-wide text-white/80">
                          {gear.brand}
                        </p>
                      )}
                      <h3 className="text-xl font-bold text-white line-clamp-1 mt-1">
                        {gear.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Rental price
                      </p>
                      <p className="text-3xl font-bold text-green-700 mt-1">
                        ৳{Number(gear.pricePerDay).toLocaleString()}
                        <span className="text-sm font-medium text-muted-foreground">/day</span>
                      </p>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Instant booking</span>
                    <span className="font-semibold text-green-700 group-hover:underline underline-offset-4">
                      Rent now
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