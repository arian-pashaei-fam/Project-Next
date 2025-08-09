"use client";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );

    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }

    if (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button className="btn" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
}
