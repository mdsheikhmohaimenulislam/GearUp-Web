"use client";

import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { deleteGearAction } from "@/app/(public)/_components/(provider)/deleteGearAction";



export default function DeleteGearButton({
  id,
}: {
  id: string;
}) {

  const [loading,setLoading] = useState(false);


  const handleDelete = async()=>{


    const confirmDelete = confirm(
      "Are you sure you want to delete this gear?"
    );


    if(!confirmDelete) return;



    try{

      setLoading(true);


      const result =
        await deleteGearAction(id);



      if(result.success){

        toast.success(
          "Gear deleted successfully"
        );


        window.location.reload();

      }
      else{

        toast.error(
          result.message
        );

      }



    }
    catch(error){

      toast.error(
        "Something went wrong"
      );

    }
    finally{

      setLoading(false);

    }

  };



  return (

    <button
      onClick={handleDelete}
      disabled={loading}
      className="
      flex-1
      flex
      items-center
      justify-center
      gap-2
      bg-red-600
      text-white
      py-2
      rounded-md
      hover:bg-red-700
      disabled:opacity-50
      "
    >

      <Trash2 size={17}/>

      {
        loading
        ? "Deleting..."
        : "Delete"
      }


    </button>

  );
}