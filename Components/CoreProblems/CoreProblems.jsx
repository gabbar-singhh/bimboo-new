import React from "react";
import styles from "./CoreProblems.module.css";

const CoreProblems = () => {
  return (
    <section className={styles.problemsMain}>
      <h2 className={styles.problemsHeading}>
        Great Product, No Customers? <br /> Your website isn't working for you
      </h2>

      <ul className={styles.problemsContainer}>
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
            Your website is slow, outdated, and falling apart on mobile. <br />{" "}
            <br /> It screams "we dont care" — loud and clear.
          </p>
        </li>
        <li className={`${styles.box} ${styles.box3}`}>
          <h3 className={styles.boxCount}>3</h3>
          <p className={styles.boxText}>
            Customers don't take you seriously. <br />
            <br /> Your website kills trust before you even get a chance.
          </p>
        </li>
      </ul>

      <p className={styles.problemsText}>
        if this is you, here's how we can help you exactly
      </p>
    </section>
  );
};

export default CoreProblems;
