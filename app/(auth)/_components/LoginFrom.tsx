"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginForm() {




  const [loading, setLoading] = useState(false);




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);

    // try {
    //   setLoading(true);

    //   const res = await fetch(
    //     `${process.env.BACKEND_APP_URL}/api/auth/login`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       credentials: "include",
    //       body: JSON.stringify(formData),
    //     }
    //   );


    //   const data = await res.json();

    //   console.log(data);


    //   if (data.success) {
    //     router.push("/dashboard");
    //   }

    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };


  return (
    <div className="flex min-h-screen items-center justify-center">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-5 rounded-lg border p-6 shadow"
      >

        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>


        <div>
          <label className="mb-1 block">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>


        <div>
          <label className="mb-1 block">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full rounded border px-3 py-2"
            required
          />
        </div>


        <Button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer rounded bg-green-700 py-2 text-white"
        >
          {loading ? "Loading..." : "Login"}
        </Button>

      </form>

    </div>
  );
}