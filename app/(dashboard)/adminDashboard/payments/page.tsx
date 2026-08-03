
import { paymentActions } from "../../_actions/paymentActions";
import AdminTable, { Column } from "../_components/AdminTable";


type Payment = {

  id:string;

  amount:string | number;

  status:string;

  method:string;


  rentalOrder?:{

    id:string;

    customer?:{

      name:string;

      email:string;

    };


    rentalItems?:{

      gearItem?:{

        title:string;

        brand:string;

      };

    }[];

  };

};




export default async function PaymentsPage(){


  const response =
    await paymentActions();



  const payments:Payment[] =
    response?.data ?? [];





  const columns = [



    {
      key:"customer",

      label:"Customer",


      render:(payment:Payment)=>(


        <div>


          <p className="font-medium">

            {
              payment.rentalOrder?.customer?.name 
              ??
              "N/A"
            }

          </p>



          <p className="
          text-sm 
          text-muted-foreground
          ">

            {
              payment.rentalOrder?.customer?.email
              ??
              ""
            }


          </p>



        </div>


      )

    },






    {
      key:"gear",

      label:"Gear",


      render:(payment:Payment)=>{


        const gear =
          payment
          .rentalOrder
          ?.rentalItems?.[0]
          ?.gearItem;



        return (

          <div>


            <p className="font-medium">

              {
                gear?.title
                ??
                "N/A"
              }

            </p>



            <p className="
            text-sm 
            text-muted-foreground
            ">

              {
                gear?.brand
                ??
                ""
              }

            </p>


          </div>

        )


      }


    },







    {
      key:"amount",

      label:"Amount",


      render:(payment:Payment)=>(

        <>
          ৳
          {
            Number(payment.amount)
            .toLocaleString()
          }
        </>

      )

    },






    {
      key:"method",

      label:"Method",

    },






    {
      key:"status",

      label:"Status",


      render:(payment:Payment)=>(


        <span
        className={`
        px-3
        py-1
        rounded-full
        text-sm
        
        ${
          payment.status==="PAID"
          ?
          "bg-green-100 text-green-700"
          :
          "bg-yellow-100 text-yellow-700"
        }

        `}
        >

          {payment.status}


        </span>


      )

    },







    {
      key:"order",

      label:"Order",


      render:(payment:Payment)=>(

        <>
        #
        {
          payment.rentalOrder?.id
          ?.slice(0,8)
          ??
          "N/A"
        }

        </>

      )

    }





  ] satisfies Column<Payment>[];



  return (

    <div className="
    container
    mx-auto
    py-10
    ">


      <h1 className="
      text-3xl
      font-bold
      mb-6
      ">

        Manage Payments

      </h1>



      <AdminTable

        columns={columns}

        data={payments}

      />


    </div>


  );


}