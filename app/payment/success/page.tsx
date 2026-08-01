import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { confirmPaymentAction } from "../_actions/confirmPaymentAction";


type Props = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};


export default async function PaymentSuccessPage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const sessionId = params.session_id;


  if (!sessionId) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">
          Session id not found
        </h1>
      </div>
    );
  }


  const result = await confirmPaymentAction({
    sessionId,
  });


  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gray-50
      dark:bg-black
      px-4
      "
    >

      <div
        className="
        max-w-md
        w-full
        bg-white
        dark:bg-gray-900
        border
        rounded-2xl
        shadow-lg
        p-8
        text-center
        "
      >

        {
          result.success ? (
            <>

              <CheckCircle
                size={70}
                className="
                mx-auto
                text-green-600
                "
              />


              <h1
                className="
                text-3xl
                font-bold
                mt-5
                text-green-600
                "
              >
                Payment Successful 🎉
              </h1>


              <p
                className="
                mt-3
                text-gray-600
                dark:text-gray-300
                "
              >
                Your rental payment has been completed successfully.
              </p>


              <p
                className="
                mt-2
                text-sm
                text-gray-500
                "
              >
                Your order is now confirmed. You can track your rental from your dashboard.
              </p>



              <div
                className="
                flex
                gap-3
                mt-8
                "
              >

                <Link
                  href="/"
                  className="
                  flex-1
                  bg-green-600
                  text-white
                  py-3
                  rounded-xl
                  font-medium
                  hover:bg-green-700
                  "
                >
                  Go Home
                </Link>



                <Link
                  href="/customerDashboard/rents"
                  className="
                  flex-1
                  border
                  py-3
                  rounded-xl
                  font-medium
                  hover:bg-gray-100
                  dark:hover:bg-gray-800
                  "
                >
                  My Rentals
                </Link>


              </div>


            </>
          ) : (
            <>

              <h1
                className="
                text-3xl
                font-bold
                text-red-600
                "
              >
                Payment Failed
              </h1>


              <p className="mt-3 text-gray-500">
                {result.message}
              </p>


              <Link
                href="/"
                className="
                inline-block
                mt-6
                bg-gray-900
                text-white
                px-6
                py-3
                rounded-xl
                "
              >
                Back Home
              </Link>

            </>
          )
        }


      </div>

    </div>
  );
}