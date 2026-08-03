import { orderActions } from "../../_actions/gearActions";
import AdminTable, { Column } from "../_components/AdminTable";
import OrderStatusBadge from "../_components/OrderStatusBadge";



type Payment = {
  status: string;
  amount: string | number;
};


type Order = {
  id: string;

  quantity: number;

  totalPrice: string | number;

  status:
    | "PENDING"
    | "CONFIRMED"
    | "RETURNED"
    | "CANCELLED"
    | "PAID"
    | "PLACED"
    | "PICKED_UP";


  customer?: {
    name:string;
    email:string;
  };


  gear?: {
    title:string;
    brand:string;
  };


  payment?: Payment[];

};





export default async function AdminOrdersPage(){


  const response =
    await orderActions();



  const orders:Order[] =
    response?.data ?? [];




  const columns = [

    {
      key:"quantity",
      label:"Quantity",
    },


    {
      key:"totalPrice",
      label:"Total Price",

      render:(order:Order)=>(
        <span>
          ৳{Number(order.totalPrice).toLocaleString()}
        </span>
      )
    },



    {
      key:"status",
      label:"Status",

      render:(order:Order)=>(
        <OrderStatusBadge
          status={order.status}
        />
      )
    },



    {
      key:"customer",
      label:"Customer",

      render:(order:Order)=>(

        <div>

          <p className="font-medium">
            {order.customer?.name ?? "N/A"}
          </p>


          <p className="text-sm text-muted-foreground">
            {order.customer?.email ?? ""}
          </p>


        </div>

      )
    },



    {
      key:"gear",
      label:"Gear",

      render:(order:Order)=>(

        <div>

          <p className="font-medium">
            {order.gear?.title ?? "N/A"}
          </p>


          <p className="text-sm text-muted-foreground">
            {order.gear?.brand ?? ""}
          </p>


        </div>

      )
    },




    {
      key:"payment",
      label:"Payment",

      render:(order:Order)=>(


        <div className="space-y-1">


          {
            order.payment &&
            order.payment.length > 0 ?


            order.payment.map(
              (payment,index)=>(

                <div
                  key={`${payment.status}-${index}`}
                  className="text-sm"
                >

                  <p>
                    Status:
                    {" "}
                    <span className="font-medium">
                      {payment.status}
                    </span>
                  </p>


                  <p>
                    Amount:
                    {" "}
                    ৳{payment.amount}
                  </p>


                </div>

              )


            )


            :

            <span className="text-muted-foreground">
              No Payment
            </span>


          }


        </div>


      )

    }



  ] satisfies Column<Order>[];



  return (

    <div
      className="
      container
      mx-auto
      py-10
      "
    >


      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        Manage Orders
      </h1>



      <AdminTable

        columns={columns}

        data={orders}

      />


    </div>

  );

}