import {
  Search,
  CalendarCheck,
  CreditCard,
  PackageCheck,
  Truck,
  Star,
} from "lucide-react";


const steps = [
  {
    icon: Search,
    title: "Search Your Gear",
    description:
      "Explore sports and outdoor equipment from verified providers based on your needs.",
  },
  {
    icon: CalendarCheck,
    title: "Choose Rental Dates",
    description:
      "Select your preferred rental period and check gear availability instantly.",
  },
  {
    icon: CreditCard,
    title: "Complete Payment",
    description:
      "Make secure payments through our trusted payment system and confirm your booking.",
  },
  {
    icon: PackageCheck,
    title: "Provider Prepares Gear",
    description:
      "Your selected gear is prepared and checked by the provider before delivery.",
  },
  {
    icon: Truck,
    title: "Receive Your Gear",
    description:
      "Get your equipment on time and start your outdoor adventure without worries.",
  },
  {
    icon: Star,
    title: "Return & Review",
    description:
      "Return the gear safely and share your experience with the GearUp community.",
  },
];


export default function HowItWorks() {
  return (
    <section className="container mx-auto px-5 py-16">


      <div className="text-center mb-10">

        <h2 className="text-3xl md:text-4xl font-bold">
          How It Works
        </h2>

        <p className="text-muted-foreground mt-3">
          Rent your favorite gear in six simple steps
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
          steps.map((step,index)=>{

            const Icon = step.icon;


            return (

              <div
                key={step.title}
                className="
                  border
                  rounded-xl
                  p-6
                  text-center
                  hover:shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
              >


                <div
                  className="
                    mx-auto
                    w-14
                    h-14
                    rounded-full
                    bg-green-100
                    flex
                    items-center
                    justify-center
                    text-green-700
                    mb-4
                  "
                >

                  <Icon size={28}/>

                </div>



                <span
                  className="
                    text-sm
                    text-green-700
                    font-semibold
                  "
                >
                  Step {index + 1}
                </span>



                <h3
                  className="
                    text-xl
                    font-semibold
                    mt-3
                  "
                >
                  {step.title}
                </h3>



                <p
                  className="
                    text-muted-foreground
                    mt-2
                    text-sm
                    leading-relaxed
                  "
                >
                  {step.description}
                </p>



              </div>

            );

          })
        }


      </div>


    </section>
  );
}