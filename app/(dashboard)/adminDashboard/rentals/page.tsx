import AdminTable, { Column } from "../_components/AdminTable";
import { orderActions } from "../_actions/gearActions";


type Rental = {
  id: string;

  quantity: number;

  totalPrice: string | number;

  status:
    | "PLACED"
    | "CONFIRMED"
    | "PAID"
    | "PICKED_UP"
    | "RETURNED"
    | "CANCELLED";


  customer?: {
    name: string;
    email: string;
  };


  gear?: {
    title: string;
    brand: string;
  };


  createdAt?: string;
};



export default async function RentalsPage() {


  const response =
    await orderActions();



  const rentals: Rental[] =
    response?.data || [];




  const columns = [


    {
      key: "quantity",
      label: "Quantity",
    },



    {
      key: "totalPrice",
      label: "Price",

      render:(rental:Rental)=>(
        <span>
          ৳{Number(rental.totalPrice).toLocaleString()}
        </span>
      ),
    },



    {
      key: "status",
      label: "Status",

      render:(rental:Rental)=>(
        <span
          className="
          px-3
          py-1
          rounded-full
          text-sm
          bg-green-100
          text-green-700
          "
        >
          {rental.status}
        </span>
      ),
    },



    {
      key:"customer",

      label:"Customer",

      render:(rental:Rental)=>(
        <div>

          <p className="font-medium">
            {rental.customer?.name || "N/A"}
          </p>


          <p className="text-sm text-muted-foreground">
            {rental.customer?.email || ""}
          </p>

        </div>
      )
    },



    {
      key:"gear",

      label:"Gear",

      render:(rental:Rental)=>(
        <div>

          <p className="font-medium">
            {rental.gear?.title || "N/A"}
          </p>


          <p className="text-sm text-muted-foreground">
            {rental.gear?.brand || ""}
          </p>


        </div>
      )
    },



    {
      key:"createdAt",

      label:"Date",

      render:(rental:Rental)=>(
        <span>
          {
            rental.createdAt
            ?
            new Date(
              rental.createdAt
            ).toLocaleDateString()
            :
            "N/A"
          }
        </span>
      )
    },


  ] satisfies Column<Rental>[];



  return (

    <div className="container mx-auto py-10">


      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        Manage Rentals
      </h1>



      <AdminTable
        columns={columns}
        data={rentals}
      />


    </div>

  );

}