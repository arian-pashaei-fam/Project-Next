import Link from "next/link";

export default function notFound() {
  return (
    <div className="container text-center">
      <h2>Sorry but Nothing.</h2>
      <p>We Could not Find the Page you Were Loking For.</p>
      <p>
        Go Back to All{" "}
        <Link style={{ color: "blue" }} href="/tickets">
          Tickets
        </Link>
      </p>
    </div>
  );
}
