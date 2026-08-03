
import AdminTable, { Column } from "./AdminTable";

type Payment = {
  id: string;

  amount: string | number;

  method: string;

  status: string;

  transactionId: string;

  paidAt: string | null;

  rentalOrder?: {
    id: string;
  };
};

export default function PaymentTable({ payments }: { payments: Payment[] }) {
  const columns = [
    {
      key: "amount",
      label: "Amount",
    },

    {
      key: "method",
      label: "Method",
    },

    {
      key: "status",
      label: "Status",
    },

    {
      key: "transactionId",
      label: "Transaction ID",
    },

    {
      key: "paidAt",
      label: "Paid Date",

      render: (payment: Payment) => (
        <span>
          {payment.paidAt
            ? new Date(payment.paidAt).toLocaleDateString()
            : "Not Paid"}
        </span>
      ),
    },

    {
      key: "rentalOrder",
      label: "Rental",

      render: (payment: Payment) => (
        <span>{payment.rentalOrder?.id || "N/A"}</span>
      ),
    },
  ] satisfies Column<Payment>[];

  return <AdminTable columns={columns} data={payments} />;
}
