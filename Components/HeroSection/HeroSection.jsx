"use client";

import React, { useEffect, useRef } from "react";
import styles from "./HeroSection.module.css";
import Link from "next/link";
import { Fade, Zoom } from "react-awesome-reveal";

const HeroSection = () => {
  const CALENDAR_LINK = "https://cal.com/work-with-bimboo/30min";

  const greenRef = useRef(null);
  const yellowRef = useRef(null);
  const violetRef = useRef(null);

  const moveCursor = (ref) => {
    if (ref.current) {
      const randomX = Math.random() * 50 - 25; // Random move within 50px horizontally (-25 to 25)
      const randomY = Math.random() * 50 - 25; // Random move within 50px vertically (-25 to 25)

      ref.current.style.transition = "transform 2s ease-in-out"; // Smooth transition
      ref.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  };

  useEffect(() => {
    const moveInterval = setInterval(() => {
      moveCursor(greenRef);
      moveCursor(yellowRef);
      moveCursor(violetRef);
    }, 2000); // Every 2 seconds, the position will change randomly.

    return () => clearInterval(moveInterval);
  }, []);

  return (
    <section className={styles.heroMain}>
      <div className={styles.blurredOverlay}></div>

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
        <Fade direction="up" delay={0} duration={600} triggerOnce>
          <h1>
            We build high converting websites for <br className={styles.breakCancel} />{" "}
            <span className={styles.highlight}>
              Product & Software companies
            </span>
          </h1>
        </Fade>
        <Fade direction="up" delay={200} duration={600} triggerOnce>
          <p>
            We build websites for Product & Software companies which predictably
            bring them more leads and build trust in their market segment
          </p>
        </Fade>

        <Fade delay={400} direction="up" duration={600} triggerOnce>
          <Link href={"#contact-us"} className={styles.ctaButton}>
            Book a Free <br className={styles.ctaBreakTag} /> Discovery Call{" "}
            <img
              src="/icons/arrow-up-right-fancy.svg"
              alt="arrow right"
              height="56px"
              width="auto"
            />
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default HeroSection;
