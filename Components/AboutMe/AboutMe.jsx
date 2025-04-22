import React from "react";
import Link from "next/link";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  const LINKEDIN_URL = "https://www.linkedin.com/in/himanshufs/";

  return (
    <section className={styles.aboutMain}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <h1>Hey! I'm Himanshu Pal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolores illum dolore consequuntur porro aperiam quos
            veniam, veritatis, vero quasi harum ipsum consequatur iste
            asperiores dolorem iure. Cupiditate ad impedit repellat est? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
            dolores illum dolore consequuntur porro aperiam quos veniam,
            veritatis, vero quasi harum ipsum consequatur iste asperiores
            dolorem iure. Cupiditate ad impedit repellat est?
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            perspiciatis, cumque totam odio iusto adipisci possimus minus sit
            perferendis fuga ipsam dolorum dolore corporis. Nemo minima
            cupiditate dolor ea adipisci voluptatem eaque! Sunt, ratione?
          </p>

          <div className={styles.ctaButtons}>
            <Link className={styles.bookBtn} href="/">
              Book a Free Discovery Call
            </Link>
            <Link
              className={styles.linkedinBtn}
              target="_blank"
              href={LINKEDIN_URL}
            >
              Let's Connect on LinkedIn
            </Link>
          </div>
        </div>
        <img className={styles.aboutImg} src="/placeholder.png" alt="" />
      </div>
    </section>
  );
};

export default AboutMe;
