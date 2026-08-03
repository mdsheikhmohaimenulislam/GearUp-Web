import {
  Users,
  Package,
  ShoppingCart,
  CreditCard,
  BadgeDollarSign,
  Wallet,
} from "lucide-react";

import {
  getUsers,
  getAdminGear,
  getAdminRentals,
} from "@/server/admin.service";

import RecentRentals from "./_components/RecentRentals";

export default async function AdminDashboardPage() {
  const [usersResponse, gearsResponse, rentalsResponse] = await Promise.all([
    getUsers(),
    getAdminGear(),
    getAdminRentals(),
  ]);

  const users = usersResponse?.data?.users || [];

  const gears = gearsResponse?.data || [];

  const rentals = rentalsResponse?.data || [];

  const totalUsers = users.length;

  const totalGears = gears.length;

  const totalRentals = rentals.length;

  const revenue = rentals.reduce(
    (
      total: number,
      rental: {
        payment?: {
          status?: string;
          amount?: string | number;
        }[];
      },
    ) => {
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
    (
      count: number,
      rental: {
        payment?: {
          status?: string;
        }[];
      },
    ) => {
      const paidCount =
        rental.payment?.filter((payment) => payment.status === "PAID").length ||
        0;

      return count + paidCount;
    },
    0,
  );

  const commissionRate = 0.1;

  const platformFee = revenue * commissionRate;

  const providerPayout = Math.round(revenue - platformFee);

  return (
    <div
      className="
      container
      mx-auto
      py-10
      space-y-8
      "
    >
      {/* Header */}

      <div>
        <h1
          className="
          text-3xl
          font-bold
          "
        >
          Admin Dashboard
        </h1>

        <p
          className="
          text-muted-foreground
          mt-2
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
        lg:grid-cols-5
        "
      >
        <DashboardCard
          title="Total Users"
          value={String(totalUsers)}
          icon={<Users />}
        />

        <DashboardCard
          title="Total Gears"
          value={String(totalGears)}
          icon={<Package />}
        />

        <DashboardCard
          title="Total Rentals"
          value={String(totalRentals)}
          icon={<ShoppingCart />}
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

      {/* Dashboard Content */}

      <div
        className="
        grid
        lg:grid-cols-2
        gap-6
        "
      >
        <RecentRentals rentals={rentals} />

        <div
          className="
          border
          rounded-xl
          p-6
          shadow-sm
          "
        >
          <h2
            className="
            text-xl
            font-semibold
            mb-5
            "
          >
            Quick Actions
          </h2>

          <div
            className="
            space-y-3
            "
          >
            <ActionButton>Manage Users</ActionButton>

            <ActionButton>Manage Gear Items</ActionButton>

            <ActionButton>Manage Rentals</ActionButton>

            <ActionButton>Manage Payments</ActionButton>
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
        flex
        justify-between
        items-center
        "
      >
        <div>
          <p
            className="
            text-sm
            text-muted-foreground
            "
          >
            {title}
          </p>

          <h3
            className="
            text-2xl
            font-bold
            mt-2
            "
          >
            {value}
          </h3>
        </div>

        <div
          className="
          p-3
          rounded-lg
          bg-green-100
          text-green-700
          "
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

function ActionButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="
      w-full
      border
      rounded-lg
      px-4
      py-3
      text-left
      hover:bg-muted
      transition
      "
    >
      {children}
    </button>
  );
}
