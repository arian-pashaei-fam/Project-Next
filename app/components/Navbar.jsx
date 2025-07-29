import Link from "next/link";
import Image from "next/image";
import Logo from "./logo2.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Image
          src={Logo}
          alt="Arian Logo"
          width={100}
          quality={100}
          placeholder="blur"
        />
        <h2>Arian test</h2>
        <Link className="nav-link " href="/">
          Dashboard
        </Link>
        <br />
        <Link className="nav-link " href="/tickets">
          Tickets
        </Link>
      </nav>
    </div>
  );
}
