import { Props } from "@/lib/types";
import { getSingleGear } from "@/server/gear.service";
import { cookies } from "next/headers";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

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
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div>
          {gear.images?.length > 0 ? (
            <img
              src={gear.images[0]}
              alt={gear.title}
              className="w-full rounded-lg border"
            />
          ) : (
            <div className="h-96 flex items-center justify-center bg-gray-200 rounded-lg">
              No Image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{gear.title}</h1>

          <p className="dark:text-white">{gear.description}</p>

          <div className="space-y-2 text-sm">
            <p>
              <b>Brand:</b> {gear.brand}
            </p>

            <p>
              <b>Category:</b> {gear.category?.name}
            </p>

            <p>
              <b>Price:</b> ৳{gear.pricePerDay}/day
            </p>

            <p>
              <b>Available:</b> {gear.quantityAvailable}
            </p>

            <p>
              <b>Total:</b> {gear.quantityTotal}
            </p>

            <p>
              <b>Status:</b>
              <b className="text-green-600">
                {gear.isActive ? "Active" : "Inactive"}
              </b>
            </p>

            <p>
              <b>Provider:</b> {gear.provider?.name}
            </p>
          </div>
          <Link
            href={``}
            className="block text-center w-full mt-4  bg-green-700 text-white py-2 hover:bg-green-600"
          >
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleGearPage;
