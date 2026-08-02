import { getCategories, getGears } from "@/server/gear.service";
import GearFilter from "../_components/GearFilter";
import { Gear, SearchParams } from "@/lib/types";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function GearPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  // Query Validation

  const allowedSort = ["createdAt", "pricePerDay", "title"];

  if (params.sortBy && !allowedSort.includes(params.sortBy)) {
    notFound();
  }

  if (
    params.sortOrder &&
    params.sortOrder !== "asc" &&
    params.sortOrder !== "desc"
  ) {
    notFound();
  }

  const response = await getGears({
    search: params.search,

      category: params.category,

    minPrice: params.minPrice ? Number(params.minPrice) : undefined,

    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,

    sortBy: params.sortBy || "createdAt",

    sortOrder: params.sortOrder === "asc" ? "asc" : "desc",
  });

  const categoryResponse = await getCategories();

  const categories = categoryResponse?.data?.categories || [];

  const gears: Gear[] = response?.data?.gears || [];

  return (
    <div className="container mx-auto py-10">
      <GearFilter categories={categories} />

      {gears.length === 0 ? (
        <div className="text-center py-10 text-gray-500">Gear Not Found</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {gears.map((gear: Gear) => (
            <div
              key={gear.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* Image */}

              <div className="h-60 w-full overflow-hidden">
                {gear.images?.length > 0 ? (
                  <img
                    src={gear.images[0]}
                    alt={gear.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center bg-gray-200">
                    No Image
                  </div>
                )}
                
              </div>

              {/* Content */}

              <div className="p-5 space-y-3">
                <h2 className="text-xl font-bold">{gear.title}</h2>

                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {gear.description?.split(" ").slice(0, 20).join(" ")}

                  {gear.description?.split(" ").length > 20 ? "..." : ""}
                </p>

                <div className="space-y-1 text-sm">
                  <p>
                    Brand:
                    <span className="font-semibold"> {gear.brand}</span>
                  </p>

                  <p>
                    Category:
                    <span className="font-semibold">
                      {" "}
                      {gear.category?.name}
                    </span>
                  </p>

                  <p>
                    Price:
                    <span className="font-semibold">
                      {" "}
                      ৳{gear.pricePerDay}/day
                    </span>
                  </p>

                  <p>
                    Available:
                    <span className="font-semibold">
                      {" "}
                      {gear.quantityAvailable}
                    </span>
                  </p>

                  <p>
                    Total:
                    <span className="font-semibold"> {gear.quantityTotal}</span>
                  </p>

                  <p>
                    Status:
                    {gear.isActive ? (
                      <span className="text-green-600 font-semibold">
                        {" "}
                        Active
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        {" "}
                        Inactive
                      </span>
                    )}
                  </p>
                </div>

                <Link
                  href={`/gear/${gear.id}?redirect=/gear/${gear.id}`}
                  className="block text-center w-full mt-4 bg-green-700 text-white py-2 rounded hover:bg-green-600"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
