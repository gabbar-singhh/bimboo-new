import React from "react";
import styles from "./ GetInTouch.module.css";
import TallyForm from "./Form";
import Form from "./Form";

const GetInTouch = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Let's Build Something</h1>
          <img
            src="/icons/rocket.png"
            alt="rocket animated"
            height={"28px"}
            width={"28px"}
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
