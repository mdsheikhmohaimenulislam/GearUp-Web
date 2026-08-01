import AdminDashboard from "@/app/(public)/_components/(admin)/AdminDashboard";
import CustomerDashboard from "@/app/(public)/_components/CustomerDashboard";
import { Payment } from "@/lib/types";
import { getMe } from "@/server/getMe";
import { getMyPayments } from "@/server/payment.service";

export default async function DashboardPage() {
  // temporary test user

  const data = await getMe();

  const user = data?.data;

  if (!user) {
    return null;
  }
  // CUSTOMER STATS
  if (user.role === "CUSTOMER") {
    const paymentsRes = await getMyPayments();

    const payments: Payment[] = paymentsRes?.data || [];

    const stats = {
      totalRentals: payments.length,
      activeOrders: payments.filter((p) => p.status === "PAID").length,
      pendingReturns: payments.filter((p) => p.status === "PENDING").length,
      returnedOrders: payments.filter(
        (p) => p.rentalOrder?.status === "RETURNED",
      ).length,
    };

    return <CustomerDashboard user={user} stats={stats} />;
  }

  // ADMIN DASHBOARD
  if (user.role === "ADMIN") {
    return <AdminDashboard user={user} />;
  }

  return null;
}
