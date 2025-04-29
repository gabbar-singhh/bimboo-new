"use client";
import React, { useRef } from "react";
import styles from "./CoreProblems.module.css";
import { motion, useInView } from "framer-motion";

const boxVariants = [
  { x: -200, y: -200, rotate: 120 }, // Box 1
  { x: 0, y: 200, rotate: 75 }, // Box 2
  { x: 200, y: 200, rotate: 30 }, // Box 3
];

const CoreProblems = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className={styles.problemsMain} ref={ref}>
      <h2 className={styles.problemsHeading}>
        Great Product, No Customers? <br />{" "}
        <span className={styles.climax}>Your website isn't working for you</span>
      </h2>

      <ul className={styles.problemsContainer}>
        {[1, 2, 3].map((num, i) => (
          <motion.li
            key={i}
            className={`${styles.box} ${styles[`box${num}`]}`}
            initial={boxVariants[i]}
            animate={
              isInView
                ? { x: 0, y: 0, rotate: 0, opacity: 1 }
                : { ...boxVariants[i], opacity: 0 }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <h3 className={styles.boxCount}>{num}</h3>
            <p className={styles.boxText}>
              {i === 0 &&
                `Your unfair advantage is buried under weak storytelling and poor messaging.`}
              {i === 1 && (
                <>
                  Your website is slow, outdated, and falling apart on mobile.
                  <br /> <br />
                  It screams "we dont care" — loud and clear.
                </>
              )}
              {i === 2 && (
                <>
                  Customers don't take you seriously. <br />
                  <br /> Your website kills trust before you even get a chance.
                </>
              )}
            </p>
          </motion.li>
        ))}
      </ul>

      <p className={styles.problemsText}>
        If this sounds like you, here's how Bimboo can help
      </p>
    </section>
  );
};

export default CoreProblems;
