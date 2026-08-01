"use client";

type Props = {
  user: {
    name: string;
    email: string;
  };
};

export default function AdminDashboard({ user }: Props) {
  return (
    <div className="space-y-5">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <p className="text-gray-500">Welcome back, {user.name}</p>

      <div
        className="
border
rounded-xl
p-6
"
      >
        <h2 className="text-xl font-semibold">Platform Overview</h2>

        <p className="text-gray-500 mt-2">Manage users, gears and orders.</p>
      </div>
    </div>
  );
}
