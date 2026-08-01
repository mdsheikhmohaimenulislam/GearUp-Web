import { CustomerRental } from "@/lib/types";
import { getMyRentals } from "@/server/rental.service";
import ReturnButton from "@/components/shared/ReturnButton";

export default async function CustomerRentsPage() {
  const response = await getMyRentals();

  const rentals: CustomerRental[] = response?.data || [];

  console.log("Rentals:", rentals);


  const activeRentals = rentals.filter(
    (rental) => rental.status !== "CANCELLED"
  );


  const cancelledRentals = rentals.filter(
    (rental) => rental.status === "CANCELLED"
  );


  return (
    <div className="space-y-10">


      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold">
          My Rentals
        </h1>

        <p className="text-gray-500 mt-2">
          View your rental history and active rentals.
        </p>
      </div>



      {/* Active Rentals */}

      <section className="space-y-5">

        <h2 className="text-2xl font-semibold">
          Active Rentals
        </h2>


        {
          activeRentals.length === 0 ? (

            <div
              className="
              border
              rounded-xl
              p-10
              text-center
              text-gray-500
              "
            >
              No active rentals found
            </div>

          ) : (

            <div
              className="
              grid
              md:grid-cols-2
              gap-5
              "
            >

              {
                activeRentals.map((rental)=>(
                  
                  <div
                    key={rental.id}
                    className="
                    border
                    rounded-xl
                    p-5
                    space-y-4
                    "
                  >


                    <h2
                      className="
                      text-xl
                      font-semibold
                      "
                    >
                      {rental.gear?.title}
                    </h2>



                    <p>
                      Rental ID:
                      {" "}
                      {rental.id.slice(0,8)}
                    </p>



                    <p>
                      Quantity:
                      {" "}
                      {rental.quantity}
                    </p>



                    <p>
                      Start:
                      {" "}
                      {new Date(
                        rental.startDate
                      ).toLocaleDateString()}
                    </p>



                    <p>
                      End:
                      {" "}
                      {new Date(
                        rental.endDate
                      ).toLocaleDateString()}
                    </p>



                    <span
                      className={`
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      text-sm

                      ${
                        rental.status === "RETURNED"
                        ?
                        "bg-blue-100 text-blue-700"
                        :
                        rental.status === "CONFIRMED"
                        ?
                        "bg-green-100 text-green-700"
                        :
                        rental.status === "PICKED_UP"
                        ?
                        "bg-purple-100 text-purple-700"
                        :
                        "bg-yellow-100 text-yellow-700"
                      }
                      `}
                    >

                      {rental.status}

                    </span>



                    {/* Customer Return */}

                    {
                      rental.status === "PICKED_UP" && (

                        <ReturnButton
                          id={rental.id}
                        />

                      )
                    }



                  </div>

                ))
              }

            </div>

          )
        }


      </section>






      {/* Cancelled Rentals */}

      {/* {
        cancelledRentals.length > 0 && (

          <section className="space-y-5">


            <h2
              className="
              text-2xl
              font-semibold
              "
            >
              Cancelled Rentals
            </h2>



            <div
              className="
              grid
              md:grid-cols-2
              gap-5
              "
            >

              {
                cancelledRentals.map((rental)=>(


                  <div
                    key={rental.id}
                    className="
                    border
                    rounded-xl
                    p-5
                    space-y-4
                    "
                  >


                    <h2
                      className="
                      text-xl
                      font-semibold
                      "
                    >
                      {rental.gear?.title}
                    </h2>



                    <p>
                      Rental ID:
                      {" "}
                      {rental.id.slice(0,8)}
                    </p>



                    <p>
                      Quantity:
                      {" "}
                      {rental.quantity}
                    </p>



                    <p>
                      Start:
                      {" "}
                      {new Date(
                        rental.startDate
                      ).toLocaleDateString()}
                    </p>



                    <p>
                      End:
                      {" "}
                      {new Date(
                        rental.endDate
                      ).toLocaleDateString()}
                    </p>



                    <span
                      className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      bg-red-100
                      text-red-700
                      text-sm
                      "
                    >
                      CANCELLED
                    </span>


                  </div>


                ))
              }


            </div>


          </section>

        )
      } */}



    </div>
  );
}