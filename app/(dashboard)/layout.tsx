import DashboardSidebar from "@/components/shared/DashboardSidebar";
import { getMe } from "@/server/getMe";
import { redirect } from "next/navigation";

export default async function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();

  if (!user?.data) {
    redirect("/login");
  }

  const role = user.data.role;

  return (
    <div>
      <div className="flex">
        <DashboardSidebar role={role} />

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}