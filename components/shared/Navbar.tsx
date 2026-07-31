"use client";

import Link from "next/link";
import { Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";


import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IUser } from "@/lib/types";
import Image from "next/image";
import LogoutButton from './LogoutButton';

type NavbarProps = {
  user: IUser;
};

export default function Navbar({ user }: NavbarProps) {
  const router = useRouter();

  const profile = user?.data;

  const isLoggedIn = !!profile;

  const navLinks = [
    {
      name: "Gear",
      href: "/gear",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Rents",
      href: "/rents",
    },
  ];

  // Dynamic Dashboard Redirect

  const handleDashboardRedirect = () => {
    const userRole = profile?.profile?.role;
    if (!userRole) {
      router.push("/login");
      return;
    }

    switch (userRole) {
      case "CUSTOMER":
        router.push("/customerDashboard");
        break;

      case "PROVIDER":
        router.push("/providerDashboard");
        break;

      case "ADMIN":
        router.push("/adminDashboard");
        break;

      default:
        router.push("/");
        break;
    }
  };



  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}

        <Link href="/" className="text-2xl font-bold text-green-500">
          GearUp
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden md:flex gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}

        <div className="hidden md:flex items-center gap-3">
          <ModeToggle />

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full overflow-hidden"
                >
                  {profile?.profile?.profile?.profilePhoto ? (
                    <Image
                      src={profile?.profile?.profile?.profilePhoto}
                      alt="profile"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={handleDashboardRedirect}>
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>
{/* logout */}
<LogoutButton/>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>

              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile */}

        <div className="flex md:hidden items-center gap-2">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-2 p-5">
                {navLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="text-lg">
                    {item.name}
                  </Link>
                ))}

                {isLoggedIn ? (
                  <>
                    <Button variant="outline" onClick={handleDashboardRedirect}>
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>

{/* logout */}
<LogoutButton/>
                  </>
                ) : (
                  <Button asChild>
                    <Link href="/login">Login</Link>
                  </Button>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
