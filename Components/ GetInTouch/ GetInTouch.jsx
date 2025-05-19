import React, { useEffect } from "react";
import styles from "./ GetInTouch.module.css";
import Form from "./Form";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const GetInTouch = () => {
  return (
    <section className={styles.main} id="contact-us">
      <div className={styles.container}>
        <div className={styles.left}>
          <Fade delay={0} duration={1500} triggerOnce>
            <h1>Let Build Something Together</h1>
          </Fade>
          <Fade delay={0} duration={1500} triggerOnce>
            <p>
              Let's get on 30 min call to understand your project more. we might
              just roast your website and give you actionable tips for free :)
            </p>
          </Fade>
          <ul>
            <Fade cascade damping={0.15} duration={2000} triggerOnce>
              <Link href={"mailto:himanshu@bimboo.co"} target="_blank">
                <li>
                  <img src="/icons/mail.svg" height={45} alt="email icon" />
                  himanshu@bimboo.co
                </li>
              </Link>

              <Link
                href={
                  "https://wa.me/917701973093?text=Hey!%0A%0AI%20need%20a%20help%20regarding%20a%20project."
                }
                target="_blank"
              >
                <li>
                  <img src="/icons/whatsapp.svg" alt="email icon" height={45} />{" "}
                  Ping me on WhatsApp
                </li>
              </Link>

              <Link
                href={"https://maps.app.goo.gl/v3BKeuWutXPgeARw8"}
                target="_blank"
              >
                <li>
                  <img src="/icons/map-pin.svg" alt="email icon" height={45} />{" "}
                  Pune, India
                </li>
              </Link>
            </Fade>
          </ul>
        </div>
        <div className={styles.right}>
          <Fade duration={1000} triggerOnce>
            <Form />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
