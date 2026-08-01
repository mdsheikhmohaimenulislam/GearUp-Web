import RentForm from "@/app/(public)/_components/rentalFrom/RentForm";
import { Props } from "@/lib/types";
import { getSingleGear } from "@/server/gear.service";
import { notFound } from "next/navigation";


export default async function RentPage({ params }: Props) {

  const { id } = await params;


  const response = await getSingleGear(id);

  const gear = response?.data;


  if (!gear) {
    notFound();
  }


  return (
    <div className="max-w-3xl mx-auto px-4 py-10">

      <div
        className="
        border
        rounded-2xl
        p-6
        bg-white
        dark:bg-black
        shadow-sm
        space-y-6
        "
      >

        {/* Gear Info */}

        <div>

          <h1 className="text-3xl font-bold">
            {gear.title}
          </h1>


          <p className="text-gray-500 mt-2">
            Rental Price:
            <span className="font-semibold text-green-700">
              {" "}৳{gear.pricePerDay}/day
            </span>
          </p>


        </div>



        {/* Rental Form */}

        <RentForm
          gearId={gear.id}
        />


      </div>


    </div>
  );
}