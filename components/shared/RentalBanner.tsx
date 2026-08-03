import Link from "next/link";


export default function RentalBanner() {

  return (
    <section className="container mx-auto px-5 py-16">


      <div
        className="
          rounded-2xl
          bg-green-700
          text-white
          p-10
          text-center
        "
      >

        <h2 className="text-3xl md:text-4xl font-bold">
          Ready For Your Next Adventure?
        </h2>


        <p className="mt-3 text-green-100">
          Rent premium outdoor gear from trusted providers today.
        </p>


        <Link
          href="/gear"
          className="
            inline-block
            mt-6
            bg-white
            text-green-700
            px-8
            py-3
            rounded-lg
            font-semibold
            hover:bg-gray-100
            transition
          "
        >
          Browse Gears
        </Link>


      </div>


    </section>
  );
}