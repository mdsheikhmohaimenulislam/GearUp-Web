import Link from "next/link";
import Image from "next/image";
import { getMyGears } from "@/server/provider.service";
import { Gear } from "@/lib/types";
import { Edit, Trash2 } from "lucide-react";
import DeleteGearButton from "@/components/DeleteGearButton";

export default async function MyGearsPage() {
  const result = await getMyGears();

  const gears: Gear[] = result?.data || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">My Gears</h1>

        <p className=" mt-2">Manage your rental equipment inventory.</p>
      </div>

      {gears.length === 0 ? (
        <div className="border rounded-lg p-10 text-center">
          <p>No gears found.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gears.map((gear) => (
            <div
              key={gear.id}
              className="
                border
                rounded-xl
                overflow-hidden
                shadow-sm
                hover:shadow-lg
                transition
                "
            >
              {/* Image */}

              <div className="h-56 relative">
                {gear.images?.length > 0 ? (
                  <Image
                    src={gear.images[0]}
                    alt={gear.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div
                    className="
                      h-full
                      flex
                      items-center
                      justify-center
                      bg-gray-200
                      "
                  >
                    No Image
                  </div>
                )}
              </div>

              {/* Content */}

              <div className="p-5 space-y-3">
                <h2 className="text-xl font-bold">{gear.title}</h2>

                <p className="text-sm">{gear.description}</p>

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

                {/* Buttons */}

                <div className="flex gap-3 pt-4">
                  <Link
                    href={`/providerDashboard/gears/${gear.id}/edit`}
                    className="
  flex-1
  flex
  items-center
  justify-center
  gap-2
  bg-green-600
  text-white
  py-2
  rounded-md
  hover:bg-green-700
  "
                  >
                    <Edit size={17} />
                    Edit
                  </Link>

                  <DeleteGearButton id={gear.id} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
