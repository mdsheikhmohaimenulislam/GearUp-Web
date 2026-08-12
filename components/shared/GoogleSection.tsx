"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtDecode } from "jwt-decode";

import { JwtPayload } from "@/lib/types";

type GoogleAutoLoginCardProps = {
  clientId: string;
};

export function GoogleAutoLoginCard({
  clientId,
}: GoogleAutoLoginCardProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  const [scriptReady, setScriptReady] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect");

  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_API_URL;

  // ==========================================
  // GOOGLE LOGIN
  // ==========================================

const handleGoogleLogin = async (idToken: string) => {
  try {
    if (!backendUrl) {
      toast.error("Backend URL is not configured.");
      return;
    }

    setLoading(true);

    console.log("Backend URL:", backendUrl);
    console.log("Sending Google ID token to backend...");

 const response = await fetch(`${backendUrl}/api/auth/google`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  credentials: "include",
  body: JSON.stringify({
    idToken,
  }),
});

const raw = await response.text();

console.log("STATUS:", response.status);
console.log("RESPONSE:", raw);

let data;

try {
  data = JSON.parse(raw);
} catch {
  console.error("Server did not return JSON:", raw);
  toast.error("Backend returned an invalid response.");
  return;
}

    if (!response.ok) {
      toast.error(data?.message || "Google login failed.");
      return;
    }

    const accessToken = data?.data?.accessToken;

    if (!accessToken) {
      toast.error("Access token was not returned by backend.");
      return;
    }

    const decoded = jwtDecode<JwtPayload>(accessToken);

    console.log("Google JWT:", decoded);
    console.log("Google role:", decoded.role);

    toast.success(data?.message || "Google login successful!");

    router.refresh();

    if (redirectTo) {
      router.replace(redirectTo);
      return;
    }

    switch (decoded.role) {
      case "CUSTOMER":
        router.replace("/customerDashboard");
        break;

      case "PROVIDER":
        router.replace("/providerDashboard");
        break;

      case "ADMIN":
        router.replace("/adminDashboard");
        break;

      default:
        toast.error(`Unknown user role: ${decoded.role}`);
        router.replace("/");
    }
  } catch (error) {
    console.error("Google login error:", error);
    toast.error("Unable to login with Google.");
  } finally {
    setLoading(false);
  }
};
  // ==========================================
  // GOOGLE SCRIPT + BUTTON
  // ==========================================

  useEffect(() => {
    if (
      !scriptReady ||
      !clientId ||
      !buttonRef.current ||
      !window.google
    ) {
      return;
    }

    const container =
      buttonRef.current;

    // Remove previous button
    container.innerHTML = "";

    // ========================================
    // INITIALIZE GOOGLE
    // ========================================

    window.google.accounts.id.initialize({
      client_id: clientId,

      callback: (response) => {
        console.log(
          "Google response received"
        );

        if (!response.credential) {
          toast.error(
            "Google did not return an ID token."
          );

          return;
        }

        handleGoogleLogin(
          response.credential
        );
      },
    });

    // ========================================
    // RENDER GOOGLE BUTTON
    // ========================================

    window.google.accounts.id.renderButton(
      container,
      {
        type: "standard",
        theme: "outline",
        size: "large",
        shape: "rectangular",
        width: 350,
        text: "signin_with",
      }
    );

    // ========================================
    // CLEANUP
    // ========================================

    return () => {
      container.innerHTML = "";
    };
  }, [scriptReady, clientId]);

  // ==========================================
  // UI
  // ==========================================

  return (
    <>
      <Script
        src="https://accounts.google.com/gsi/client"
        strategy="afterInteractive"
        onLoad={() => {
          console.log(
            "Google Identity Services loaded"
          );

          setScriptReady(true);
        }}
        onError={() => {
          console.error(
            "Google Identity Services failed to load"
          );

          toast.error(
            "Google login service could not be loaded."
          );
        }}
      />

      <div className="w-full">
        <div
          className="
            flex
            min-h-[52px]
            w-full
            items-center
            justify-center
            rounded-xl
            border
            bg-background
            px-4
            py-2
            transition-all
            duration-200
            hover:border-green-500
          "
        >
          {loading ? (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />

              Signing in with Google...
            </div>
          ) : (
            <div
              ref={buttonRef}
              className="flex justify-center"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default GoogleAutoLoginCard;