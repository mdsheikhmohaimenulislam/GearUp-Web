import Link from "next/link";
import { XCircle } from "lucide-react";


export default function PaymentCancelPage() {

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

        <XCircle
          size={70}
          className="
          mx-auto
          text-red-600
          "
        />


        <h1
          className="
          text-3xl
          font-bold
          text-red-600
          mt-5
          "
        >
          Payment Cancelled
        </h1>


        <p
          className="
          mt-3
          text-gray-600
          dark:text-gray-300
          "
        >
          Your payment was cancelled. You can try again anytime.
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
            "
          >
            My Rentals
          </Link>

        </div>


      </div>

    </div>
  );
}