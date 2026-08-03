const providers = [
  {
    name: "Adventure Hub",
    location: "Dhaka",
    gears: "120+ Gears",
  },
  {
    name: "Outdoor World",
    location: "Chittagong",
    gears: "80+ Gears",
  },
  {
    name: "Explorer Zone",
    location: "Sylhet",
    gears: "60+ Gears",
  },
];


export default function FeaturedProviders() {
  return (
    <section className="container mx-auto px-5 py-16">


      <div className="text-center mb-10">

        <h2 className="text-3xl font-bold">
          Featured Providers
        </h2>

        <p className="text-muted-foreground mt-2">
          Trusted gear providers around you
        </p>

      </div>



      <div className="grid md:grid-cols-3 gap-6">

        {providers.map((provider)=>(

          <div
            key={provider.name}
            className="
              border
              rounded-xl
              p-6
              hover:shadow-lg
              transition
            "
          >

            <h3 className="text-xl font-semibold">
              {provider.name}
            </h3>


            <p className="text-muted-foreground mt-2">
              📍 {provider.location}
            </p>


            <p className="text-green-700 font-medium mt-3">
              {provider.gears}
            </p>


          </div>

        ))}


      </div>


    </section>
  );
}