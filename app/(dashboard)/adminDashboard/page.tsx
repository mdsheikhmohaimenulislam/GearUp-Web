import {
  Users,
  Package,
  ShoppingCart,
  CreditCard,
  BadgeDollarSign,
  Wallet,
  UserCheck,
  Clock,
} from "lucide-react";

import {
  getUsers,
  getAdminGear,
  getAdminRentals,
} from "@/server/admin.service";

import RecentRentals from "./_components/RecentRentals";
import AdminActionCard from "./_components/AdminActionCard";
import { adminActions } from "./_components/adminActions";

type Payment = {
  id: string;
  amount: string | number;
  status: "PAID" | "PENDING" | "FAILED";
};

type Rental = {
  id: string;

  quantity: number;

  totalPrice: string | number;

  status: string;

  payment?: Payment[];
};

type User = {
  id: string;

  name: string;

  email: string;

  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
};

type Gear = {
  id: string;

  title: string;

  pricePerDay: string | number;

  quantityAvailable: number;
};

export default async function AdminDashboardPage() {
  const [usersResponse, gearsResponse, rentalsResponse] = await Promise.all([
    getUsers(),

    getAdminGear(),

    getAdminRentals(),
  ]);

  const users: User[] = usersResponse?.data?.users || [];

  // FIX HERE

  const gears: Gear[] = gearsResponse?.data?.gears || [];

  const rentals: Rental[] = rentalsResponse?.data || [];

  // Statistics

  const totalUsers = users.length;

  const customers = users.filter((user) => user.role === "CUSTOMER").length;

  const providers = users.filter((user) => user.role === "PROVIDER").length;

  const totalGears = gears.length;

  const activeGears = gears.filter((gear) => gear.quantityAvailable > 0).length;

  const totalRentals = rentals.length;

  const pendingRentals = rentals.filter(
    (rental) => rental.status === "PLACED",
  ).length;

  const revenue = rentals.reduce(
    (total, rental) => {
      const paidAmount =
        rental.payment
          ?.filter((payment) => payment.status === "PAID")
          .reduce(
            (sum, payment) => sum + Number(payment.amount || 0),

            0,
          ) || 0;

      return total + paidAmount;
    },

    0,
  );

  const paidPaymentsCount = rentals.reduce(
    (count, rental) => {
      const paid =
        rental.payment?.filter((payment) => payment.status === "PAID").length ||
        0;

      return count + paid;
    },

    0,
  );

  const platformFee = revenue * 0.1;

  const providerPayout = Math.round(revenue - platformFee);

  return (
    <div
      className="
container mx-auto py-10 space-y-8
"
    >
      {/* Header */}

      <div>
        <h1
          className="
text-3xl font-bold
"
        >
          Admin Dashboard
        </h1>

        <p
          className="
text-muted-foreground mt-2
"
        >
          Monitor users, gears, rentals and platform activity.
        </p>
      </div>

      {/* Stats */}

      <div
        className="
grid
gap-5
sm:grid-cols-2
lg:grid-cols-4
xl:grid-cols-6
"
      >
        <DashboardCard
          title="Total Users"
          value={String(totalUsers)}
          icon={<Users />}
        />

        <DashboardCard
          title="Customers"
          value={String(customers)}
          icon={<UserCheck />}
        />

        <DashboardCard
          title="Providers"
          value={String(providers)}
          icon={<Users />}
        />

        <DashboardCard
          title="Total Gear"
          value={String(totalGears)}
          icon={<Package />}
        />

        <DashboardCard
          title="Active Gear"
          value={String(activeGears)}
          icon={<Package />}
        />

        <DashboardCard
          title="Total Rentals"
          value={String(totalRentals)}
          icon={<ShoppingCart />}
        />

        <DashboardCard
          title="Pending Rentals"
          value={String(pendingRentals)}
          icon={<Clock />}
        />

        <DashboardCard
          title="Revenue"
          value={`৳${revenue.toLocaleString()}`}
          icon={<CreditCard />}
        />

        <DashboardCard
          title="Paid Payments"
          value={String(paidPaymentsCount)}
          icon={<BadgeDollarSign />}
        />

        <DashboardCard
          title="Provider Payout"
          value={`৳${providerPayout.toLocaleString()}`}
          icon={<Wallet />}
        />
      </div>

      <div
        className="
grid lg:grid-cols-2 gap-6
"
      >
        <RecentRentals rentals={rentals} />

        <div
          className="
border rounded-xl p-6 shadow-sm
"
        >
          <h2
            className="
text-xl font-semibold mb-5
"
          >
            Quick Actions
          </h2>

          <div
            className="
space-y-3
"
          >
            {adminActions.map((action) => (
              <AdminActionCard
                key={action.title}
                title={action.title}
                description={action.description}
                href={action.href}
                icon={action.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({
  title,

  value,

  icon,
}: {
  title: string;

  value: string;

  icon: React.ReactNode;
}) {
  return (
    <div
      className="
border
rounded-xl
p-5
shadow-sm
hover:shadow-md
transition
"
    >
      <div
        className="
flex justify-between items-center
"
      >
        <div>
          <p
            className="
text-sm text-muted-foreground
"
          >
            {title}
          </p>

          <h3
            className="
text-2xl font-bold mt-2
"
          >
            {value}
          </h3>
        </div>

        <div
          className="
p-3 rounded-lg bg-green-100 text-green-700
"
        >
          {icon}
        </div>
      </div>
    </div>
  );
}
