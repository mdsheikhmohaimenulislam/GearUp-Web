"use client";


import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { deleteCategoryAction, updateCategoryAction } from "@/app/(dashboard)/_actions/CategoryAction";




type Props = {
  category: {
    id: string;
    name: string;
    slug: string;
  };
};



export default function CategoryAction({
  category,
}: Props) {


  const router = useRouter();


  const [loading, setLoading] = useState(false);



  const handleDelete = async () => {


    const confirmDelete = window.confirm(
      `Are you sure delete "${category.name}"?`
    );


    if (!confirmDelete) return;



    try {


      setLoading(true);



      const result =
        await deleteCategoryAction(
          category.id
        );



      if(result.success){


        toast.success(
          "Category deleted successfully"
        );


        router.refresh();


      }else{


        toast.error(
          result.message ||
          "Delete failed"
        );


      }



    } catch(error){


      toast.error(
        "Something went wrong"
      );


    } finally {


      setLoading(false);


    }


  };





  const handleEdit = async()=>{


    const name =
      prompt(
        "Update category name",
        category.name
      );



    if(!name || name === category.name){
      return;
    }



    try{


      setLoading(true);



      const result =
        await updateCategoryAction(
          category.id,
          {
            name,
          }
        );



      if(result.success){


        toast.success(
          "Category updated successfully"
        );


        router.refresh();


      }else{


        toast.error(
          result.message ||
          "Update failed"
        );


      }



    }catch(error){


      toast.error(
        "Something went wrong"
      );


    }finally{


      setLoading(false);


    }


  };





  return (

    <div
      className="
      flex
      gap-2
      "
    >


      <Button

        onClick={handleEdit}

        disabled={loading}

        variant="outline"

      >

        Edit

      </Button>



      <Button

        onClick={handleDelete}

        disabled={loading}

        variant="destructive"

      >

        {
          loading
          ?
          "Loading..."
          :
          "Delete"
        }

      </Button>


    </div>

  );

}