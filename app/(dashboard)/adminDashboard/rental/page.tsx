import { getAdminRentals } from "@/server/admin.service";
import RentalTable from "../_components/RentalTable";



export default async function AdminRentalsPage() {


  const response = await getAdminRentals();


  const rentals =
    response?.data || [];



  return (

    <div
      className="
      container
      mx-auto
      py-10
      space-y-6
      "
    >


      <div>

        <h1
          className="
          text-3xl
          font-bold
          "
        >
          Manage Rentals
        </h1>


        <p
          className="
          text-muted-foreground
          mt-2
          "
        >
          Track all rental orders and status.
        </p>


      </div>





      <RentalTable
        rentals={rentals}
      />



    </div>

  );

}