import {
  Award,
  Globe,
  Users,
  PackageCheck,
} from "lucide-react";


const stats = [
  {
    icon: PackageCheck,
    number: "500+",
    title: "Quality Gears",
  },
  {
    icon: Users,
    number: "100+",
    title: "Trusted Providers",
  },
  {
    icon: Globe,
    number: "50+",
    title: "Locations",
  },
  {
    icon: Award,
    number: "5000+",
    title: "Happy Rentals",
  },
];


export default function AboutSection() {
  return (
    <section className="container mx-auto px-5 py-16">

      <div className="
        grid 
        md:grid-cols-2 
        gap-10 
        items-center
      ">


        {/* Content */}

        <div className="space-y-5">

          <p className="
            text-green-700
            font-semibold
            uppercase
            tracking-wide
          ">
            About GearUp
          </p>


          <h2 className="
            text-3xl
            md:text-4xl
            font-bold
          ">
            Your Trusted Partner For
            Outdoor Gear Rental
          </h2>


          <p className="
            text-muted-foreground
            leading-relaxed
          ">
            GearUp is a modern equipment rental platform
            that connects adventure lovers with trusted
            gear providers. From camping equipment to
            sports accessories, we make renting quality
            gear simple, affordable and convenient.
          </p>


          <p className="
            text-muted-foreground
            leading-relaxed
          ">
            Our mission is to make outdoor adventures
            accessible for everyone by providing a safe
            marketplace where customers can easily find
            and rent the equipment they need.
          </p>


        </div>



        {/* Image */}

        <div className="relative">

          <img
            src="/about.jpg"
            alt="Outdoor adventure"
            className="
              rounded-2xl
              w-full
              h-[400px]
              object-cover
            "
          />

        </div>


      </div>




      {/* Stats */}

      <div className="
        grid
        grid-cols-2
        md:grid-cols-4
        gap-5
        mt-12
      ">


        {stats.map((item)=>{

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                border
                rounded-xl
                p-5
                text-center
                hover:shadow-lg
                transition
              "
            >

              <Icon
                className="
                  mx-auto
                  text-green-700
                "
                size={32}
              />


              <h3 className="
                text-2xl
                font-bold
                mt-3
              ">
                {item.number}
              </h3>


              <p className="
                text-sm
                text-muted-foreground
              ">
                {item.title}
              </p>


            </div>

          );

        })}


      </div>


    </section>
  );
}