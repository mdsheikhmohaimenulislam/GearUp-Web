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
      "Rent from verified providers who offer quality sports and outdoor equipment.",
  },
  {
    icon: BadgeDollarSign,
    title: "Best Rental Prices",
    description:
      "Enjoy affordable daily rental rates without compromising on equipment quality.",
  },
  {
    icon: Users,
    title: "Growing Community",
    description:
      "Join thousands of adventure lovers and gear owners in one platform.",
  },
  {
    icon: Zap,
    title: "Easy Booking",
    description:
      "Find gear, select dates, and complete your rental booking in just a few clicks.",
  },
  {
    icon: RefreshCcw,
    title: "Flexible Rentals",
    description:
      "Choose rental duration that fits your adventure plans and return easily.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    description:
      "Our support team is always ready to help you with any rental issues.",
  },
];


export default function WhyChooseUs() {
  return (
    <section className="bg-muted/30 py-16">

      <div className="container mx-auto px-5">


        <div className="text-center mb-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose GearUp?
          </h2>

          <p className="text-muted-foreground mt-3">
            We make outdoor gear rental simple, safe, and convenient.
          </p>

        </div>



        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {
            features.map((item)=>{

              const Icon = item.icon;


              return (

                <div
                  key={item.title}
                  className="
                    bg-background
                    border
                    rounded-xl
                    p-6
                    hover:shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >


                  <div
                    className="
                      w-12
                      h-12
                      rounded-lg
                      bg-green-100
                      flex
                      items-center
                      justify-center
                      text-green-700
                    "
                  >

                    <Icon size={28}/>

                  </div>



                  <h3
                    className="
                      font-semibold
                      text-xl
                      mt-5
                    "
                  >
                    {item.title}
                  </h3>



                  <p
                    className="
                      text-muted-foreground
                      mt-2
                      text-sm
                      leading-relaxed
                    "
                  >
                    {item.description}
                  </p>



                </div>

              );

            })
          }


        </div>


      </div>


    </section>
  );
}