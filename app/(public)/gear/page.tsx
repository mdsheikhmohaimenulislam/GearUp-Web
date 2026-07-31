import { getCategories, getGears } from "@/server/gear.service";
import GearFilter from "../_components/GearFilter";
import { Gear } from "@/lib/types";
import Link from "next/link";


type SearchParams = {
  search?: string;
  slug?: string;
  minPrice?: string;
  maxPrice?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};


export default async function GearPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {


  const params = await searchParams;



  const response = await getGears({

    search: params.search,

    slug: params.slug,

    minPrice: params.minPrice
      ? Number(params.minPrice)
      : undefined,

    maxPrice: params.maxPrice
      ? Number(params.maxPrice)
      : undefined,

    sortBy: params.sortBy || "createdAt",

    sortOrder: params.sortOrder || "desc",

  });




  const categoryResponse = await getCategories();



  const categories = 
    categoryResponse?.data?.categories || [];




  const gears: Gear[] =
    response?.data?.gears || [];





  return (

    <div className="container mx-auto py-10">


      {/* <h1 className="text-3xl font-bold mb-6">
        Gear Collection
      </h1> */}




      <GearFilter
        categories={categories}
      />





      <div className="grid md:grid-cols-3 gap-6 mt-8">


        {
          gears.length === 0 ? (

            <p>
              No gear found
            </p>


          ) : (


            gears.map((gear: Gear)=>(


              <div
                key={gear.id}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
              >



                {/* Image */}

                <div className="h-60 w-full overflow-hidden">


                  {
                    gear.images?.length > 0 ? (

                      <img
                        src={gear.images[0]}
                        alt={gear.title}
                        className="h-full w-full object-cover"
                      />


                    ) : (


                      <div className="h-full flex items-center justify-center bg-gray-200">

                        No Image

                      </div>


                    )

                  }


                </div>





                {/* Content */}

                <div className="p-5 space-y-3">


                  <h2 className="text-xl font-bold">
                    {gear.title}
                  </h2>




                  <p className="text-white text-sm">

                    {
                      gear.description
                        ?.split(" ")
                        .slice(0,20)
                        .join(" ")
                    }


                    {
                      gear.description?.split(" ").length > 20
                        ? "..."
                        : ""
                    }

                  </p>






                  <div className="space-y-1 text-sm">


                    <p>
                      Brand:
                      <span className="font-semibold">
                        {" "}{gear.brand}
                      </span>
                    </p>




                    <p>
                      Category:
                      <span className="font-semibold">
                        {" "}{gear.category?.name}
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
                        {" "}{gear.quantityAvailable}
                      </span>
                    </p>




                    <p>
                      Total:
                      <span className="font-semibold">
                        {" "}{gear.quantityTotal}
                      </span>
                    </p>





                    <p>

                      Status:

                      {
                        gear.isActive ? (

                          <span className="text-green-600 font-semibold dark:text-green-400">
                            {" "}Active
                          </span>


                        ) : (


                          <span className="text-red-600 font-semibold">
                            {" "}Inactive
                          </span>


                        )
                      }

                    </p>




{/* 
                    <p>
                      Provider:
                      <span className="font-semibold">
                        {" "}{gear.provider?.name}
                      </span>
                    </p> */}


                  </div>









                </div>

                  <Link
                    href={`/gear/${gear.id}?redirect=true`}
                    className="block text-center w-full mt-4  bg-green-700 text-white py-2 hover:bg-green-600"
                  >

                    See More

                  </Link>

              </div>
              


            ))

          )

        }


      </div>


    </div>

  );

}