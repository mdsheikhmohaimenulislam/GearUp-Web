"use server";

export const loginAction = async (data: {
  email: string;
  password: string;
}) => {

  console.log(data);

  const res = await fetch(
    `${process.env.BACKEND_APP_URL}/api/auth/login`,
    {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data)
    }
  );

  console.log(res);

  return await res.json();
};