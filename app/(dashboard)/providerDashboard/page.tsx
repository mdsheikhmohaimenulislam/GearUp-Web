import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, ShoppingCart, DollarSign, Star } from 'lucide-react'

export default function ProviderDashboardPage() {
  const stats = [
    {
      title: 'Total Gear',
      value: '24',
      icon: Package,
    },
    {
      title: 'Total Rentals',
      value: '156',
      icon: ShoppingCart,
    },
    {
      title: 'Total Revenue',
      value: '$3,240',
      icon: DollarSign,
    },
    {
      title: 'Average Rating',
      value: '4.8',
      icon: Star,
    },
  ]

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Provider Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your gear, rentals, and earnings.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Rentals</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Mountain Bike</p>
                <p className="text-sm text-muted-foreground">Rented by John Doe</p>
              </div>

              <span className="text-sm font-medium text-green-600">Active</span>
            </div>

            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="font-medium">Camping Tent</p>
                <p className="text-sm text-muted-foreground">Rented by Sarah Lee</p>
              </div>

              <span className="text-sm font-medium text-blue-600">Returned</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Kayak</p>
                <p className="text-sm text-muted-foreground">Rented by Alex Smith</p>
              </div>

              <span className="text-sm font-medium text-yellow-600">Pending</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>

          <CardContent className="grid gap-3">
            <button className="rounded-lg border p-3 text-left hover:bg-muted transition">
              <p className="font-medium">Add New Gear</p>
              <p className="text-sm text-muted-foreground">
                Create a new gear listing
              </p>
            </button>

            <button className="rounded-lg border p-3 text-left hover:bg-muted transition">
              <p className="font-medium">Manage Orders</p>
              <p className="text-sm text-muted-foreground">
                View and update rental orders
              </p>
            </button>

            <button className="rounded-lg border p-3 text-left hover:bg-muted transition">
              <p className="font-medium">View Earnings</p>
              <p className="text-sm text-muted-foreground">
                Check revenue and payouts
              </p>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}