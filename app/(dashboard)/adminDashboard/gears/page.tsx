import AdminTable, { Column } from "../_components/AdminTable";
import { gearActions } from "../_actions/gearActions";

type Gear = {
  id: string;

  title: string;

  brand: string;

  pricePerDay: string;

  quantityAvailable: number;
};

export default async function GearPage() {
  const response = await gearActions();

  const gears: Gear[] = response?.data || [];

  const columns = [
    {
      key: "title",
      label: "Title",
    },

    {
      key: "brand",
      label: "Brand",
    },

    {
      key: "pricePerDay",
      label: "Price",
    },

    {
      key: "quantityAvailable",
      label: "Available",
    },
  ] satisfies Column<Gear>[];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Manage Gear</h1>

      <AdminTable columns={columns} data={gears} />
    </div>
  );
}
