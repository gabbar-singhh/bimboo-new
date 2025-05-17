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
            <Link href={'#services'}>
              <li>Services</li>
            </Link>
            <Link href={'https://www.linkedin.com/in/himanshufs/'} target="_blank">
              <li>Linkedin</li>
            </Link>
            <Link href={'#case-study'}>
              <li>Case Study</li>
            </Link>
            <Link href={'https://www.instagram.com/himanshu.fs/'} target="_blank">
              <li>Instagram</li>
            </Link>
            <Link href={'#testimonials'}>
              <li>Testimonials</li>
            </Link>
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
