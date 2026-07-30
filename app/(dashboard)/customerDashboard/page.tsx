
import CustomerDashboard from "@/app/(public)/_components/CustomerDashboard";
import { getMe } from "@/server/getMe";


export default async function CustomerDashboardPage(){


  const user = await getMe();



  return (

    <div className="container mx-auto py-10 px-4">


      <CustomerDashboard
        user={user.data}
      />


    </div>

  );

}