import Link from "next/link";
import Navbar from "./components/Navbar";

export default function notFound() {
  return (
    <>
      <Navbar />
      <div className="text-center container">
        <h2>There Was a Problem</h2>
        <p>We Could not Find the Page you Were Loking For.</p>
        <p>
          Go Back to the{" "}
          <Link style={{ color: "blue" }} href="/">
            {" "}
            Home Page
          </Link>
        </p>
      </div>
    </>
  );
}
