"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";


export default function InvoiceButton(){

  const handlePrint = () => {
    window.print();
  };


  return (

    <Button
      className="w-full"
      onClick={handlePrint}
    >

      <Download size={18}/>

      Download Invoice

    </Button>

  );
}