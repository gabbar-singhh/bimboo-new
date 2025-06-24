import React, { useEffect } from "react";
import styles from "./VideoTestimonial.module.css";

const VideoTestimonial = () => {
  useEffect(() => {
    // Load Vimeo API script only on client side
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <section className={styles.main}>
      <div className={styles.vimeoVideo}>
        <iframe
          src="https://player.vimeo.com/video/1095584757?h=7951c31353&badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="1.15rem"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          title="Kayyush's Testimonial"
          allowFullScreen
          className={styles.iframe}
        ></iframe>
      </div>
    </section>
  );
};

export default VideoTestimonial;
