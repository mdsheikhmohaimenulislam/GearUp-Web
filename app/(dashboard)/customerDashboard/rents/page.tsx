import { CustomerRental } from "@/lib/types";
import { getMyRentals } from "@/server/rental.service";
import ReturnButton from "@/components/shared/ReturnButton";
import Link from "next/link";
import { CalendarDays, Package, ClipboardList, Star } from "lucide-react";

export default async function CustomerRentsPage() {
  const response = await getMyRentals();

  const rentals: CustomerRental[] = response?.data || [];

  const activeRentals = rentals.filter(
    (rental) => rental.status !== "CANCELLED",
  );

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "RETURNED":
        return "bg-blue-100 text-blue-700";

      case "CONFIRMED":
        return "bg-green-100 text-green-700";

      case "PICKED_UP":
        return "bg-purple-100 text-purple-700";

      case "PLACED":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-10">
      {/* Header */}

      <div>
        <h1
          className="
        text-3xl
        font-bold
        tracking-tight
        "
        >
          My Rentals
        </h1>

        <p
          className="
        text-muted-foreground
        mt-2
        "
        >
          View your rental history and manage your rented gears.
        </p>
      </div>

      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <ClipboardList className="text-green-600" />

          <h2
            className="
          text-2xl
          font-semibold
          "
          >
            Rental History
          </h2>
        </div>

        {activeRentals.length === 0 ? (
          <div
            className="
              border
              rounded-2xl
              p-12
              text-center
              text-gray-500
              "
          >
            No rentals found
          </div>
        ) : (
          <div
            className="
              grid
              md:grid-cols-2
              gap-6
              "
          >
            {activeRentals.map((rental) => (
              <div
                key={rental.id}
                className="
                    rounded-2xl
                    border
                    bg-white
                    dark:bg-black
                    p-6
                    shadow-sm
                    hover:shadow-md
                    transition
                    space-y-5
                    "
              >
                {/* Title */}

                <div
                  className="
                      flex
                      justify-between
                      items-start
                      gap-3
                      "
                >
                  <h3
                    className="
                        text-xl
                        font-bold
                        "
                  >
                    {rental.gear?.title}
                  </h3>

                  <span
                    className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getStatusStyle(rental.status)}
                        `}
                  >
                    {rental.status}
                  </span>
                </div>

                {/* Info */}

                <div
                  className="
                      space-y-3
                      text-sm
                      "
                >
                  <p className="flex items-center gap-2">
                    <Package size={17} className="text-green-600" />
                    Quantity:
                    <span className="font-medium">{rental.quantity}</span>
                  </p>

                  <p className="flex items-center gap-2">
                    <CalendarDays size={17} className="text-green-600" />

                    {new Date(rental.startDate).toLocaleDateString()}

                    {" - "}

                    {new Date(rental.endDate).toLocaleDateString()}
                  </p>

                  <p
                    className="
                      text-gray-500
                      "
                  >
                    Rental ID: {rental.id.slice(0, 8)}
                  </p>
                </div>

                {/* Actions */}

                <div
                  className="
                      pt-3
                      flex
                      gap-3
                      "
                >
                  {rental.status === "PICKED_UP" && (
                    <ReturnButton id={rental.id} />
                  )}

                  {rental.status === "RETURNED" && (
                    <Link
                      href={`/customerDashboard/rents/${rental.id}`}
                      className="
                            flex
                            items-center
                            gap-2
                            bg-green-600
                            text-white
                            px-4
                            py-2
                            rounded-lg
                            hover:bg-green-700
                            transition
                            "
                    >
                      <Star size={18} />
                      Write Review
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
