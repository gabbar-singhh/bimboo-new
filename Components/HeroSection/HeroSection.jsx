"use client";

import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
  const CALENDAR_LINK = "https://cal.com/work-with-bimboo/30min";

  const greenRef = useRef(null);
  const yellowRef = useRef(null);
  const violetRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      const moveCursor = (ref, offsetX, offsetY) => {
        if (ref.current) {
          ref.current.style.transform = `translate(${
            2 * clientX * offsetX
          }px, ${2 * clientY * offsetY}px)`;
        }
      };

      moveCursor(greenRef, 0.015, 0.015);
      moveCursor(yellowRef, 0.02, 0.02);
      moveCursor(violetRef, 0.018, 0.018);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className={styles.heroMain}>
      <div className={styles.blurredOverlay}></div>

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

      <div className={styles.heroContainer}>
        {/* Floating Cursors */}
        <div
          ref={greenRef}
          className={`${styles.cursorMimic} ${styles.greenCursor}`}
        />
        <div
          ref={violetRef}
          className={`${styles.cursorMimic} ${styles.violetCursor}`}
        />
        <div
          ref={yellowRef}
          className={`${styles.cursorMimic} ${styles.yellowCursor}`}
        />

        <h1>
          We build high converting website for <br />{" "}
          <span className={styles.highlight}>Product & Software companies</span>
        </h1>
        <p>
          We build websites for Product & Software companies which predictably
          bring them more leads and build trust in their market segment
        </p>

        <Link href={CALENDAR_LINK} className={styles.ctaButton}>
          Book a Free Discovery Call{" "}
          <img
            src="/icons/arrow-up-right-fancy.svg"
            alt="arrow right"
            height="56px"
            width="auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
