import Link from "next/link";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  ArrowLeft,
  CalendarDays,
  Mail,
  Package,
  IndianRupee,
  CheckCircle,
  ShoppingCart,
  CreditCard,
  PackageCheck,
  PackageOpen,
  RotateCcw,
} from "lucide-react";

import { getPaymentDetails } from "@/server/payment.service";
import InvoiceButton from "../_components/InvoiceButton";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PaymentDetailsPage({ params }: Props) {
  const { id } = await params;

  const response = await getPaymentDetails(id);

  const payment = response?.data;

  if (!payment) {
    return (
      <div className="max-w-5xl mx-auto py-10 px-6">Payment not found</div>
    );
  }

  const gear = payment.rentalOrder?.gear;

  const rentalStatus = payment.rentalOrder?.status;

  const startDate = new Date(payment.rentalOrder.startDate);

  const endDate = new Date(payment.rentalOrder.endDate);

  const rentalDays = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
  );

  const steps = [
    {
      title: "Order Created",
      icon: ShoppingCart,
      completed: true,
    },

    {
      title: "Payment Completed",
      icon: CreditCard,
      completed: payment.status === "PAID",
    },

    {
      title: "Rental Confirmed",
      icon: PackageCheck,
      completed:
        payment.status === "PAID" &&
        ["CONFIRMED", "PICKED_UP", "RETURNED"].includes(rentalStatus),
    },

    {
      title: "Gear Picked Up",
      icon: PackageOpen,
      completed: ["PICKED_UP", "RETURNED"].includes(rentalStatus),
    },

    {
      title: "Gear Returned",
      icon: RotateCcw,
      completed: rentalStatus === "RETURNED",
    },
  ];

  return (
    <div
      className="
      max-w-7xl
      mx-auto
      px-4
      sm:px-6
      py-8
      sm:py-10
      space-y-8
      "
    >
      {/* HEADER */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        justify-between
        gap-4
        items-start
        sm:items-center
        "
      >
        <div>
          <h1
            className="
            text-2xl
            sm:text-3xl
            font-bold
            "
          >
            Payment Details
          </h1>

          <p
            className="
            text-muted-foreground
            mt-2
            text-sm
            sm:text-base
            "
          >
            Rental payment summary and order tracking.
          </p>
        </div>

        <Button asChild variant="outline">
          <Link href="/orders">
            <ArrowLeft size={18} />
            Back Payments
          </Link>
        </Button>
      </div>

      {/* MAIN GRID */}

      <div
        className="
        grid
        grid-cols-1
        lg:grid-cols-3
        gap-6
        lg:gap-8
        "
      >
        {/* LEFT SIDE */}

        <div
          className="
          lg:col-span-2
          space-y-6
          "
        >
          {/* RENTAL ITEM */}

          <Card>
            <CardHeader>
              <CardTitle>Rental Item</CardTitle>
            </CardHeader>

            <CardContent
              className="
              flex
              flex-col
              sm:flex-row
              gap-5
              "
            >
              <Image
                src={gear?.images?.[0] || "/placeholder.png"}
                width={160}
                height={160}
                alt="gear"
                className="
                w-full
                sm:w-40
                h-52
                sm:h-40
                rounded-xl
                object-cover
                "
              />

              <div
                className="
                space-y-3
                "
              >
                <h2
                  className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  "
                >
                  {gear?.title}
                </h2>

                <p>Brand: {gear?.brand}</p>

                <p>Quantity: {payment.rentalOrder.quantity}</p>
              </div>
            </CardContent>
          </Card>

          {/* RENTAL INFORMATION */}

          <Card>
            <CardHeader>
              <CardTitle>Rental Information</CardTitle>
            </CardHeader>

            <CardContent
              className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              "
            >
              <Info
                icon={<CalendarDays size={18} />}
                title="Start Date"
                value={startDate.toLocaleDateString()}
              />

              <Info
                icon={<CalendarDays size={18} />}
                title="End Date"
                value={endDate.toLocaleDateString()}
              />

              <Info
                icon={<Package size={18} />}
                title="Duration"
                value={`${rentalDays} Days`}
              />

              <Info
                icon={<Package size={18} />}
                title="Status"
                value={rentalStatus}
              />
            </CardContent>
          </Card>
          {/* ORDER STATUS */}

          <Card>
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>

            <CardContent
              className="
              space-y-5
              "
            >
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.title}
                    className="
                      flex
                      items-center
                      gap-4
                      "
                  >
                    <div
                      className={`
                        w-10
                        h-10
                        rounded-full
                        flex
                        items-center
                        justify-center
                        shrink-0

                        ${
                          step.completed
                            ? "bg-green-600 text-white"
                            : "bg-muted text-muted-foreground"
                        }
                        `}
                    >
                      {step.completed ? (
                        <CheckCircle size={20} />
                      ) : (
                        <Icon size={18} />
                      )}
                    </div>

                    <p
                      className={
                        step.completed
                          ? "font-semibold"
                          : "text-muted-foreground"
                      }
                    >
                      {step.title}
                    </p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* RIGHT SIDE */}

        <div
          className="
          space-y-5
          "
        >
          {/* PAYMENT INFORMATION */}

          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>

            <CardContent
              className="
              space-y-5
              "
            >
              <Info
                icon={<CreditCard size={18} />}
                title="Method"
                value={payment.method}
              />

              <div
                className="
                flex
                items-center
                gap-3
                "
              >
                <CheckCircle size={18} />

                <div>
                  <p
                    className="
                    text-sm
                    text-muted-foreground
                    "
                  >
                    Status
                  </p>

                  <Badge className="mt-1">{payment.status}</Badge>
                </div>
              </div>

              <Info
                icon={<IndianRupee size={18} />}
                title="Amount Paid"
                value={`৳${payment.amount}`}
              />

              <Info
                icon={<CalendarDays size={18} />}
                title="Payment Date"
                value={
                  payment.paidAt
                    ? new Date(payment.paidAt).toLocaleDateString()
                    : "N/A"
                }
              />

              <div>
                <p
                  className="
                  text-sm
                  text-muted-foreground
                  "
                >
                  Transaction ID
                </p>

                <p
                  className="
                  text-sm
                  break-all
                  mt-1
                  "
                >
                  {payment.transactionId}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* ACTION BUTTON */}

          <div
            className="
            space-y-3
            "
          >
            <InvoiceButton />

            <Button
              asChild
              variant="outline"
              className="
              w-full
              h-11
              rounded-xl
              "
            >
              <a
                href={
                  gear?.provider?.email
                    ? `https://mail.google.com/mail/?view=cm&fs=1&to=${gear.provider.email}`
                    : "#"
                }
                target="_blank"
                className="
                flex
                items-center
                justify-center
                gap-3
                "
              >
                <Mail size={18} />
                Contact Provider
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({
  icon,

  title,

  value,
}: {
  icon: React.ReactNode;

  title: string;

  value: string;
}) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      "
    >
      {icon}

      <div>
        <p
          className="
          text-sm
          text-muted-foreground
          "
        >
          {title}
        </p>

        <p
          className="
          font-medium
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}
