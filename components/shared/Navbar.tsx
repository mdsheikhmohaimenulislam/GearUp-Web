"use client";

import Link from "next/link";
import { Menu, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme/mode-toggle";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IUser } from "@/lib/types";
import LogoutButton from "./LogoutButton";

type NavbarProps = {
  user: IUser;
};

type ProfileAvatarProps = {
  name?: string | null;
  profilePhoto?: string | null;
};

function ProfileAvatar({
  name,
  profilePhoto,
}: ProfileAvatarProps) {
  if (profilePhoto) {
    return (
      <Image
        src={profilePhoto}
        alt={name || "Profile"}
        width={40}
        height={40}
        unoptimized
        className="h-10 w-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
      {name?.charAt(0).toUpperCase() || "U"}
    </div>
  );
}

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
      name: "FAQ",
      href: "/faqSection",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Help Center",
      href: "/help-center",
    },
  ];

  // ==========================================
  // DASHBOARD REDIRECT
  // ==========================================

  const handleDashboardRedirect = () => {
    const userRole = profile?.role;

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

        <Link
          href="/"
          className="text-2xl font-bold text-green-500"
        >
          GearUp
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}

        <div className="hidden items-center gap-3 md:flex">
          <ModeToggle />

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 overflow-hidden rounded-full p-0"
                >
                  <ProfileAvatar
                    name={profile?.name}
                    profilePhoto={profile?.profilePhoto}
                  />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-52"
              >
                {/* User Information */}

                <div className="px-3 py-2">
                  <p className="truncate text-sm font-semibold">
                    {profile?.name}
                  </p>

                  <p className="truncate text-xs text-muted-foreground">
                    {profile?.email}
                  </p>
                </div>

                <DropdownMenuSeparator />

                {/* Dashboard */}

                <DropdownMenuItem
                  onClick={handleDashboardRedirect}
                  className="cursor-pointer"
                >
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                {/* Logout */}

                <LogoutButton />
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
              >
                <Link href="/login">
                  Login
                </Link>
              </Button>

              <Button asChild>
                <Link href="/register">
                  Register
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile */}

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
              >
                <Menu />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[300px]"
            >
              <div className="flex flex-col gap-4 p-5">

                {/* Mobile User */}

                {isLoggedIn && (
                  <div className="flex items-center gap-3 border-b pb-4">
                    <ProfileAvatar
                      name={profile?.name}
                      profilePhoto={profile?.profilePhoto}
                    />

                    <div className="min-w-0">
                      <p className="truncate font-semibold">
                        {profile?.name}
                      </p>

                      <p className="truncate text-sm text-muted-foreground">
                        {profile?.email}
                      </p>
                    </div>
                  </div>
                )}

                {/* Mobile Navigation */}

                <div className="flex flex-col gap-3">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Auth */}

                <div className="mt-4 border-t pt-4">
                  {isLoggedIn ? (
                    <div className="flex flex-col gap-3">

                      <Button
                        variant="outline"
                        onClick={handleDashboardRedirect}
                        className="w-full justify-start"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>

                      <LogoutButton />

                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">

                      <Button
                        asChild
                        variant="outline"
                        className="w-full"
                      >
                        <Link href="/login">
                          Login
                        </Link>
                      </Button>

                      <Button
                        asChild
                        className="w-full"
                      >
                        <Link href="/register">
                          Register
                        </Link>
                      </Button>

                    </div>
                  )}
                </div>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}