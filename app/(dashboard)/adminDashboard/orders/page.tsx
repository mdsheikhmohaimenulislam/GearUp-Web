import AdminTable, { Column } from "../_components/AdminTable";
import OrderStatusBadge from "../_components/OrderStatusBadge";
import { orderActions } from "../_actions/gearActions";

type Order = {
  id: string;

  quantity: number;

  totalPrice: string | number;

  status: "PENDING" | "CONFIRMED" | "RETURNED" | "CANCELLED";

  customer?: {
    name: string;
    email: string;
  };

  gear?: {
    title: string;
    brand: string;
  };

  payment?: {
    status: string;
    amount: string | number;
  }[];
};

export default async function AdminOrdersPage() {
  const response = await orderActions() ;

  const orders: Order[] = response?.data || [];

  const columns = [
    {
      key: "quantity",
      label: "Quantity",
    },

    {
      key: "totalPrice",
      label: "Total Price",
    },

    {
      key: "status",
      label: "Status",

      render: (order: Order) => <OrderStatusBadge status={order.status} />,
    },

    {
      key: "customer",
      label: "Customer",

      render: (order: Order) => (
        <div>
          <p className="font-medium">{order.customer?.name}</p>

          <p className="text-sm text-muted-foreground">
            {order.customer?.email}
          </p>
        </div>
      ),
    },

    {
      key: "gear",
      label: "Gear",

      render: (order: Order) => (
        <div>
          <p className="font-medium">{order.gear?.title}</p>

          <p className="text-sm text-muted-foreground">{order.gear?.brand}</p>
        </div>
      ),
    },

    {
      key: "payment",
      label: "Payment",

      render: (order: Order) => (
        <div>
          {order.payment?.map((payment, index) => (
            <p key={index}>
              {payment.status}
              {" - "}৳{payment.amount}
            </p>
          ))}
        </div>
      ),
    },
  ] satisfies Column<Order>[];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Orders</h1>

      <AdminTable columns={columns} data={orders} />
    </div>
  );
}
