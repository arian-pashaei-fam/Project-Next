import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();

  // if (!error) {
  //   redirect("/login");
  // }
  // if (error) {
  //   redirect("/");
  // }
  if (!data) {
    redirect("/login");
  }

  console.log(data);

  return (
    <>
      <Navbar user={data?.user} />
      {children}
    </>
  );
}
