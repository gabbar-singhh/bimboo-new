import React, { useRef } from "react";
import styles from "./CaseStudy.module.css";
import Link from "next/link";

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

  return (
    <section className={styles.caseMain}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>the work we did</h1>
          <p>
            The unfiltered story behind our project—challenges, process, tools,
            and how we made it.
          </p>
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
        {/* CARD 1 */}
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <img
              className={styles.cardImg}
              src={`/casestudy1.png`}
              alt="website img"
            />

            <div className={styles.cardContent}>
              <span>
                <h1 className={styles.cardTitle}>
                  How We Designed a Website + Content Management System for
                  China's Leading First Aid Manufacturer.
                </h1>
                <p className={styles.cardDesc}>
                  Designed a professional, product-focused website with
                  Contentful CMS for a Chinese first aid manufacturer, boosting
                  credibility and streamlining catalog management while
                  facilitating global client engagement.
                </p>
              </span>
              <div className={styles.cardButtonGroup}>
                <Link href={"/"} className={`${styles.readNow}`}>
                  Read Now{" "}
                  <img
                    src="/icons/arrow-up-right.svg"
                    alt="arrow"
                    height={"20px"}
                  />
                </Link>
                <div className={`${styles.download}`}>
                  Download as PDF{" "}
                  <img src="/icons/download.svg" alt="arrow" height={"20px"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <img
              className={styles.cardImg}
              src={`/casestudy2.png`}
              alt="website img"
            />

            <div className={styles.cardContent}>
              <span>
                <h1 className={styles.cardTitle}>
                  How We Helped an International Trading Company Launch Their
                  Website in less than 4 weeks.
                </h1>
                <p className={styles.cardDesc}>
                  We designed and built a clean, fast-loading website from
                  scratch that establishes credibility, converts visitors with
                  strategic CTAs, captures leads through custom forms, and
                  reaches global audiences—all while maintaining a seamless user
                  experience across all devices.
                </p>
              </span>
              <div className={styles.cardButtonGroup}>
                <Link href={"/"} className={`${styles.readNow}`}>
                  Read Now{" "}
                  <img
                    src="/icons/arrow-up-right.svg"
                    alt="arrow"
                    height={"20px"}
                  />
                </Link>
                <div className={`${styles.download}`}>
                  Download as PDF{" "}
                  <img src="/icons/download.svg" alt="arrow" height={"20px"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <img
              className={styles.cardImg}
              src={`/casestudy3.png`}
              alt="website img"
            />

            <div className={styles.cardContent}>
              <span>
                <h1 className={styles.cardTitle}>
                  How We Built an Online Recipe Sharing Platform using Next Js +
                  Supabase along with Auth0 for Authentication.
                </h1>
                <p className={styles.cardDesc}>
                  Discover how we built a lightning-fast, visually rich recipe
                  platform that lets users explore, share, and save 3000+
                  recipes—with smooth navigation, mobile-first design, and
                  seamless performance across all devices.
                </p>
              </span>
              <div className={styles.cardButtonGroup}>
                <Link href={"/"} className={`${styles.readNow}`}>
                  Read Now{" "}
                  <img
                    src="/icons/arrow-up-right.svg"
                    alt="arrow"
                    height={"20px"}
                  />
                </Link>
                <div className={`${styles.download}`}>
                  Download as PDF{" "}
                  <img src="/icons/download.svg" alt="arrow" height={"20px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
