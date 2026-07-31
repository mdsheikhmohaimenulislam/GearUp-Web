import AdminDashboard from "@/app/(public)/_components/(admin)/AdminDashboard";
import CustomerDashboard from "@/app/(public)/_components/CustomerDashboard";



export default async function DashboardPage() {


  // temporary test
  const user = {
    id: "1",
    name: "loi2",
    email: "loi6@gmail.com",
    role: "CUSTOMER",
  };



  if (user.role === "CUSTOMER") {

    return (
      <CustomerDashboard
        user={user}
      />
    );

  }





  if (user.role === "ADMIN") {

    return (
      <AdminDashboard
        user={user}
      />
    );

  }



  return null;

}