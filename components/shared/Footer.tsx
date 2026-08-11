import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { name: "Browse Gear", href: "/gear" },
  { name: "About Us", href: "/about" },
];

const supportLinks = [
  { name: "Help Center", href: "/help-center" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_35%)]" />

      <div className="container relative mx-auto px-5 py-16">
        {/* Top Grid */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white shadow-lg">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight">GearUp</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">
              Rent premium sports and outdoor equipment from trusted providers.
              Whether its camping, hiking, cycling, or water sports,
              GearUp makes every adventure easier.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50 hover:text-green-700 dark:hover:border-green-800 dark:hover:bg-green-950/30 dark:hover:text-green-400"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50 hover:text-green-700 dark:hover:border-green-800 dark:hover:bg-green-950/30 dark:hover:text-green-400"
              >
                <FaInstagram className="h-4 w-4" />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:bg-green-50 hover:text-green-700 dark:hover:border-green-800 dark:hover:bg-green-950/30 dark:hover:text-green-400"
              >
                <FaXTwitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-green-700 dark:hover:text-green-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-green-700 dark:hover:text-green-400"
                  >
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Get in Touch
            </h3>

            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-green-600 dark:text-green-400" />
                <span>support@gearup.com</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-green-600 dark:text-green-400" />
                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-green-600 dark:text-green-400" />
                <span>Rajshahi, Bangladesh</span>
              </div>
            </div>

            {/* CTA Card */}
            <div className="mt-6 rounded-2xl border bg-gradient-to-br from-green-50 to-emerald-50 p-5 dark:border-green-900/50 dark:from-green-950/20 dark:to-emerald-950/10">
              <h4 className="font-semibold text-foreground">
                Start Renting Today
              </h4>

              <p className="mt-2 text-sm leading-5 text-muted-foreground">
                Discover quality gear for your next adventure.
              </p>

              <Link
                href="/gear"
                className="group mt-4 inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
              >
                Browse Gear
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-border" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GearUp. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm">


            <Link
              href="/help-center"
              className="text-muted-foreground transition-colors hover:text-green-700 dark:hover:text-green-400"
            >
              Help
            </Link>

            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-green-700 dark:hover:text-green-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
