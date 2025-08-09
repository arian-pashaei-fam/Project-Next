// ()  مسیر ها در این حالت دیده نمیشود
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import AuthForm from "../AuthForm";

export default function Singup() {
  const [formError, setFormError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setFormError(error.message);
    }

    if (!error) {
      router.push("/verify");
    }
  };

  return (
    <div>
      <h2 className="text-center">Sing Up</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {formError && (
        <div className="text-center">
          <p>{formError}</p>
        </div>
      )}
    </div>
  );
}
