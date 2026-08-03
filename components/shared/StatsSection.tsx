const stats = [
  {
    number: "500+",
    title: "Available Gears",
  },
  {
    number: "100+",
    title: "Trusted Providers",
  },
  {
    number: "5000+",
    title: "Happy Customers",
  },
  {
    number: "50+",
    title: "Rental Locations",
  },
];


export default function StatsSection() {
  return (
    <section className="bg-green-700 text-white py-14">

      <div className="
        container
        mx-auto
        px-5
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
      ">


        {stats.map((item)=>(

          <div
            key={item.title}
            className="text-center"
          >

            <h2 className="text-4xl font-bold">
              {item.number}
            </h2>


            <p className="mt-2 text-green-100">
              {item.title}
            </p>


          </div>

        ))}


      </div>

    </section>
  );
}