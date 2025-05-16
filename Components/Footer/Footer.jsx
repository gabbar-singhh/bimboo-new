import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftFoot}>
          <img src="/logo-type.svg" alt="logo" height="36px" width="auto" />
          <div className={styles.footContact}>
            <h3>Contact Us:</h3>
            <Link href={"mailto:himanshu@bimboo.co"}>himanshu@bimboo.co</Link>
          </div>
        </div>
        <div className={styles.rightFoot}>
          <ul>
            <li>Services</li>
            <li>Linkedin</li>
            <li>Case Study</li>
            <li>Instagram</li>
            <li>Testimonials</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <p>© 2025 Bimboo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
