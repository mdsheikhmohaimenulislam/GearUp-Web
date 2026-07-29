import { jwtUtils } from "@/utils/jwt";
import { cookies } from "next/headers";


export const getNewAccessToken = async () => {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("refreshToken")?.value;

  if (!refreshToken) {
    return {
      success: false,
      message: "Refresh token not found. User needs to login again.",
    };
  }

  return {
    success: true,
    refreshToken,
  };
};



export const isAccessTokenExist = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;

  if (!accessToken && !refreshToken) {
    return null;
  }

  // Check access token
  if (accessToken) {
    const decodedAccessToken = jwtUtils.verifyToken(
      accessToken,
      process.env.JWT_ACCESS_SECRET as string
    );

    if (decodedAccessToken.success) {
      return {
        accessToken,
      };
    }
  }

  // Access token invalid হলে refresh token check
  if (refreshToken) {
    const decodedRefreshToken = jwtUtils.verifyToken(
      refreshToken,
      process.env.JWT_REFRESH_SECRET as string
    );

    if (decodedRefreshToken.success) {
      return {
        refreshToken,
        message: "Refresh token is valid",
      };
    }
  }

  return null;
};
