"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Card.module.css";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import getCurrentMonth from "@/utils/getCurrentMonth";

const Card = ({
  i,
  title,
  description,
  src,
  progress,
  range,
  targetScale,
  showCTA,
}) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);

  const [beforeVal, setBeforeVal] = useState({
    img: `url("/service/research-check.png")`,
    top: "55%",
    right: "32%",
  });

  const [afterVal, setAfterVal] = useState({
    img: `url("/service/strategy-check.png")`,
    top: "20%",
    right: "2%",
  });

  useEffect(() => {
    if (i === 0) {
      setBeforeVal({
        img: `url("/service/research-check.png")`,
        top: "55%",
        right: "28%",
      });
      setAfterVal({
        img: `url("/service/strategy-check.png")`,
        top: "20%",
        right: "2%",
      });
    } else if (i === 1) {
      setBeforeVal({
        img: `url("/service/cursor-check.png")`,
        top: "58%",
        right: "28%",
      });
      setAfterVal({
        img: `url("/service/handshake-check.png")`,
        top: "20%",
        right: "2%",
      });
    } else if (i === 2) {
      setBeforeVal({
        img: `url("/service/fast-check.png")`,
        top: "70%",
        right: "28%",
      });
      setAfterVal({
        img: `url("/service/secure-check.png")`,
        top: "20%",
        right: "2%",
      });
    }
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,

          "--floating-before-img": beforeVal.img,
          "--floating-after-img": afterVal.img,

          "--position-before-top": beforeVal.top,
          "--position-before-right": beforeVal.right,

          "--position-after-top": afterVal.top,
          "--position-after-right": afterVal.right,
        }}
      >
        <div className={styles.body}>
          <h2 className={styles.cardHeading}>{title}</h2>
          <div
            className={styles.cardDescription}
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
        <motion.img
          style={{ scale: imageScale }}
          className={styles.cardImg}
          src={`/${src}`}
          alt="image"
        />
        {showCTA && (
          <Link className={styles.ctaButton} href={"#contact-us"}>
            Secure Your {getCurrentMonth()} Slot
            <img
              src="icons/arrow-up-right-fancy.svg"
              alt="arrow right"
              height={"56px"}
              width={"auto"}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
