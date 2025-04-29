import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navMain}>
      <div className={styles.logoImg}>
        <img src="/logo-type.svg" alt="logo" height="28px" width="auto" />
      </div>
      <ul>
        <li>Services</li>
        <li>Process</li>
        <li>Case Study</li>
        <li>Testimonials</li>
      </ul>
    </nav>
  );
};

export default Navbar;
