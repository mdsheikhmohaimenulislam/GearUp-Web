
import ProviderSidebar from "@/components/shared/ProviderSidebar";
// import { getMe } from "@/server/getMe";

export default async function ProviderDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  // const user = await getMe();

  return (
    <div>

  

      <div className="flex">

        <ProviderSidebar />

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}