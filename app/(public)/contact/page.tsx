"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { toast } from "sonner";


const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "support@gearup.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+880 1234-567890",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "9:00 AM - 10:00 PM",
  },
];


type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};


export default function ContactSection() {


  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });



  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    const {
      name,
      value,
    } = e.target;


    setFormData((prev)=>({
      ...prev,
      [name]: value,
    }));

  };




  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();


    if(
      !formData.name ||
      !formData.email ||
      !formData.message
    ){

      toast.error(
        "Please fill all required fields"
      );

      return;
    }



    // Demo Data

 


    toast.success(
      "Message sent successfully!"
    );



    // Clear Form

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  };




  return (
    <section className="container mx-auto px-5 py-16">


      {/* Header */}

      <div className="text-center mb-10">

        <h2 className="
          text-3xl
          md:text-4xl
          font-bold
        ">
          Contact Us
        </h2>


        <p className="
          text-muted-foreground
          mt-2
        ">
          Have questions? We are here to help you.
        </p>

      </div>





      <div className="
        grid
        lg:grid-cols-2
        gap-8
      ">



        {/* Contact Information */}

        <div className="space-y-4">


          {
            contactInfo.map((item)=>{

              const Icon = item.icon;


              return (

                <Card
                  key={item.title}
                >

                  <CardContent
                    className="
                      flex
                      items-center
                      gap-4
                      p-5
                    "
                  >

                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-green-100
                        text-green-700
                      "
                    >

                      <Icon
                        size={24}
                      />

                    </div>



                    <div>

                      <h3
                        className="
                          font-semibold
                        "
                      >
                        {item.title}
                      </h3>


                      <p
                        className="
                          text-sm
                          text-muted-foreground
                        "
                      >
                        {item.value}
                      </p>


                    </div>


                  </CardContent>


                </Card>

              );

            })
          }


        </div>







        {/* Contact Form */}


        <Card>


          <CardHeader>

            <CardTitle>
              Send Message
            </CardTitle>


          </CardHeader>




          <CardContent>


            <form
              onSubmit={handleSubmit}
              className="
                space-y-4
              "
            >


              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />



              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
              />



              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
              />



              <Textarea

                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"

                rows={6}

              />




              <Button
                type="submit"
                className="
                  w-full
                  bg-green-700
                  hover:bg-green-800
                "
              >

                Send Message

              </Button>



            </form>



          </CardContent>



        </Card>




      </div>



    </section>
  );
}