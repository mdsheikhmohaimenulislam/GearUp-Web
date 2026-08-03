import { getMe } from "@/server/getMe";
import ProfileCard from "../../customerDashboard/profile/_components/ProfileCard";


type User = {
  id:string;

  name:string;

  email:string;

  phone?:string;

  address?:string;

  role:string;

  status?:string;

};




export default async function CustomerProfilePage(){


  const response =
    await getMe();



  const user:User | null =
    response?.data ?? null;



  if(!user){

    return (

      <div
        className="
        max-w-5xl
        mx-auto
        px-6
        py-10
        "
      >

        <div
          className="
          border
          rounded-xl
          p-6
          text-center
          "
        >

          <h2
            className="
            text-xl
            font-semibold
            "
          >
            User not found
          </h2>


          <p
            className="
            text-muted-foreground
            mt-2
            "
          >
            Please login again to view your profile.
          </p>


        </div>


      </div>

    );

  }




  return (

    <div
      className="
      max-w-5xl
      mx-auto
      px-6
      py-10
      "
    >


      <h1
        className="
        text-3xl
        font-bold
        mb-6
        "
      >
        My Profile
      </h1>



      <ProfileCard

        user={user}

      />



    </div>

  );

}