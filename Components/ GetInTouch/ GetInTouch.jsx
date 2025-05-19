import React, { useEffect } from "react";
import styles from "./ GetInTouch.module.css";
import Form from "./Form";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className={styles.main} id="contact-us">
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Let Build Something Together</h1>
          <p>
            Let's get on 30 min call to understand your project more. we might
            just roast your website and give you actionable tips for free :)
          </p>
          <ul>
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
          </ul>
        </div>
        <div className={styles.right}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
