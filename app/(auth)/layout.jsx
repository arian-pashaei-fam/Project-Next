import Image from "next/image";
import Link from "next/link";
import Logo from "../components/logo2.png";

export default function DashboardLayout({ children }) {
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
            <span style={{ color: "gold" }}>Navbar Auth</span>
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
