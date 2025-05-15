"use client";
import styles from "./CardStacking.module.css";
import { projects } from "./data";
import Card from "./Card";
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import Link from "next/link";
import getCurrentMonth from "@/utils/getCurrentMonth";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const CALENDAR_LINK = "https://cal.com/work-with-bimboo/30min";

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
      <div className={styles.wrapperCTA}>
        {/* 🔴 add shiny button animation and update the text also */}
        <Link className={styles.ctaButton} href={CALENDAR_LINK}>
          Secure Your {getCurrentMonth()} Slot
          <img
            src="icons/arrow-up-right-fancy.svg"
            alt="arrow right"
            height={"56px"}
            width={"auto"}
          />
        </Link>
      </div>
    </main>
  );
}
