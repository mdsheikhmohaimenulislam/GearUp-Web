"use client";

import { useUpdateGear } from "@/app/(public)/_components/(provider)/useUpdateGear";

type Gear = {
  id: string;
  title: string;
  description: string;
  pricePerDay: number;
  quantityTotal: number;
  quantityAvailable: number;
};


export default function EditGearForm({
  gear,
}: {
  gear: Gear;
}) {


  const {
    handleSubmit,
    loading
  } = useUpdateGear(gear.id);



  return (

    <div className="max-w-3xl mx-auto space-y-8">


      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold">
          Edit Gear
        </h1>


        <p className="text-gray-500 mt-2">
          Update your gear details and keep your inventory information accurate.
        </p>

      </div>



      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="
        space-y-6
        rounded-xl
        border
        p-8
        shadow-sm
        bg-white
        dark:bg-black
        "
      >


        <div>

          <label className="text-sm font-medium">
            Gear Title
          </label>


          <input
            name="title"
            defaultValue={gear.title}
            className="
            w-full
            mt-2
            border
            rounded-md
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-green-600
            "
          />

        </div>



        <div>

          <label className="text-sm font-medium">
            Description
          </label>


          <textarea
            name="description"
            defaultValue={gear.description}
            className="
            w-full
            mt-2
            border
            rounded-md
            px-4
            py-3
            h-32
            outline-none
            focus:ring-2
            focus:ring-green-600
            "
          />

        </div>




        <div>

          <label className="text-sm font-medium">
            Price Per Day (৳)
          </label>


          <input
            name="pricePerDay"
            type="number"
            defaultValue={gear.pricePerDay}
            className="
            w-full
            mt-2
            border
            rounded-md
            px-4
            py-3
            outline-none
            focus:ring-2
            focus:ring-green-600
            "
          />

        </div>




        <div className="grid md:grid-cols-2 gap-5">


          <div>

            <label className="text-sm font-medium">
              Total Quantity
            </label>


            <input
              name="quantityTotal"
              type="number"
              defaultValue={gear.quantityTotal}
              className="
              w-full
              mt-2
              border
              rounded-md
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-green-600
              "
            />

          </div>




          <div>

            <label className="text-sm font-medium">
              Available Quantity
            </label>


            <input
              name="quantityAvailable"
              type="number"
              defaultValue={gear.quantityAvailable}
              className="
              w-full
              mt-2
              border
              rounded-md
              px-4
              py-3
              outline-none
              focus:ring-2
              focus:ring-green-600
              "
            />

          </div>


        </div>





        <button
          disabled={loading}
          type="submit"
          className="
          w-full
          bg-green-700
          text-white
          py-3
          rounded-md
          font-medium
          hover:bg-green-600
          disabled:opacity-50
          "
        >

          {
            loading
            ? "Updating..."
            : "Update Gear"
          }

        </button>


      </form>


    </div>

  );
}