"use server";

import { UpdateOrderStatusData } from "@/lib/types";
import { updateOrderStatus } from "@/server/provider.service";

export async function updateOrderStatusAction(
  id: string,
  data: UpdateOrderStatusData
) {
  try {
    const result = await updateOrderStatus(id, data);

    return result;
  } catch (error) {
    return {
      success: false,
      message: "Failed to update order status",
    };
  }
}