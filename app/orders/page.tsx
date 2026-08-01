import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import {
  Home,
  Package,
  CalendarDays,
  CreditCard,
} from "lucide-react";

import { getMyPayments } from "@/server/payment.service";

import { Payment } from "@/lib/types";


export default async function OrdersPage() {


  const response = await getMyPayments();


  const payments: Payment[] =
    response?.data || [];



  return (

    <div
className="p-5 lg:p-15"
    >


      {/* Header */}

      <div
        className="
        flex
        justify-between
        items-center
        "
      >

        <div className="mb-5">

          <h1
            className="
            text-3xl
            font-bold
            "
          >
            My Payments
          </h1>


          <p
            className="
            text-muted-foreground
            mt-2
            "
          >
            Manage and view your rental payment history.
          </p>


        </div>



        <Button
          asChild
          variant="outline"
        >

          <Link href="/">

            <Home size={18}/>

            Home

          </Link>

        </Button>


      </div>





      {
        payments.length === 0 ? (

          <Card>

            <CardContent
              className="
              py-10
              text-center
              text-muted-foreground
              "
            >

              No payments found

            </CardContent>

          </Card>


        ) : (



          <div
            className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            "
          >


            {
              payments.map((payment)=>(


                <Card
                  key={payment.id}
                  className="
                  rounded-2xl
                  hover:shadow-xl
                  transition
                  "
                >



                  {/* Header */}

                  <CardHeader>


                    <div
                      className="
                      flex
                      justify-between
                      items-start
                      gap-3
                      "
                    >


                      <CardTitle
                        className="
                        text-lg
                        "
                      >

                        {
                          payment.rentalOrder?.gear?.title
                          ??
                          "Unknown Gear"
                        }


                      </CardTitle>




                      <Badge

                        className={`
                        
                        ${
                          payment.status === "PAID"
                          ?
                          "bg-green-100 text-green-700"
                          :
                          payment.status === "PENDING"
                          ?
                          "bg-yellow-100 text-yellow-700"
                          :
                          "bg-red-100 text-red-700"

                        }

                        `}

                      >

                        {payment.status}

                      </Badge>



                    </div>



                  </CardHeader>







                  <CardContent
                    className="
                    space-y-5
                    "
                  >



                    {/* Amount */}

                    <div
                      className="
                      flex
                      justify-between
                      "
                    >

                      <span
                        className="
                        text-muted-foreground
                        "
                      >
                        Amount
                      </span>


                      <span
                        className="
                        font-semibold
                        "
                      >

                        ৳{payment.amount}

                      </span>


                    </div>






                    {/* Method */}

                    <div
                      className="
                      flex
                      justify-between
                      items-center
                      "
                    >

                      <span
                        className="
                        text-muted-foreground
                        "
                      >
                        Payment Method
                      </span>


                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        "
                      >

                        <CreditCard size={16}/>

                        {payment.method}


                      </div>


                    </div>







                    {/* Quantity */}

                    <div
                      className="
                      flex
                      justify-between
                      items-center
                      "
                    >

                      <span
                        className="
                        text-muted-foreground
                        "
                      >
                        Quantity
                      </span>


                      <div
                        className="
                        flex
                        items-center
                        gap-2
                        font-medium
                        "
                      >

                        <Package size={16}/>


                        {
                          payment.rentalOrder?.quantity
                          ??
                          "N/A"
                        }


                      </div>


                    </div>







                    {/* Rental Period */}

                    <div
                      className="
                      flex
                      justify-between
                      items-start
                      "
                    >

                      <span
                        className="
                        text-muted-foreground
                        "
                      >
                        Rental Period
                      </span>



                      <div
                        className="
                        text-sm
                        text-right
                        "
                      >


                        {
                          payment.rentalOrder?.startDate
                          &&
                          payment.rentalOrder?.endDate

                          ?

                          (
                            <>

                              <p>

                                {
                                  new Date(
                                    payment.rentalOrder.startDate
                                  )
                                  .toLocaleDateString()
                                }

                              </p>


                              <p
                                className="
                                text-muted-foreground
                                "
                              >
                                to
                              </p>


                              <p>

                                {
                                  new Date(
                                    payment.rentalOrder.endDate
                                  )
                                  .toLocaleDateString()
                                }

                              </p>


                            </>

                          )

                          :

                          (

                            <span>
                              N/A
                            </span>

                          )

                        }


                      </div>



                    </div>







                    {/* Payment ID */}

                    <div
                      className="
                      text-sm
                      text-muted-foreground
                      border-t
                      pt-3
                      "
                    >

                      Payment ID:
                      {" "}
                      {payment.id.slice(0,8)}

                    </div>



                  </CardContent>







                  <CardFooter>


                    <Button
                      asChild
                      className="
                      w-full
                      "
                    >

                      <Link
                        href={`/orders/${payment.id}`}
                      >

                        View Details

                      </Link>


                    </Button>


                  </CardFooter>





                </Card>


              ))
            }



          </div>



        )
      }



    </div>

  );
}