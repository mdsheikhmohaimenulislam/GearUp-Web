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
  const gears = response?.data?.gears?.slice(0, 9) || [];
  return (
    <section className="container mx-auto space-y-6 p-5">
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <h2 className="text-3xl font-bold">Top Gears</h2>{" "}
          <p className="text-muted-foreground mt-1">
            {" "}
            Most popular gear available for rent{" "}
          </p>{" "}
        </div>{" "}
        <Link
          href="/gear"
          className="text-green-700 font-medium hover:underline"
        >
          {" "}
          View all{" "}
        </Link>{" "}
      </div>{" "}
      <div className="grid gap-6  md:grid-cols-2 lg:grid-cols-3">
        {" "}
        {gears.map((gear: Gear) => (
          <Link
            key={gear.id}
            href={`/gear/${gear.id}`}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition block"
          >
            {" "}
            <img
              src={gear.images?.[0] || "/placeholder.jpg"}
              alt={gear.title}
              className="w-full h-48 object-cover"
            />{" "}
            <div className="p-4 space-y-2">
              {" "}
              <h3 className="font-semibold line-clamp-1">{gear.title}</h3>{" "}
              <p className="text-sm text-muted-foreground"> {gear.brand} </p>{" "}
              <p className="font-bold text-green-700">
                {" "}
                ৳{Number(gear.pricePerDay).toLocaleString()} / day{" "}
              </p>{" "}
            </div>{" "}
          </Link>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
