// ()  مسیر ها در این حالت دیده نمیشود
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import AuthForm from "../AuthForm";

export default function Login() {
  const [formError, setFormError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setFormError("");

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setFormError(error.message);
      router.push("/");

    }

    if (!error) {
      router.push("/");
    }
  };

  return (
    <div>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />

      {formError && (
        <div className="text-center">
          <p>{formError}</p>
        </div>
      )}
    </div>
  );
}
