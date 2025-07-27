import Link from "next/link";
import Image from "next/image";
import Logo from './logo2.png'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Image
            src={Logo}
            alt="Arian Logo"
            width={100}
            quality={100}
            placeholder="blur"
        />
        <h2>Arian test</h2>
        <Link href="/">Dashboard</Link>
        <br />
        <Link href="/tickets">Tickets</Link>
      </nav>
    </div>
  );
}
