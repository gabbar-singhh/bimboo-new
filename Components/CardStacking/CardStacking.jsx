"use client";
import styles from "./CardStacking.module.css";
import { projects } from "./data";
import Card from "./Card";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
      <main className={styles.container} ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      {/* <button className={styles.ctaButton}>Secure Your April Slot NOW!</button> */}
      </main>
  );
}
