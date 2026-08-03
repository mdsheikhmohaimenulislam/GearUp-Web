import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Search,
  CalendarCheck,
  PackageCheck,
  ShieldCheck,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const links = [
  {
    title: "Company",
    items: [
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Gears",
        href: "/gear",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    title: "Support",
    items: [
      {
        name: "Help Center",
        href: "/help",
      },
      {
        name: "Privacy Policy",
        href: "/privacy",
      },
      {
        name: "Terms",
        href: "/terms",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-muted/40">
      <div className="container mx-auto px-5 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">GearUp</h2>

            <p className="text-sm text-muted-foreground">
              Rent premium sports and outdoor equipment from trusted providers.
            </p>

            <div className="flex gap-3">
              <Button size="icon" variant="outline" asChild>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} />
                </Link>
              </Button>

              <Button size="icon" variant="outline" asChild>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} />
                </Link>
              </Button>

              <Button size="icon" variant="outline" asChild>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={20} />
                </Link>
              </Button>
            </div>
          </div>

          {/* Links */}

          {links.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>

              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="
                        text-sm
                        text-muted-foreground
                        hover:text-primary
                        transition
                      "
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA */}

          <div className="space-y-4">
            <h3 className="font-semibold">Start Renting Today</h3>

            <p className="text-sm text-muted-foreground">
              Find the perfect gear for your next adventure.
            </p>

            <Button asChild>
              <Link href="/gear">Browse Gears</Link>
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <p
          className="
          text-center
          text-sm
          text-muted-foreground
        "
        >
          © {new Date().getFullYear()} GearUp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
