"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, LogOut, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  // পরে auth context / server session থেকে আসবে
  const user = null;

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

  const logoutHandler = () => {
    console.log("logout");
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Left Logo */}
        {/* dark:text-white */}
        <Link
          href="/"
          className="
    text-2xl 
    font-bold 
    text-green-500 
    bg-clip-text 
  "
        >
          GearUp
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />

          {user ? (
            <>
              {/* Avatar */}
              <Button variant="ghost" size="icon" className="rounded-full">
                <User />
              </Button>

              <Button
                variant="outline"
                onClick={logoutHandler}
                className="gap-2"
              >
                <LogOut size={18} />
                Logout
              </Button>
            </>
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

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="mt-5 p-5 flex flex-col gap-6">
                {navLinks.map((item) => (
                  <Link key={item.name} href={item.href} className="text-lg">
                    {item.name}
                  </Link>
                ))}

                {user ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={logoutHandler}
                      className="gap-2"
                    >
                      <LogOut size={18} />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild>
                      <Link href="/login">Login</Link>
                    </Button>

                    <Button asChild variant="outline">
                      <Link href="/register">Register</Link>
                    </Button>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
