import React from "react";
import styles from "./BrandsWorked.module.css";

const BrandsWorked = () => {
  return (
    <div className={styles.brandsMain}>
      <h2>
        Worked with brands across various projects, collabs & other initiatives
      </h2>

      <div className={styles.logos}>
        <div className={styles.logosSlide}>
          <img src={`/brands/1.svg`} alt={"brands logo"} height={"64px"} />{" "}
          <img src={`/brands/2.svg`} alt={"brands logo"} height={"68px"} />{" "}
          <img src={`/brands/3.svg`} alt={"brands logo"} height={"64px"} />{" "}
          <img src={`/brands/4.svg`} alt={"brands logo"} height={"68px"} />{" "}
          <img
            src={`/brands/5.svg`}
            alt={"brands logo"}
            height={"72px"}
            width={"auto"}
          />{" "}
          <img src={`/brands/6.svg`} alt={"brands logo"} height={"84px"} />
          <img src={`/brands/1.svg`} alt={"brands logo"} height={"64px"} />{" "}
          <img src={`/brands/2.svg`} alt={"brands logo"} height={"68px"} />{" "}
          <img src={`/brands/3.svg`} alt={"brands logo"} height={"64px"} />{" "}
          <img src={`/brands/4.svg`} alt={"brands logo"} height={"68px"} />{" "}
          <img
            src={`/brands/5.svg`}
            alt={"brands logo"}
            height={"72px"}
            width={"auto"}
          />{" "}
          <img src={`/brands/6.svg`} alt={"brands logo"} height={"84px"} />
          <img src={`/brands/1.svg`} alt={"brands logo"} height={"64px"} />{" "}
          <img src={`/brands/2.svg`} alt={"brands logo"} height={"68px"} />{" "}
          <img src={`/brands/3.svg`} alt={"brands logo"} height={"64px"} />{" "}
          <img src={`/brands/4.svg`} alt={"brands logo"} height={"68px"} />{" "}
          <img
            src={`/brands/5.svg`}
            alt={"brands logo"}
            height={"72px"}
            width={"auto"}
          />{" "}
          <img src={`/brands/6.svg`} alt={"brands logo"} height={"84px"} />
        </div>
      </div>
    </div>
  );
};

export default BrandsWorked;
