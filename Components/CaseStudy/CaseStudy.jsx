import React, { useRef } from "react";
import styles from "./CaseStudy.module.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const CaseStudy = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    const card = scrollRef.current?.querySelector(`.${styles.card}`);
    if (card) {
      const cardWidth = card.offsetWidth;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const card = scrollRef.current?.querySelector(`.${styles.card}`);
    if (card) {
      const cardWidth = card.offsetWidth;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  const CASE_STUDY_DATA = [
    {
      title:
        "How We Designed a Product Landing Page for a Finance Management Software.",
      description:
        "We built a high performance landing page for a finance management software from scratch in less 2 weeks, explaining their product features and what they do.",
      imageSrc: "/case-study/spendly.webp",
      pageURL: "#",
    },
    {
      title:
        "How We Designed a Website + Content Management System for China's Leading First Aid Manufacturer.",
      description:
        " Designed a professional, product-focused website with Contentful CMS for a Chinese first aid manufacturer, boosting credibility and streamlining catalog management while facilitating global client engagement.",
      imageSrc: "/case-study/godetia.webp",
      pageURL:
        "https://bimboo-case-study.super.site/database/how-we-designed-a-website-cms-for-chinas-leading-first-aid-manufacturer",
    },
    {
      title:
        "How We Helped an International Trading Company Launch Their Website in less than 3 weeks.",
      description:
        "We designed and built a clean, fast-loading website from scratch that establishes credibility, converts visitors with strategic CTAs, captures leads through custom forms, and reaches global audiences—all while maintaining a seamless user experience across all devices.",
      imageSrc: "/case-study/titc.webp",
      pageURL:
        "https://bimboo-case-study.super.site/how-we-helped-an-international-trading-company-launch-their-website-in-30-days",
    },
    {
      title:
        "How We Built an Online Recipe Sharing Platform using Next Js + Supabase along with Auth0.",
      description:
        "Discover how we built a lightning-fast, visually rich recipe platform that lets users explore, share, and save 3000+ recipes—with smooth navigation, mobile-first design, and seamless performance across all devices.",
      imageSrc: "/case-study/culinashare.webp",
      pageURL:
        "https://bimboo-case-study.super.site/how-we-built-an-online-recipe-sharing-platform",
    },
  ];

  return (
    <section className={styles.caseMain} id="case-study">
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Fade delay={0} duration={1500} triggerOnce>
            <h1>the work we did</h1>
          </Fade>
          <Fade delay={200} duration={1500} triggerOnce>
            <p>
              The unfiltered story behind our project—challenges, process, and
              how we made it.
            </p>
          </Fade>
        </div>
        <div className={styles.headerRight}>
          <div onClick={scrollLeft} className={styles.btns}>
            <img src="/icons/chevron-left.svg" alt="chevron left icon" />
          </div>
          <div onClick={scrollRight} className={styles.btns}>
            <img src="/icons/chevron-right.svg" alt="chevron right icon" />
          </div>
        </div>
      </div>

      <div ref={scrollRef} className={styles.caseContainer}>
        <Fade cascade damping={0.15} duration={2000} triggerOnce>
          {CASE_STUDY_DATA.map((caseStudy, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContainer}>
                <img
                  className={styles.cardImg}
                  src={caseStudy.imageSrc}
                  alt="website img"
                />

                <div className={styles.cardContent}>
                  <span>
                    <h1 className={styles.cardTitle}>{caseStudy.title}</h1>
                    {/* <p className={styles.cardDesc}>{caseStudy.description}</p> */}
                  </span>
                  <div className={styles.cardButtonGroup}>
                    <Link
                      href={caseStudy.pageURL}
                      target="_blank"
                      className={`${styles.readNow}`}
                    >
                      View Case Study
                      <img
                        src="/icons/arrow-up-right.svg"
                        alt="arrow"
                        height={"20px"}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default CaseStudy;
