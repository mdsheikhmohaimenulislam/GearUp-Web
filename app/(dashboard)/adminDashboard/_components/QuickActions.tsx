import Link from "next/link";


const actions=[

{
title:"Manage Users",
href:"/adminDashboard/users"
},

{
title:"Manage Gear",
href:"/adminDashboard/gears"
},

{
title:"Manage Orders",
href:"/adminDashboard/orders"
},

{
title:"Payments",
href:"/adminDashboard/payments"
}

];



export default function QuickActions(){


return (

<div
className="
border
rounded-xl
p-6
shadow-sm
"
>


<h2 className="text-xl font-semibold mb-5">
Quick Actions
</h2>



<div className="space-y-3">


{
actions.map(action=>(

<Link

key={action.href}

href={action.href}

className="
block
border
rounded-lg
px-4
py-3
hover:bg-green-50
transition
"

>

{action.title}


</Link>

))
}



</div>


</div>

);


}