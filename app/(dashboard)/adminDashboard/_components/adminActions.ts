import {
  Users,
  Package,
  CalendarDays,
  ShoppingCart,
  CreditCard,
} from "lucide-react";


export const adminActions = [

{
 title:"Manage Users",
 description:"View and manage all users",
 href:"/adminDashboard/users",
 icon:Users,
},


{
 title:"Manage Gears",
 description:"Manage all gear items",
 href:"/adminDashboard/gears",
 icon:Package,
},


{
 title:"Manage Rentals",
 description:"Track rental orders",
 href:"/adminDashboard/rentals",
 icon:CalendarDays,
},


{
 title:"Manage Orders",
 description:"Manage all orders",
 href:"/adminDashboard/orders",
 icon:ShoppingCart,
},


{
 title:"Manage Payments",
 description:"Manage all payments",
 href:"/adminDashboard/payments",
 icon:CreditCard,
},

];