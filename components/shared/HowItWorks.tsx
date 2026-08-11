import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Headphones,
  RefreshCcw,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Trusted Providers",
    description:
      "Rent from verified providers offering quality sports and outdoor equipment you can rely on.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Rental Prices",
    description:
      "Enjoy affordable daily rental rates without compromising on performance or quality.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description:
      "Join thousands of adventurers and gear owners connected through one trusted platform.",
  },
  {
    icon: Zap,
    title: "Easy Booking",
    description:
      "Search gear, choose dates, and confirm your booking in just a few simple steps.",
  },
  {
    icon: RefreshCcw,
    title: "Flexible Rentals",
    description:
      "Select the rental duration that matches your trip and return the gear with ease.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Get fast and friendly support whenever you need help with your rental experience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-green-50 via-background to-background" />

      <div className="container mx-auto px-5">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-in fade-in slide-in-from-left-10 duration-700">
            <span className="inline-flex items-center rounded-full bg-green-100 text-green-700 px-4 py-1 text-sm font-semibold mb-5 shadow-sm">
              Why Choose GearUp
            </span>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Built for Every <span className="text-green-600">Adventure</span>
            </h2>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed max-w-xl dark:text-white">
              We make outdoor and sports gear rental
              <span className="font-medium text-foreground dark:text-green-400">
                {" "}simple, secure, and affordable
              </span>
              {" "}so you can focus on the experience, not the equipment.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <div className="px-4 py-2 rounded-full border bg-background text-sm font-medium shadow-sm hover:shadow transition">
                Verified Providers
              </div>
              <div className="px-4 py-2 rounded-full border bg-background text-sm font-medium shadow-sm hover:shadow transition">
                Secure Payments
              </div>
              <div className="px-4 py-2 rounded-full border bg-background text-sm font-medium shadow-sm hover:shadow transition">
                Flexible Rentals
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="animate-in fade-in slide-in-from-right-10 duration-700 delay-200">
            <div className="relative rounded-3xl border bg-background p-8 shadow-xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200 rounded-full blur-2xl opacity-60" />

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-5 rounded-2xl bg-green-50 border animate-pulse">
                  <div className="text-3xl font-bold text-green-700">1K+</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Gear Listings
                  </p>
                </div>

                <div className="text-center p-5 rounded-2xl bg-green-50 border animate-pulse [animation-delay:300ms]">
                  <div className="text-3xl font-bold text-green-700">500+</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Verified Providers
                  </p>
                </div>

                <div className="text-center p-5 rounded-2xl bg-green-50 border animate-pulse [animation-delay:600ms]">
                  <div className="text-3xl font-bold text-green-700">24/7</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Support
                  </p>
                </div>

                <div className="text-center p-5 rounded-2xl bg-green-50 border animate-pulse [animation-delay:900ms]">
                  <div className="text-3xl font-bold text-green-700">99%</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Happy Renters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border bg-background p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-xl font-semibold mt-5">{item.title}</h3>

                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}