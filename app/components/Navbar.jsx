// import Link from "next/link";
import Image from "next/image";
import Logo from "./logo2.png";
// import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <Image
            src={Logo}
            alt="Arian Logo"
            width={100}
            quality={100}
            placeholder="blur"
          />
          <span>Project Next</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link active">
              Dashboard
            </a>
          </li>
          <li>
            <a href="/tickets" className="nav-link">
              Tickets
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
