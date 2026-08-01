"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { returnRentalAction } from "@/app/(public)/_components/_actions/returnRentalAction";



export default function ReturnButton({
  id,
}: {
  id:string;
}) {

  const router = useRouter();


  const handleReturn = async()=>{


    const result = await returnRentalAction(id);


    console.log("Return response:", result);


    if(result.success){

      toast.success("Gear returned successfully");

      router.refresh();

    }else{

      toast.error(
        result.message || "Return failed"
      );

    }

  };


  return (

    <button

      onClick={handleReturn}

      className="
      w-full
      mt-3
      bg-green-700
      text-white
      py-2
      rounded-lg
      hover:bg-green-600
      "

    >

      Return Gear

    </button>

  );
}