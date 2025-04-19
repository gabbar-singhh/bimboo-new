"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import styles from "./Timeline.module.css";

const timelineData = [
  {
    year: "2021",
    title: "Project Kickoff",
    description: "Built the first prototype.",
  },
  {
    year: "2022",
    title: "Beta Launch",
    description: "Invited first 500 users.",
  },
  {
    year: "2023",
    title: "Public Release",
    description: "Crossed 10k+ active users.",
  },
  {
    year: "2024",
    title: "Next Chapter",
    description: "New features, better UX.",
  },
];

export default function Timeline() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 20 });

  const parallax = useTransform(scrollYProgress, [0, 1], ["0px", "-100px"]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className={styles.wrapper}>
      <motion.img
        src="/bg-hero-1.pn"
        alt="Parallax Background"
        className={styles.parallaxImage}
        style={{ y: parallax, scale }}
      />

      <motion.div className={styles.progress} style={{ scaleY }} />
      <motion.div
        className={styles.timeline}
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className={styles.dot}
              animate={{ scale: [1, 1.5, 1], boxShadow: "0 0 12px #a855f7" }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
            <div className={styles.content}>
              <span className={styles.year}>{item.year}</span>
              <motion.div>
                <h3>{item.title}</h3>
              </motion.div>
              <motion.div>
                <p>{item.description}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
