import AdminTable, { Column } from "../_components/AdminTable";
import UserActionButton from "../_components/UserActionButton";
import { getUserActions } from "../_actions/gearActions";
type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "ACTIVE" | "BLOCKED";
};
export default async function UsersPage() {
  const response = await getUserActions();
  const users: User[] = response?.data?.users || [];
  const columns = [
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    {
      key: "status",
      label: "Status",
      render: (user: User) => (
        <span
          className={
            user.status === "ACTIVE"
              ? "text-green-600 font-medium"
              : "text-red-600 font-medium"
          }
        >
          {" "}
          {user.status}{" "}
        </span>
      ),
    },
    {
      key: "id",
      label: "Action",
      render: (user: User) => <UserActionButton user={user} />,
    },
  ] satisfies Column<User>[];
  return (
    <div className="container mx-auto py-10 space-y-6">
      {" "}
      <div>
        {" "}
        <h1 className="text-3xl font-bold">Manage Users</h1>{" "}
        <p className="text-muted-foreground mt-2">
          {" "}
          View, block, and activate platform users.{" "}
        </p>{" "}
      </div>{" "}
      <AdminTable columns={columns} data={users} />{" "}
    </div>
  );
}
