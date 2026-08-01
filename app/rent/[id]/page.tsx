import RentForm from "@/app/(public)/_components/rentalFrom/RentForm";
import { Props } from "@/lib/types";
import { getSingleGear } from "@/server/gear.service";


export default async function RentPage({ params }: Props) {
  const { id } = await params;

  const response = await getSingleGear(id);
  const gear = response?.data;

  if (!gear) {
    return <div>Gear not found</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <div className="border rounded-2xl p-6 bg-white dark:bg-black shadow-sm">
        <h1 className="text-3xl font-bold mb-2">{gear.title}</h1>

        <p className="text-gray-500 mb-6">
          Rental price: ৳{gear.pricePerDay}/day
        </p>

        <RentForm gearId={gear.id} />
      </div>
    </div>
  );
}