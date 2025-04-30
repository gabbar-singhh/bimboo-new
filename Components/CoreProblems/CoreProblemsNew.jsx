"use client";
import React, { useRef } from "react";
import styles from "./CoreProblems.module.css";
import { Fade } from "react-awesome-reveal";

const CoreProblemsNew = () => {
  return (
    <section className={styles.problemsMain}>
      <Fade delay={0} duration={1500} triggerOnce>
        <h2 className={styles.problemsHeading}>
          Great Product, No Customers? <br />{" "}
          <span className={styles.climax}>
            Your website isn't working for you
          </span>
        </h2>
      </Fade>

      <ul className={styles.problemsContainer}>
        <Fade cascade damping={0.15} duration={3000}>
          <li className={`${styles.box} ${styles.box1}`}>
            <h3 className={styles.boxCount}>1</h3>
            <p className={styles.boxText}>
              Your unfair advantage is buried under weak storytelling and poor
              messaging.
            </p>
          </li>
          <li className={`${styles.box} ${styles.box2}`}>
            <h3 className={styles.boxCount}>2</h3>
            <p className={styles.boxText}>
              Your website is slow, outdated, and falling apart on mobile.
              <br /> <br />
              It screams "we dont care" — loud and clear.
            </p>
          </li>
          <li className={`${styles.box} ${styles.box3}`}>
            <h3 className={styles.boxCount}>33</h3>
            <p className={styles.boxText}>
              Customers don't take you seriously. <br />
              <br /> Your website kills trust before you even get a chance.
            </p>
          </li>
        </Fade>
      </ul>

      <Fade delay={200} duration={1500} triggerOnce>
        <p className={styles.problemsText}>
          If this sounds like you, here's how Bimboo can help
        </p>
      </Fade>
    </section>
  );
};

export default CoreProblemsNew;
