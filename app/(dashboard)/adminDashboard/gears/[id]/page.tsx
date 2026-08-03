import { gearDetailsActions } from "../../_actions/gearUpdate";



type Props = {
  params: Promise<{
    id: string;
  }>;
};


export default async function GearDetailsPage({
  params,
}: Props) {


  const { id } = await params;


  const response =
    await gearDetailsActions(id);


  const gear =
    response?.data;



  if(!gear){

    return (
      <div className="
      container
      mx-auto
      py-10
      text-center
      ">
        Gear not found
      </div>
    );

  }



  return (

    <div
      className="
      container
      mx-auto
      py-10
      "
    >


      <h1
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Gear Details
      </h1>




      <div
        className="
        border
        rounded-xl
        p-6
        space-y-6
        "
      >



        <div>

          <h2 className="
          text-xl
          font-semibold
          ">
            {gear.title}
          </h2>


          <p className="
          text-muted-foreground
          ">
            {gear.brand}
          </p>


        </div>




        <div
          className="
          grid
          md:grid-cols-2
          gap-5
          "
        >


          <Info
            label="Category"
            value={
              gear.category?.name || "N/A"
            }
          />


          <Info
            label="Price Per Day"
            value={
              `৳${Number(
                gear.pricePerDay
              ).toLocaleString()}`
            }
          />



          <Info
            label="Total Quantity"
            value={
              gear.quantityTotal
            }
          />



          <Info
            label="Available"
            value={
              gear.quantityAvailable
            }
          />



          <Info
            label="Provider"
            value={
              gear.provider?.name || "N/A"
            }
          />



          <Info
            label="Status"
            value={
              gear.isActive
              ?
              "Active"
              :
              "Disabled"
            }
          />



        </div>




        <div>

          <h3 className="
          font-semibold
          mb-3
          ">
            Description
          </h3>


          <p className="
          text-muted-foreground
          ">
            {
              gear.description ||
              "No description"
            }
          </p>


        </div>



        {
          gear.images?.length > 0 && (

            <div>

              <h3 className="
              font-semibold
              mb-3
              ">
                Images
              </h3>


              <div
                className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-4
                "
              >

                {
                  gear.images.map(
                    (
                      image:string,
                      index:number
                    )=>(
                      
                      <img
                        key={index}
                        src={image}
                        alt={gear.title}
                        className="
                        rounded-lg
                        border
                        h-40
                        w-full
                        object-cover
                        "
                      />

                    )
                  )
                }


              </div>


            </div>

          )
        }



      </div>


    </div>

  );

}




function Info({
  label,
  value,
}:{
  label:string;
  value:string | number;
}){


  return (

    <div
      className="
      border
      rounded-lg
      p-4
      "
    >

      <p className="
      text-sm
      text-muted-foreground
      ">
        {label}
      </p>


      <p className="
      font-medium
      mt-1
      ">
        {value}
      </p>


    </div>

  );

}