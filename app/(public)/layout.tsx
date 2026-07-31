import Navbar from "@/components/shared/Navbar";
import { getMe } from "@/server/getMe";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  console.log(user);

  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
};

export default DashboardLayout;
