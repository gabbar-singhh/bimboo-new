import React from "react";
import styles from "./BrandsWorked.module.css";
import { Fade } from "react-awesome-reveal";

const logos = [
  "/brands/1.svg",
  "/brands/2.svg",
  "/brands/3.svg",
  "/brands/4.svg",
  "/brands/5.svg",
  "/brands/6.svg",
];

const BrandsWorked = () => {
  return (
    <div className={styles.brandsMain}>
      <Fade delay={0} duration={1000} fraction={1} triggerOnce>
        <h2>
          Worked with brands across various projects, collabs & other
          initiatives
        </h2>
      </Fade>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
          {[...logos, ...logos].map((logo, idx) => (
            <div className={styles.logoItem} key={idx}>
              <Fade delay={0} duration={1000} triggerOnce>
                <img src={logo} alt={`logo-${idx}`} />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsWorked;
