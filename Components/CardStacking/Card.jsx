"use client";
import React, { useRef } from "react";
import styles from "./Card.module.css";
import { useScroll, useTransform, motion } from "framer-motion";

const Card = ({ i, title, description, src, progress, range, targetScale }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className={styles.cardContainer}>
      <div
        className={styles.card}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
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
      </div>
    </div>
  );
};

export default Card;