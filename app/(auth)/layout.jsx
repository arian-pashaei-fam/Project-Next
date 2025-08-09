import Image from "next/image";
import Link from "next/link";
import Logo from "../components/logo2.png";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data, error } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link href="/" className="nav-logo">
            <Image
              src={Logo}
              alt="Arian Logo"
              width={100}
              quality={100}
              placeholder="blur"
            />
          </Link>

          <ul className="nav-links">
            <li>
              <Link href="/signup" className="nav-link nav-actions">
                Sign up
              </Link>
            </li>
            <li>
              <Link href="/login" className="nav-link nav-actions">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {children}
    </>
  );
}
