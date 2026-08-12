"use client";

import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";


type ProfileUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  photoUrl: string | null;
  role: string;
  status: string;
};



type ProfileSectionProps = {
  user: ProfileUser;
};



export default function ProfileSection({
  user,
}: ProfileSectionProps) {


  return (

    <div className="container mx-auto py-10 px-4">


      <Card className="max-w-3xl mx-auto">


        <CardContent className="p-8">


          {/* Avatar */}
          <div className="flex flex-col items-center gap-4">


            {
              user.photoUrl ? (

                <Image
                  src={user.photoUrl}
                  width={120}
                  height={120}
                  alt={user.name}
                  className="h-28 w-28 rounded-full object-cover"
                />

              ) : (

                <div className="
                  h-28
                  w-28
                  rounded-full
                  bg-muted
                  flex
                  items-center
                  justify-center
                ">

                  <User className="h-12 w-12"/>

                </div>

              )
            }



            <h1 className="text-2xl font-bold">
              {user.name}
            </h1>


            <span className="
              rounded-full
              bg-green-100
              px-3
              py-1
              text-sm
              text-green-700
            ">
              {user.role}
            </span>


          </div>





          {/* Information */}


          <div className="mt-8 grid gap-5">


            <div className="flex items-center gap-3">

              <Mail className="h-5 w-5 text-muted-foreground"/>

              <div>

                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p className="font-medium">
                  {user.email}
                </p>

              </div>

            </div>




            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-muted-foreground"/>

              <div>

                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <p className="font-medium">
                  {user.phone}
                </p>

              </div>

            </div>





            <div className="flex items-center gap-3">

              <MapPin className="h-5 w-5 text-muted-foreground"/>

              <div>

                <p className="text-sm text-muted-foreground">
                  Address
                </p>

                <p className="font-medium">
                  {user.address}
                </p>

              </div>

            </div>





            <div className="flex items-center gap-3">

              <ShieldCheck className="h-5 w-5 text-muted-foreground"/>

              <div>

                <p className="text-sm text-muted-foreground">
                  Account Status
                </p>

                <p className="font-medium">
                  {user.status}
                </p>

              </div>

            </div>


          </div>



        </CardContent>


      </Card>


    </div>

  );

}