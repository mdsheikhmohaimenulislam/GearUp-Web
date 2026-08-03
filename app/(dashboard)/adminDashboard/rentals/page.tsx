import AdminTable, { Column } from "../_components/AdminTable";
import { orderActions } from "../_actions/gearActions";

type Rental = {
  id: string;

  quantity: number;

  totalPrice: string;

  status: string;

  customer?: {
    name: string;
    email: string;
  };

  gear?: {
    title: string;
    brand: string;
  };
};

export default async function RentalsPage() {
  const response = await orderActions();

  const rentals: Rental[] = response?.data || [];

  const columns = [
    {
      key: "quantity",
      label: "Quantity",
    },

    {
      key: "totalPrice",
      label: "Price",
    },

    {
      key: "status",
      label: "Status",
    },

    {
      key: "customer",
      label: "Customer",

      render: (rental: Rental) => (
        <div>
          <p>{rental.customer?.name}</p>

          <p>{rental.customer?.email}</p>
        </div>
      ),
    },

    {
      key: "gear",
      label: "Gear",

      render: (rental: Rental) => (
        <div>
          <p>{rental.gear?.title}</p>

          <p>{rental.gear?.brand}</p>
        </div>
      ),
    },
  ] satisfies Column<Rental>[];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Rentals</h1>

      <AdminTable columns={columns} data={rentals} />
    </div>
  );
}
