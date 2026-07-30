
import ProfileSection from "@/app/(public)/_components/ProfileSection";
import { getMe } from "@/server/getMe";


export default async function ProfilePage() {


  const response = await getMe();



  if (!response.success) {

    return (
      <div className="flex min-h-screen items-center justify-center">
        <h2 className="text-xl font-semibold">
          User not logged in
        </h2>
      </div>
    );

  }



  return (

    <ProfileSection
      user={response.data}
    />

  );

}