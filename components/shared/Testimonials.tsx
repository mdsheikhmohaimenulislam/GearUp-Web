import {
  Star,
  BadgeCheck,
  MessageCircle,
} from "lucide-react";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";


type Review = {
  id: string;
  rating: number;
  comment?: string;
  createdAt: string;
};


type ReviewsProps = {
  reviews?: Review[];
};



export default function Reviews({
  reviews = [],
}: ReviewsProps) {


  return (

    <section className="space-y-8">


      {/* Header */}

      <div>

        <h2 className="text-2xl font-bold tracking-tight">
          Customer Reviews
        </h2>

        <p className="text-sm text-muted-foreground mt-1">
          See what customers say about this gear
        </p>

      </div>




      <Separator />





      {
        reviews.length === 0 ? (

          <Card className="border-dashed">

            <CardContent className="py-14 text-center">


              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-muted
                "
              >

                <MessageCircle
                  size={25}
                  className="text-muted-foreground"
                />

              </div>



              <h3 className="mt-4 font-semibold">
                No reviews yet
              </h3>


              <p className="
                text-sm
                text-muted-foreground
                mt-2
              ">
                Be the first customer to share your experience.
              </p>


            </CardContent>

          </Card>



        ) : (



          <div className="
            grid
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
          ">


            {
              reviews.map((review)=>(
                

                <Card
                  key={review.id}
                  className="
                    group
                    overflow-hidden
                    border
                    bg-background
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >


                  <CardContent className="p-6">



                    {/* Rating */}


                    <div className="flex items-center justify-between">


                      <div className="flex gap-1">


                        {
                          Array.from({
                            length:5
                          }).map((_,index)=>(

                            <Star
                              key={index}
                              size={17}
                              className={

                                index < review.rating

                                ?

                                "fill-yellow-400 text-yellow-400"

                                :

                                "text-gray-300"

                              }
                            />

                          ))
                        }


                      </div>



                      <span
                        className="
                          rounded-full
                          bg-green-100
                          px-3
                          py-1
                          text-xs
                          font-medium
                          text-green-700
                        "
                      >
                        Verified
                      </span>


                    </div>





                    {/* Comment */}


                    <p
                      className="
                        mt-5
                        text-sm
                        leading-7
                        text-muted-foreground
                        line-clamp-4
                      "
                    >

                      
                      {
                        review.comment ||
                        "No comment provided."
                      }
                      

                    </p>






                    <Separator className="my-5"/>





                    {/* User */}


                    <div className="flex items-center justify-between">


                      <div className="flex items-center gap-3">


                        <div
                          className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            bg-primary/10
                            font-semibold
                            text-primary
                          "
                        >
                          C
                        </div>




                        <div>

                          <div className="flex items-center gap-1">


                            <p className="text-sm font-semibold">
                              Customer
                            </p>


                            <BadgeCheck
                              size={15}
                              className="text-green-600"
                            />


                          </div>


                          <p
                            className="
                              text-xs
                              text-muted-foreground
                            "
                          >
                            Verified renter
                          </p>


                        </div>


                      </div>





                      <p
                        className="
                          text-xs
                          text-muted-foreground
                        "
                      >

                        {
                          new Date(
                            review.createdAt
                          ).toLocaleDateString(
                            "en-US",
                            {
                              day:"numeric",
                              month:"short",
                              year:"numeric",
                            }
                          )
                        }

                      </p>



                    </div>




                  </CardContent>


                </Card>


              ))
            }


          </div>


        )
      }


    </section>

  );
}