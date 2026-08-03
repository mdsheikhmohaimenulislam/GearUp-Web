import {
  Users,
  Package,
  ShoppingCart,
  CreditCard,
  TrendingUp,
} from "lucide-react";

export default async function AdminDashboardPage() {
  return (
    <div className="container mx-auto py-10 space-y-8">
      
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage users, gears, rentals and platform activities.
        </p>
      </div>


      {/* Stats */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <DashboardCard
          title="Total Users"
          value="120"
          icon={<Users />}
        />


        <DashboardCard
          title="Total Gears"
          value="85"
          icon={<Package />}
        />


        <DashboardCard
          title="Total Rentals"
          value="230"
          icon={<ShoppingCart />}
        />


        <DashboardCard
          title="Revenue"
          value="৳45,000"
          icon={<CreditCard />}
        />

      </div>



      {/* Overview */}

      <div className="grid lg:grid-cols-2 gap-6">


        {/* Recent Rentals */}

        <div className="border rounded-xl p-6 shadow-sm">

          <div className="flex items-center gap-2 mb-5">

            <TrendingUp
              className="text-green-600"
            />

            <h2 className="text-xl font-semibold">
              Recent Rentals
            </h2>

          </div>


          <div className="space-y-4">


            {
              [1,2,3].map((item)=>(
                <div
                  key={item}
                  className="flex justify-between border-b pb-3"
                >

                  <div>
                    <p className="font-medium">
                      Customer #{item}
                    </p>

                    <p className="text-sm text-gray-500">
                      Football Rental
                    </p>

                  </div>


                  <span className="text-green-600 font-semibold">
                    Completed
                  </span>

                </div>
              ))
            }


          </div>

        </div>





        {/* Quick Actions */}

        <div className="border rounded-xl p-6 shadow-sm">

          <h2 className="text-xl font-semibold mb-5">
            Quick Actions
          </h2>


          <div className="grid gap-4">


            <ActionButton>
              Manage Users
            </ActionButton>


            <ActionButton>
              Manage Gear Items
            </ActionButton>


            <ActionButton>
              View Orders
            </ActionButton>


            <ActionButton>
              Manage Payments
            </ActionButton>


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
}:{
  title:string;
  value:string;
  icon:React.ReactNode;
}) {


  return (

    <div
      className="
      border rounded-xl
      p-5
      shadow-sm
      hover:shadow-md
      transition
      "
    >

      <div className="flex justify-between items-center">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>


          <h3 className="text-2xl font-bold mt-2">
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





function ActionButton({
  children,
}:{
  children:React.ReactNode;
}) {


  return (

    <button
      className="
      w-full
      text-left
      border
      rounded-lg
      px-4
      py-3
      hover:bg-green-50
      transition
      "
    >

      {children}

    </button>

  );

}