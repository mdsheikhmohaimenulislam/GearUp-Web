import { Badge } from "@/components/ui/badge";
import { AdminRental } from "@/lib/types";


interface RecentRentalsProps {
  rentals: AdminRental[];
}



export default function RecentRentals({
  rentals,
}: RecentRentalsProps) {


  return (

    <div
      className="
      border
      rounded-xl
      p-6
      shadow-sm
      bg-background
      "
    >


      <h2 className="text-xl font-semibold mb-5">
        Recent Rentals
      </h2>



      {
        rentals.length === 0 ? (

          <p className="text-muted-foreground text-center py-5">
            No rentals found
          </p>

        ) : (


          <div className="space-y-4">


            {
              rentals.map((rental)=>(
                

                <div
                  key={rental.id}
                  className="
                  flex
                  justify-between
                  items-center
                  border-b
                  pb-3
                  last:border-none
                  "
                >


                  <div className="space-y-1">


                    <p className="font-medium">

                      {
                        rental.customer?.name 
                        || 
                        "Unknown Customer"
                      }

                    </p>



                    <p className="text-sm text-muted-foreground">

                      {
                        rental.gear?.title
                        ||
                        "Unknown Gear"
                      }

                    </p>


                    {
                      rental.createdAt && (

                        <p className="text-xs text-muted-foreground">

                          {
                            new Date(
                              rental.createdAt
                            ).toLocaleDateString()
                          }

                        </p>

                      )
                    }


                  </div>



                  <Badge
                    variant={
                      rental.status === "COMPLETED"
                      ?
                      "default"
                      :
                      "secondary"
                    }
                  >

                    {
                      rental.status
                      ||
                      "PENDING"
                    }

                  </Badge>



                </div>


              ))
            }


          </div>


        )
      }



    </div>

  );

}