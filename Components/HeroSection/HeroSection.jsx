import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroMain}>
      <div className={styles.blurredOverlay}></div>
      <nav className={styles.navMain}>
        <div className={styles.logoImg}>
          <img src="/logo-type.svg" alt="logo" height={"28px"} width={"auto"} />
        </div>
        <ul>
          <li>Services</li>
          <li>Process</li>
          <li>Case Study</li>
          <li>Testimonials</li>
        </ul>
      </nav>

      <div className={styles.heroContainer}>
        <h1>
          We build high converting website for <br /> Product & Software
          companies
        </h1>
        <p>
          We build websites for Product & Software companies which predictably
          bring them more leads and build trust in their market segment
        </p>
        <div className={styles.ctaButton}>
          Book a Free Discovery Call{" "}
          <img
            src="/icons/arrow-right.svg"
            alt="arrow right"
            height={"26px"}
            width={"auto"}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
