"use client";

import { LogOut } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/(auth)/_actions/logoutAction";


export default function LogoutButton() {

  const router = useRouter();


  const handleLogout = async () => {

    const result = await logoutAction();


    if(result.success){

      toast.success(
        "Logout successful"
      );


      router.push("/login");

      router.refresh();

    }

  };


  return (

    <button
      onClick={handleLogout}
      className="
      flex
      items-center
      gap-3
      w-full
      px-4
      py-3
      rounded-md
      text-red-600
      hover:bg-red-50
      transition
      "
    >

      <LogOut size={20}/>

      Logout

    </button>

  );

}