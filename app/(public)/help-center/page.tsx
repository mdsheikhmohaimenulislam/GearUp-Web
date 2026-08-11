
import {
  Search,
  MessageCircle,
  Mail,
  Phone,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const helpTopics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description:
      "Learn how to create an account, explore gear, and make your first rental.",
  },
  {
    icon: ShieldCheck,
    title: "Account & Security",
    description:
      "Manage your account, update your profile, and keep your information secure.",
  },
  {
    icon: MessageCircle,
    title: "Rental Support",
    description:
      "Get assistance with bookings, payments, cancellations, and rental issues.",
  },
];

const faqs = [
  {
    question: "How can I rent equipment?",
    answer:
      "Browse the available gear, select your preferred rental dates, review the rental details, and complete the booking process securely.",
  },
  {
    question: "How do I become a provider?",
    answer:
      "Create a provider account and access your provider dashboard. From there, you can add, update, and manage your equipment listings.",
  },
  {
    question: "Can I cancel my rental?",
    answer:
      "Yes. Cancellation availability depends on the current rental status and the cancellation policy associated with your booking.",
  },
  {
    question: "What payment methods are available?",
    answer:
      "GearUp supports secure online payments through the available payment gateways during the checkout process.",
  },
  {
    question: "How can I check my rental status?",
    answer:
      "You can check your current and previous rental bookings from your dashboard and view the latest status of each rental.",
  },
];

export default function HelpCenterPage() {
  return (
    <main className="container mx-auto px-5 py-16 md:py-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-5 flex w-fit items-center gap-2 rounded-full border bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
          <HelpCircle className="h-4 w-4" />
          GearUp Help Center
        </div>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          How Can We
          <span className="block text-green-600">
            Help You?
          </span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          Find answers, helpful guides, and support for everything related
          to your GearUp rental experience.
        </p>

        {/* Search */}
        {/* <div className="mx-auto mt-8 flex max-w-2xl items-center gap-3 rounded-2xl border bg-background px-5 py-4 shadow-sm transition-all duration-300 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search for answers..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div> */}
      </section>

      {/* Help Topics */}
      <section className="mt-20">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Support Topics
          </p>

          <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                What can we help with?
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                Choose a topic to find the information you need.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {helpTopics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
{/* 
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700">
                  Explore topic
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div> */}
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
            Common Questions
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
            Quick answers to some of the most common questions from
            GearUp customers and providers.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-xl border bg-background transition-all duration-300 hover:border-green-200 open:border-green-300 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-semibold">
                <span className="text-sm sm:text-base">
                  {faq.question}
                </span>

                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted">
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>

              <div className="px-5 pb-5">
                <p className="border-t pt-4 text-sm leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Support CTA */}
      <section className="mt-20">
        <div className="relative overflow-hidden rounded-3xl border bg-green-50 px-6 py-12 text-center sm:px-10">
          {/* Decorative Elements */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-200/40 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-40 w-40 rounded-full bg-green-200/40 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white shadow-sm">
              <MessageCircle className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-2xl font-bold sm:text-3xl dark:text-black">
              Still Need Help?
            </h2>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-green-900/70 sm:text-base">
              Our support team is always ready to help. Get in touch
              with us and we&apos;ll do our best to assist you.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="mailto:support@gearup.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-800 hover:shadow-md"
              >
                <Mail className="h-4 w-4" />
                Email Support
              </Link>

              <Link
                href="tel:+880123456789"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-white px-6 py-3 text-sm font-semibold text-green-700 transition-all duration-300 hover:bg-green-100"
              >
                <Phone className="h-4 w-4" />
                Call Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

