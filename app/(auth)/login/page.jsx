// ()  مسیر ها در این حالت دیده نمیشود
"use client";

import AuthForm from "../AuthForm";

export default function Login() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    console.log("User Login", email, password);
  };

  return (
    <div>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </div>
  );
}
