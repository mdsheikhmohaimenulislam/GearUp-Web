import { CustomerRental } from '@/lib/types';
import { getMyRentals } from '@/server/rental.service';



export default async function CustomerRentsPage() {

  const response = await getMyRentals();


  const rentals = response?.data || [];
console.log("Rentals:", rentals);

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          My Rentals
        </h1>

        <p className="text-gray-500 mt-2">
          View your rental history and active rentals.
        </p>
      </div>



      {
        rentals.length === 0 ? (

          <div className="
          border
          rounded-xl
          p-10
          text-center
          text-gray-500
          ">
            No rentals found
          </div>

        ) : (

          <div className="grid md:grid-cols-2 gap-5">

            {
              rentals.map((rental:CustomerRental)=>(

                <div
                  key={rental.id}
                  className="
                  border
                  rounded-xl
                  p-5
                  space-y-3
                  "
                >

                  <h2 className="text-xl font-semibold">
                    {rental.gear?.title}
                  </h2>


                  <p>
                    Quantity: {rental.quantity}
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
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-green-100
                    text-green-700
                    text-sm
                    "
                  >
                    {rental.status}
                  </span>


                </div>

              ))
            }

          </div>

        )
      }


    </div>
  );
}