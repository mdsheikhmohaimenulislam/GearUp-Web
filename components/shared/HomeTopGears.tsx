import Image from "next/image";
import Link from "next/link";
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

  const gears: Gear[] = response?.data?.gears?.slice(0, 9) ?? [];

  return (
    <section className="container mx-auto px-5 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Top Gears
          </h2>

          <p className="text-muted-foreground mt-2">
            Most popular gear available for rent
          </p>
        </div>

        <Link
          href="/gear"
          className="text-green-700 font-medium hover:underline"
        >
          View all
        </Link>
      </div>


      {/* Empty State */}
      {gears.length === 0 ? (
        <div className="text-center py-10 text-muted-foreground">
          No gears available right now.
        </div>
      ) : (

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {gears.map((gear) => (

            <Link
              key={gear.id}
              href={`/gear/${gear.id}`}
              className="
                group 
                rounded-xl 
                overflow-hidden 
                border 
                bg-background
                hover:shadow-xl
                transition-all
                duration-300
              "
            >

              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden">

                <Image
                  src={
                    gear.images?.[0] || "/placeholder.jpg"
                  }
                  alt={gear.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="
                    object-cover
                    group-hover:scale-105
                    transition-transform
                    duration-300
                  "
                />

              </div>


              {/* Content */}
              <div className="p-5 space-y-3">

                <h3 className="
                  text-lg 
                  font-semibold
                  line-clamp-1
                  group-hover:text-green-700
                  transition
                ">
                  {gear.title}
                </h3>


                {gear.brand && (
                  <p className="text-sm text-muted-foreground">
                    {gear.brand}
                  </p>
                )}


                <div className="flex items-center justify-between">

                  <p className="text-xl font-bold text-green-700">
                    ৳
                    {Number(
                      gear.pricePerDay
                    ).toLocaleString()}
                    <span className="text-sm font-normal text-muted-foreground">
                      /day
                    </span>
                  </p>


                  <span className="
                    text-sm
                    text-green-700
                    font-medium
                  ">
                    Rent →
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      )}

    </section>
  );
}