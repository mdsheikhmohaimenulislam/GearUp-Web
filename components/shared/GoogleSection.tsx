
"use client";

import { Button } from "@/components/ui/button";

export default function GoogleLogin() {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  return (
    <div className="space-y-3">
      <Button
        type="button"
        variant="outline"
        onClick={handleGoogleLogin}
        className="h-11 w-full rounded-xl font-medium"
      >
        <svg
          className="mr-2 h-5 w-5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="#4285F4"
            d="M21.35 12.23c0-.79-.07-1.55-.22-2.27H12v4.3h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.92-4.18 2.92-7.39Z"
          />
          <path
            fill="#34A853"
            d="M12 21.75c2.63 0 4.84-.87 6.45-2.36l-3.14-2.43c-.87.58-1.98.92-3.31.92-2.54 0-4.7-1.72-5.47-4.03H3.29v2.51A9.74 9.74 0 0 0 12 21.75Z"
          />
          <path
            fill="#FBBC05"
            d="M6.53 13.85A5.85 5.85 0 0 1 6.22 12c0-.64.11-1.26.31-1.85V7.64H3.29A9.74 9.74 0 0 0 2.25 12c0 1.57.38 3.05 1.04 4.36l3.24-2.51Z"
          />
          <path
            fill="#EA4335"
            d="M12 6.12c1.43 0 2.72.49 3.74 1.45l2.8-2.8C16.84 3.2 14.63 2.25 12 2.25a9.74 9.74 0 0 0-8.71 5.39l3.24 2.51C7.3 7.84 9.46 6.12 12 6.12Z"
          />
        </svg>

        Continue with Google
      </Button>
    </div>
  );
}

