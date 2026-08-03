import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const helpTopics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description:
      "Learn how to create an account, find gear and start renting easily.",
  },
  {
    icon: ShieldCheck,
    title: "Account & Security",
    description:
      "Manage your profile, password and account security settings.",
  },
  {
    icon: MessageCircle,
    title: "Rental Support",
    description:
      "Get help with bookings, cancellations and rental issues.",
  },
];


const faqs = [
  {
    question: "How can I rent equipment?",
    answer:
      "Browse available gear, select your preferred dates, and complete the booking process.",
  },
  {
    question: "How do I become a provider?",
    answer:
      "Create an account as a provider and add your equipment from your provider dashboard.",
  },
  {
    question: "Can I cancel my rental?",
    answer:
      "Yes, cancellation depends on the rental status and provider policy.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "We support secure online payments through available payment gateways.",
  },
];


export default function HelpCenterPage() {
  return (
    <main className="container mx-auto px-5 py-16">


      {/* Hero */}

      <section className="text-center mb-14">

        <h1 className="text-4xl font-bold">
          Help Center
        </h1>

        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Find answers, guides and support for your GearUp rental experience.
        </p>




      </section>




      {/* Help Topics */}

      <section className="mb-16">


        <h2 className="text-2xl font-bold mb-6">
          How can we help you?
        </h2>


        <div className="
          grid
          md:grid-cols-3
          gap-6
        ">


          {helpTopics.map((item)=>{

            const Icon = item.icon;


            return (

              <div
                key={item.title}
                className="
                  border
                  rounded-2xl
                  p-6
                  hover:shadow-lg
                  transition
                "
              >

                <Icon
                  size={35}
                  className="text-green-600"
                />


                <h3 className="font-semibold text-lg mt-4">
                  {item.title}
                </h3>


                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>


              </div>

            );

          })}


        </div>


      </section>





      {/* FAQ */}

      <section className="mb-16">


        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions
        </h2>



        <div className="space-y-4 max-w-3xl">


          {faqs.map((faq)=>(

            <details
              key={faq.question}
              className="
                border
                rounded-xl
                p-5
              "
            >

              <summary
                className="
                  cursor-pointer
                  font-semibold
                "
              >
                {faq.question}
              </summary>


              <p className="
                mt-3
                text-muted-foreground
                leading-7
              ">
                {faq.answer}
              </p>


            </details>

          ))}


        </div>


      </section>





      {/* Contact Support */}

      <section
        className="
          rounded-2xl
          border
          bg-muted/30
          p-8
          text-center
        "
      >

        <h2 className="text-2xl font-bold">
          Still need help?
        </h2>


        <p className="text-muted-foreground mt-2">
          Our support team is ready to assist you.
        </p>



        <div className="
          flex
          flex-col
          md:flex-row
          justify-center
          gap-4
          mt-6
        ">


          <Link
            href="mailto:support@gearup.com"
            className="
              flex
              items-center
              justify-center
              gap-2
              border
              rounded-xl
              px-5
              py-3
              hover:bg-background
            "
          >

            <Mail size={18}/>

            Email Support

          </Link>



          <Link
            href="tel:+880123456789"
            className="
              flex
              items-center
              justify-center
              gap-2
              border
              rounded-xl
              px-5
              py-3
              hover:bg-background
            "
          >

            <Phone size={18}/>

            Call Support

          </Link>


        </div>


      </section>



    </main>
  );
}