
import { getMe } from "@/server/getMe";
import ProfileCard from "../../customerDashboard/profile/_components/ProfileCard";


export default async function CustomerProfilePage(){


  const response = await getMe();


  const user = response?.data;


  if(!user){
    return null;
  }



  return (

    <div className="
    max-w-5xl
    mx-auto
    px-6
    py-10
    ">

      <h1 className="
      text-3xl
      font-bold
      mb-6
      ">
        My Profile
      </h1>


      <ProfileCard
        user={user}
      />


    </div>

  );

}