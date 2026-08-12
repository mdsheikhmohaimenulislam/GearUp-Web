import { NextResponse } from "next/server";

export async function GET() {
  const backendUrl = process.env.BACKEND_API_URL;

  if (!backendUrl) {
    return NextResponse.json(
      { message: "BACKEND_API_URL is not configured" },
      { status: 500 }
    );
  }

  return NextResponse.redirect(`${backendUrl}/api/auth/google`);
}