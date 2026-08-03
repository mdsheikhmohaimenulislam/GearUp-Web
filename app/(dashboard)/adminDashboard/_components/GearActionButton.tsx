"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { updateGearStatusAction } from "../../_actions/gearUpdate";


type Props = {
  gear: {
    id: string;
    isActive: boolean;
  };
};

export default function GearActionButton({ gear }: Props) {
  const router = useRouter();

  const handleStatus = async () => {


    const result = await updateGearStatusAction(gear.id, {
      isActive: !gear.isActive,
    });



    if (result.success) {
      toast.success("Gear status updated");

      router.refresh();
    } else {
      toast.error(result.message || "Update failed");
    }
  };

  return (
    <div className="flex gap-2">
      {/* View Button */}

      <button
        onClick={() => router.push(`/adminDashboard/gears/${gear.id}`)}
        className="
        border
        rounded-lg
        px-3
        py-1
        hover:bg-muted
        "
      >
        View
      </button>

      {/* Status Button */}

      <button
        onClick={handleStatus}
        className={`
        border
        rounded-lg
        px-3
        py-1

        ${
          gear.isActive
            ? "text-red-600 hover:bg-red-50"
            : "text-green-600 hover:bg-green-50"
        }

        `}
      >
        {gear.isActive ? "Disable" : "Activate"}
      </button>
    </div>
  );
}
