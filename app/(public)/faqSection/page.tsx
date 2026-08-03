import {
  HelpCircle,
  ChevronDown,
} from "lucide-react";


const faqs = [
  {
    q: "How can I rent outdoor gear from GearUp?",
    a: "Simply browse available equipment, select your preferred gear, choose rental dates, and complete the booking process. After confirmation, the provider will prepare your gear.",
  },
  {
    q: "Are all gear providers verified?",
    a: "Yes. GearUp reviews and verifies providers to ensure customers get safe, reliable, and quality equipment from trusted owners.",
  },
  {
    q: "What types of equipment can I rent?",
    a: "You can rent different types of outdoor and sports equipment including camping gear, hiking equipment, cycling accessories, sports items, and adventure essentials.",
  },
  {
    q: "How does payment work?",
    a: "We provide secure online payment options. After confirming your rental, you can complete payment safely through available payment methods.",
  },
  {
    q: "Can I cancel my rental booking?",
    a: "Cancellation depends on the rental policy and booking status. You can check your booking details from your dashboard.",
  },
  {
    q: "How do I become a provider?",
    a: "Register as a provider, add your equipment details, upload images, set rental prices, and start earning by renting your gear.",
  },
];



export default function FAQSection() {


  return (

    <section
      id="faq"
      className="container mx-auto px-5 py-20"
    >



      {/* Header */}

      <div className="text-center max-w-2xl mx-auto mb-12">


        <div
          className="
            mx-auto
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-green-100
            text-green-700
          "
        >

          <HelpCircle size={26}/>

        </div>



        <h2 className="text-3xl md:text-4xl font-bold">

          Frequently Asked Questions

        </h2>



        <p className="mt-3 text-muted-foreground">

          Find answers to common questions about renting,
          booking, payments, and GearUp services.

        </p>


      </div>





      {/* FAQ List */}


      <div
        className="
          max-w-4xl
          mx-auto
          grid
          gap-5
        "
      >


        {
          faqs.map((item,index)=>(


            <details

              key={item.q}

              className="
                group
                rounded-2xl
                border
                bg-background
                p-6
                transition
                hover:shadow-md
              "

            >



              <summary
                className="
                  flex
                  cursor-pointer
                  list-none
                  items-center
                  justify-between
                  font-semibold
                  text-lg
                "
              >


                <span className="flex gap-3">


                  <span
                    className="
                      text-green-600
                    "
                  >
                    0{index + 1}.
                  </span>


                  {item.q}


                </span>



                <ChevronDown
                  className="
                    transition
                    group-open:rotate-180
                  "
                />


              </summary>




              <p
                className="
                  mt-4
                  pl-10
                  leading-7
                  text-muted-foreground
                "
              >

                {item.a}

              </p>



            </details>


          ))
        }


      </div>



    </section>

  );
}