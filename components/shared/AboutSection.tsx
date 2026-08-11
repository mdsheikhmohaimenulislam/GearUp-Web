import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const benefits = [
  "Verified and trusted providers",
  "Quality sports and outdoor equipment",
  "Simple and secure rental process",
  "Flexible rental options",
];

export default function AboutSection() {
  return (
    <section className="container mx-auto px-5 py-20">
      {/* Main Content */}
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Content */}
        <div className="max-w-xl">
          {/* Section Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
            <ShieldCheck className="h-4 w-4" />
            About GearUp
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Your Trusted Partner for
            <span className="block text-green-600">Outdoor Gear Rental</span>
          </h2>

          {/* Description */}
          <div className="mt-6 space-y-4">
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              GearUp is a modern equipment rental platform that connects
              adventure lovers with trusted gear providers. From camping
              equipment to sports accessories, we make renting quality gear
              simple, affordable, and convenient.
            </p>

            <p className="text-base leading-7 text-muted-foreground sm:text-lg">
              Our mission is to make outdoor adventures accessible for everyone
              by providing a safe marketplace where customers can easily find
              and rent the equipment they need.
            </p>
          </div>

          {/* Benefits */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border shadow-lg">
            <img
              src="/assets/about.jpg"
              alt="Outdoor adventure"
              className="h-[350px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[420px]"
            />
          </div>

          {/* Image Info Card */}
          <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border bg-background/95 p-5 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:min-w-[280px]">
            <p className="text-sm text-muted-foreground">
              Trusted by adventure lovers
            </p>

            <div className="mt-1 flex items-center gap-2">
              <Award className="h-5 w-5 text-green-600" />

              <span className="text-xl font-bold">Adventure Made Simple</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
