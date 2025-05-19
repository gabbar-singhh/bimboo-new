import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  return (
    <nav className={styles.navMain}>
      <div onClick={() => window.location.href = "https://bimboo.co"} className={styles.logoImg}>
        <img src="/logo-type.svg" alt="logo" height="28px" width="auto" />
      </div>
      <ul>
        <Link href={"#services"}>
          <li>Services</li>
        </Link>
        <Link href={"#case-study"}>
          <li>Case Study</li>
        </Link>
        <Link href={"#testimonials"}>
          <li>Testimonials</li>
        </Link>
        <Link href={"#contact-us"}>
          <li>Contact Us</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
