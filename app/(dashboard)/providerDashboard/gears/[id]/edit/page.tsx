import EditGearForm from "./EditGearForm";
import { getSingleGear } from "@/server/gear.service";

export default async function EditGearPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const result = await getSingleGear(id);

  const gear = result?.data;

  if (!gear) {
    return <div>Gear not found</div>;
  }

  return <EditGearForm gear={gear} />;
}
