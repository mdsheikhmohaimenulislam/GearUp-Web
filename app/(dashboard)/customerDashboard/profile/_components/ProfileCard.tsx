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


type Props = {
  user: {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    role: string;
    profilePhoto?: string;
  };
};


export default function ProfileCard({
  user,
}: Props) {


  return (
    <Card className="rounded-2xl">

      <CardHeader>
        <CardTitle>
          Profile Information
        </CardTitle>
      </CardHeader>


      <CardContent className="space-y-8">


        <div className="flex items-center gap-5">


          {
            user.profilePhoto ? (

              <img
                src={user.profilePhoto}
                alt="profile"
                className="
                w-24
                h-24
                rounded-full
                object-cover
                "
              />

            ) : (

              <div
                className="
                w-24
                h-24
                rounded-full
                bg-green-100
                flex
                items-center
                justify-center
                text-3xl
                font-bold
                text-green-700
                "
              >
                {user.name.charAt(0)}
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



        <div className="
        grid
        md:grid-cols-2
        gap-5
        ">


          <Info
            icon={<User size={18}/>}
            title="Name"
            value={user.name}
          />


          <Info
            icon={<Mail size={18}/>}
            title="Email"
            value={user.email}
          />


          <Info
            icon={<Phone size={18}/>}
            title="Phone"
            value={user.phone || "Not Added"}
          />


          <Info
            icon={<MapPin size={18}/>}
            title="Address"
            value={user.address || "Not Added"}
          />


          <Info
            icon={<ShieldCheck size={18}/>}
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
}:{
  icon: React.ReactNode;
  title:string;
  value:string;
}){


  return (

    <div className="
    flex
    gap-3
    items-center
    border
    rounded-xl
    p-4
    ">

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