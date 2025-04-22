import React from "react";
import styles from "./TestimonialCard.module.css";

const TestimonialCard = ({ testimonialText, name, bio, imgSrc }) => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <span dangerouslySetInnerHTML={{ __html: testimonialText }}></span>

        <div className={styles.footer}>
          <img
            src={imgSrc}
            className={styles.profileImg}
            alt="profile image"
            height={"56px"}
            width={"auto"}
          />
          <div className={styles.content}>
            <h2>{name}</h2>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
