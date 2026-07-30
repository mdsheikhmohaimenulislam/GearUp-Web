import ProfileSection from "@/app/(public)/_components/ProfileSection";
import { getMe } from "@/server/getMe";

export default async function ProfilePage() {
  const response = await getMe();

  if (!response.success) {
    return <div className="text-center py-10">User not logged in</div>;
  }

  return <ProfileSection user={response.data} />;
}
