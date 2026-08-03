import { Props } from "@/lib/types";
import { getSingleGear } from "@/server/gear.service";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";

import {
  PackageCheck,
  Tag,
  Layers,
  User,
  CircleDollarSign,
} from "lucide-react";
import Reviews from "../../_components/reviews/Reviews";

const SingleGearPage = async ({ params }: Props) => {
  const { id } = await params;

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    redirect(`/login?redirect=/gear/${id}`);
  }

  const response = await getSingleGear(id);
  const gear = response?.data;

  if (!gear) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <div className="space-y-5">
          {/* Main Image */}
          <div className="group relative overflow-hidden rounded-3xl border bg-gray-100 dark:bg-zinc-900 shadow-lg h-[450px]">
            {gear.images?.length > 0 ? (
              <>
                <Image
                  src={gear.images[0]}
                  alt={gear.title}
                  fill
                  priority
                  className="object-cover transition duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Image Badge */}
                <div className="absolute bottom-5 left-5">
                  <span className="px-4 py-2 rounded-full bg-white/90 text-black text-sm font-semibold shadow">
                    {gear.category?.name}
                  </span>
                </div>
              </>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <PackageCheck size={45} className="mx-auto mb-3" />
                  <p>No Image Available</p>
                </div>
              </div>
            )}
          </div>

          {/* Thumbnail Images */}
          {gear.images?.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {gear.images.map((image: string, index: number) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl border h-24 cursor-pointer transition
          ${
            index === 0
              ? "ring-2 ring-green-600"
              : "hover:ring-2 hover:ring-green-400"
          }`}
                >
                  <Image
                    src={image}
                    alt={`${gear.title}-${index}`}
                    fill
                    className="object-cover hover:scale-110 transition duration-300"
                    sizes="100px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* Title + Status */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium ${
                  gear.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {gear.isActive ? "Active" : "Inactive"}
              </span>

              <span className="text-sm text-gray-500">
                Gear ID: #{gear.id.slice(0, 8).toUpperCase()}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">
              {gear.title}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {gear.description}
            </p>
          </div>

          {/* Price Card */}
          <div className="rounded-2xl border bg-white dark:bg-black p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <CircleDollarSign className="text-green-600" size={28} />

              <div>
                <p className="text-sm text-gray-500">Rental Price</p>

                <h2 className="text-3xl font-bold text-green-700">
                  ৳{gear.pricePerDay}
                  <span className="text-lg text-gray-500 font-medium">
                    /day
                  </span>
                </h2>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-2xl border bg-white dark:bg-black p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-5">Gear Details</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Tag size={18} />
                  <span>Brand</span>
                </div>

                <span className="font-medium text-right">{gear.brand}</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <Layers size={18} />
                  <span>Category</span>
                </div>

                <span className="font-medium text-right">
                  {gear.category?.name}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <PackageCheck size={18} />
                  <span>Available</span>
                </div>

                <span className="font-medium text-right">
                  {gear.quantityAvailable} / {gear.quantityTotal}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <User size={18} />
                  <span>Provider</span>
                </div>

                <span className="font-medium text-right">
                  {gear.provider?.name}
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/rent/${gear.id}`}
              className="flex-1 bg-green-700 text-white py-3 rounded-xl text-center font-medium hover:bg-green-600 transition"
            >
              Rent Now
            </Link>

            <Link
              href="/gear"
              className="flex-1 border py-3 rounded-xl text-center font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition"
            >
              Back to Gears
            </Link>
          </div>
        </div>
      </div>
      {/* Reviews Section */}
      <div className="mt-14 border-t pt-10">
        <Reviews reviews={gear.reviews || []} />
      </div>
    </div>
  );
};

export default SingleGearPage;
