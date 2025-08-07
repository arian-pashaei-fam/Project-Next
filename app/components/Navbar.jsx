import Link from "next/link";
import Image from "next/image";
import Logo from "./logo2.png";
import { use } from "react";
// import { useState } from "react";

export default function Navbar({ user }) {
  console.log("User in Navbar:", user);

  return (
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
          <span style={{ color: "gray" }}>Project Next</span>
        </Link>

        <ul className="nav-links">
          <li>
            <Link href="/" className="nav-link nav-actions">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/tickets" className="nav-link nav-actions">
              Tickets
            </Link>
          </li>
          <li>
            <Link href="/tickets/create" className="nav-link nav-actions">
              Create
            </Link>
          </li>
          <li>
            <Link href="/signup" className="nav-link nav-actions">
              SignUp
            </Link>
          </li>
        </ul>
        {user && <span>Hello, {user.email}</span>}
      </div>
    </nav>
  );
}
