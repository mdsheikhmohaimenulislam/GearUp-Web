import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  user: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    role: string;
    profilePhoto?: string | null;
  };
};

export default function ProfileCard({ user }: Props) {
  console.log("Profile user:", user);

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Profile Header */}
        <div className="flex items-center gap-5">
          {user.profilePhoto ? (
            <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-green-500">
              <Image
                src={user.profilePhoto}
                alt={`${user.name}'s profile`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          ) : (
            <div
              className="
                flex h-24 w-24
                items-center justify-center
                rounded-full
                bg-green-100
                text-3xl
                font-bold
                text-green-700
              "
            >
              {user.name?.charAt(0).toUpperCase()}
            </div>
          )}

          <div>
            <h2 className="text-2xl font-bold">
              {user.name}
            </h2>

            <Badge className="mt-2">
              {user.role}
            </Badge>
          </div>
        </div>

        {/* User Information */}
        <div className="grid gap-5 md:grid-cols-2">
          <Info
            icon={<User size={18} />}
            title="Name"
            value={user.name}
          />

          <Info
            icon={<Mail size={18} />}
            title="Email"
            value={user.email}
          />

          <Info
            icon={<Phone size={18} />}
            title="Phone"
            value={user.phone || "Not Added"}
          />

          <Info
            icon={<MapPin size={18} />}
            title="Address"
            value={user.address || "Not Added"}
          />

          <Info
            icon={<ShieldCheck size={18} />}
            title="Role"
            value={user.role}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border p-4">
      <div className="text-green-600">
        {icon}
      </div>

      <div>
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <p className="font-medium">
          {value}
        </p>
      </div>
    </div>
  );
}