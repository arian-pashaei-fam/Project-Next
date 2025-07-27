import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav>
        <h2>Arian test</h2>
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Dashboard
        </Link>
        <br />
        <Link
          href="/tickets"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Tickets
        </Link>
      </nav>
    </div>
  );
}
