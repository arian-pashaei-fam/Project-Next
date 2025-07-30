import Link from "next/link";

export default function notFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There Was a Problem</h2>
      <p>We Could not Find the Page you Were Loking For.</p>
      <p>
        Go Back to the <Link href="/"> Home Page</Link>
      </p>
    </main>
  );
}
