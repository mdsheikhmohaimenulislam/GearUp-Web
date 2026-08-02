import { getSingleRental } from "@/server/rental.service";
import ReviewSection from "@/app/(public)/_components/ReviewSection";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RentalDetailsPage({ params }: Props) {
  const { id } = await params;

  const response = await getSingleRental(id);

  const rental = response?.data;

  if (!rental) {
    notFound();
  }

  return (
    <div
      className="
    max-w-4xl
    mx-auto
    px-5
    py-10
    space-y-6
    "
    >
      <div
        className="
      border
      rounded-2xl
      p-6
      space-y-3
      "
      >
        <h1
          className="
        text-3xl
        font-bold
        "
        >
          {rental.gear?.title}
        </h1>

        <p>Quantity: {rental.quantity}</p>

        <p>Status: {rental.status}</p>
      </div>

      {rental.status === "RETURNED" && (
        <ReviewSection gearItemId={rental.gear.id} orderId={rental.id} />
      )}
    </div>
  );
}
