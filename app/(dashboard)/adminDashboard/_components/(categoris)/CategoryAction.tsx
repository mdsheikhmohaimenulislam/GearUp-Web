"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  updateCategoryAction,
  deleteCategoryAction,
} from "../../_actions/CategoryAction";



type Props = {

  category:{
    id:string;
    name:string;
  };

};



export default function CategoryAction({
  category,
}:Props){


  const router = useRouter();


  const [name,setName] = useState(
    category.name
  );


  const [open,setOpen] = useState(false);



  const handleUpdate = async()=>{


    const result =
      await updateCategoryAction(
        category.id,
        {
          name
        }
      );



    if(result.success){


      toast.success(
        "Category updated successfully"
      );


      setOpen(false);

      router.refresh();



    }else{


      toast.error(
        result.message ||
        "Update failed"
      );


    }


  };



  return (

    <div className="flex gap-2">



      <Dialog
        open={open}
        onOpenChange={setOpen}
      >


        <DialogTrigger asChild>

          <Button
            variant="outline"
            size="sm"
          >

            Edit

          </Button>


        </DialogTrigger>




        <DialogContent>


          <DialogHeader>

            <DialogTitle>
              Edit Category
            </DialogTitle>

          </DialogHeader>



          <input

            value={name}

            onChange={(e)=>
              setName(e.target.value)
            }

            className="
            border
            rounded-lg
            px-3
            py-2
            w-full
            "

          />



          <Button
            onClick={handleUpdate}
          >

            Update

          </Button>



        </DialogContent>


      </Dialog>





      <Button

        variant="outline"

        size="sm"

        className="
        text-red-600
        "

      >

        Delete

      </Button>



    </div>

  );

}