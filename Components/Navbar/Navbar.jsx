import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [showMenuBox, setShowMenuBox] = useState(false);

  const showMenuBoxHandler = () => {
    setShowMenuBox((prev) => !prev);
  };
  return (
    <>
      <nav className={styles.navMain}>
        <div className={styles.navContainer}>
          <div
            onClick={() => (window.location.href = "/")}
            className={styles.logoImg}
          >
            <img src="/logo-type.svg" alt="logo" height="28px" width="auto" />
          </div>
          <ul className={styles.menuList}>
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

          <div className={styles.hamburgerMenu} onClick={showMenuBoxHandler}>
            {!showMenuBox ? (
              <img
                src="/icons/menu.svg"
                alt="logo"
                height="28px"
                width="auto"
              />
            ) : (
              <img src="/icons/x.svg" alt="logo" height="28px" width="auto" />
            )}
          </div>
        </div>

        <div className={`${styles.menuBox} ${!showMenuBox ? styles.hide : ""}`}>
          <ol className={styles.menuBoxList}>
            <Link href={"#services"}>
              <li onClick={showMenuBoxHandler}>Our Services</li>
            </Link>
            <Link href={"#case-study"}>
              <li onClick={showMenuBoxHandler}>Case Studies</li>
            </Link>
            <Link href={"#testimonials"}>
              <li onClick={showMenuBoxHandler}>Testimonials</li>
            </Link>
            <Link href={"#contact-us"}>
              <li onClick={showMenuBoxHandler}>Contact Us</li>
            </Link>
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
