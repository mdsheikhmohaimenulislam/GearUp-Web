import AdminTable, { Column } from "../_components/AdminTable";

import Pagination from "../_components/Pagination";
import GearFilter from "../_components/GearFilter";
import GearActionButton from "../_components/GearActionButton";
import { gearActions } from "../../_actions/gearActions";

type Gear = {
  id: string;

  title: string;

  brand: string;

  pricePerDay: string | number;

  quantityAvailable: number;

  isActive: boolean;

  createdAt: string;

  category?: {
    name: string;
  };

  provider?: {
    name: string;
    email: string;
  };
};

export default async function GearPage({
  searchParams,
}: {
  searchParams: Promise<{
    search?: string;

    category?: string;

    available?: string;

    page?: string;
  }>;
}) {
  const params = await searchParams;

  const response = await gearActions({
    search: params.search || "",

    category: params.category || "",

    available: params.available || "",

    page: params.page || "1",

    limit: "10",
  });

  const gears: Gear[] = response?.data?.gears || [];

  const meta = response?.data?.meta;

  const columns = [
    {
      key: "title",

      label: "Gear",

      render: (gear: Gear) => (
        <div>
          <p className="font-medium">{gear.title}</p>

          <p className="text-sm text-muted-foreground">{gear.brand}</p>
        </div>
      ),
    },

    {
      key: "category",

      label: "Category",

      render: (gear: Gear) => <span>{gear.category?.name || "N/A"}</span>,
    },

    {
      key: "pricePerDay",

      label: "Price",

      render: (gear: Gear) => (
        <span>৳{Number(gear.pricePerDay).toLocaleString()}/day</span>
      ),
    },

    {
      key: "quantityAvailable",

      label: "Stock",

      render: (gear: Gear) => {
        const available = gear.quantityAvailable > 0;

        return (
          <span
            className={`
px-3 py-1 rounded-full text-sm
${available ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
`}
          >
            {available ? `${gear.quantityAvailable} Available` : "Out of Stock"}
          </span>
        );
      },
    },

    {
      key: "provider",

      label: "Provider",

      render: (gear: Gear) => (
        <div>
          <p className="font-medium">{gear.provider?.name || "N/A"}</p>

          <p className="text-sm text-muted-foreground">
            {gear.provider?.email}
          </p>
        </div>
      ),
    },

    {
      key: "isActive",

      label: "Status",

      render: (gear: Gear) => (
        <span
          className={`
px-3 py-1 rounded-full text-sm

${gear.isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}

`}
        >
          {gear.isActive ? "Active" : "Disabled"}
        </span>
      ),
    },

    {
      key: "createdAt",

      label: "Created",

      render: (gear: Gear) => (
        <span>{new Date(gear.createdAt).toISOString().split("T")[0]}</span>
      ),
    },

    {
      key: "id",

      label: "Action",

      render: (gear: Gear) => (
        <GearActionButton
          gear={{
            id: gear.id,
            isActive: gear.isActive,
          }}
        />
      ),
    },
  ] satisfies Column<Gear>[];

  return (
    <div
      className="
container mx-auto py-10
"
    >
      <h1
        className="
text-3xl font-bold mb-6
"
      >
        Manage Gear
      </h1>

      <GearFilter />

      <AdminTable columns={columns} data={gears} />

      {meta && <Pagination page={meta.page} totalPage={meta.totalPage} />}
    </div>
  );
}
