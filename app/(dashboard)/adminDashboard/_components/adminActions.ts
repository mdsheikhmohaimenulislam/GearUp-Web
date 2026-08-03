export const adminActions = [
  {
    title: "Manage Users",
    description: "View and manage all users",
    href: "/adminDashboard/users",
    icon: "users",
  },
  {
    title: "Manage Gears",
    description: "Manage all gear items",
    href: "/adminDashboard/gears",
    icon: "package",
  },
  {
    title: "Manage Rentals",
    description: "Track rental orders",
    href: "/adminDashboard/rentals",
    icon: "shoppingCart",
  },

  {
    title: "Manage Orders",
    description: "Manage all orders",
    href: "/adminDashboard/orders",
    icon: "shoppingCart",
  },
] as const;
