import React from "react";
import styles from "./Features.module.css";
import { Fade } from "react-awesome-reveal";

const Features = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
         <Fade delay={0} duration={1500} triggerOnce>
        <h2 className={styles.featuresHeading}>What makes us <span className={styles.bimboo}>different?</span></h2>
         </Fade>

        <ul className={styles.featuresList}>
            <Fade cascade damping={0.15} triggerOnce duration={1500}>
          <li className={styles.feature}>
            <img
              src="/features/layout-dashboard.svg"
              alt="layout dashboard"
              height={48}
            />
            <h3>Responsive Design with Modern Frameworks</h3>
            <p>
              Flawless experiences on every device, built with Next.js and
              Figma.
            </p>
          </li>
          <li className={styles.feature}>
            <img src="/features/zap.svg" alt="zap" height={48} />
            <h3>Lighting Fast</h3>
            <p>
              Optimized code for Fast-loading pages with smooth interactions.
            </p>
          </li>
          <li className={styles.feature}>
            <img
              src="/features/mouse-pointer-click.svg"
              alt="mouse pointer click"
              height={54}
            />
            <h3>Conversion Focused UI/UX</h3>
            <p>
              Design that drive results and gets you more customers, not just
              compliments.
            </p>
          </li>
          <li className={styles.feature}>
            <img src="/features/puzzle.svg" alt="puzzle" height={48} />
            <h3>Custom Integrations</h3>
            <p>
              Tailored solutions to your website from APIs to third-party tools.
            </p>
          </li>
          <li className={styles.feature}>
            <img
              src="/features/message-circle.svg"
              alt="message circle"
              height={48}
            />
            <h3>Quick Updates</h3>
            <p>
              Less meeting, more doing — quick updates through WhatsApp & Loom.
            </p>
          </li>
          <li className={styles.feature}>
            <img src="/features/repeat.svg" alt="repeat" height={48} />
            <h3>Ongoing Support</h3>
            <p>
              Regular maintenance & updates to keep your site fresh and
              performing
            </p>
          </li>
          </Fade>
        </ul>
      </div>
    </section>
  );
};

export default Features;
