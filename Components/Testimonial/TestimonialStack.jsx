import React, { useState } from "react";
import styles from "./TestimonialStack.module.css";
import TestimonialCard from "./TestimonialCard";
import { Fade } from "react-awesome-reveal";

const TestimonialStack = () => {
  const CALENDAR_LINK = "https://cal.com/work-with-bimboo/30min";

  const TESTIMONIAL_DATA = [
    {
      testimonialText: `
       <p>
          I am pleased to recommend Himanshu and his team at Bimboo for their
          exceptional work in web dev.
        </p>
        <p>
          From the initial consultation to the final launch, Himanshu
          demonstrated extreme creativity, outstanding presentation of Ideas for
          the website and a deep understanding of my needs. The website they
          developed not only looks fantastic but also functions seamlessly,
          enhancing my ability to connect with clients globally.
        </p>
        <p>
          Even after the launch, they were ready to make any modifications
          needed on the website and pushed the changes within an hour.
        </p>
      `,
      name: "Kayyush Thadani",
      bio: "Ex-Amazon India | Founder @Thadani International Trading",
      imgSrc: "/testimonial/titc.webp",
    },
    {
      testimonialText: `
       <p>
       Before working with Himanshu, we needed a professional website to showcase our services, products, and generate leads. He handled content, design, and development—making the process effortless for us. 
        </p>
        <p>
         What stood out the most was his attention and how seamlessly he brought our vision to life. The site looks great, works perfectly, and we can easily update products ourselves. I highly recommend his services at Bimboo.
        </p>
      `,
      name: "Paul",
      bio: "Founder & CEO @Godetia Medical",
      imgSrc: "/testimonial/godetia.webp",
    },
    {
      testimonialText: `
       <p>
     Exceptional hands-on responsive design skills. Deep understanding of Next.js, CSS and Web Design. Excellent communication abilities.
        </p>
      `,
      name: "Piyush Pandey",
      bio: "Software Engineer @Hipla",
      imgSrc: "/testimonial/hipla.webp",
    },
    {
      testimonialText: `
       <p>
          I had the pleasure of working closely with Himanshu Pal. Throughout this short duration, he demonstrated great dedication, enthusiasm, and a proactive attitude. His rapid integration into our team, coupled with effective communication and teamwork skills, significantly contributed to our events. Himanshu's willingness to take on challenges and eagerness to learn make him a valuable asset, and I wholeheartedly recommend him for any future endeavours.
        </p>
      `,
      name: "Disha Shah",
      bio: "Shark Tank Founder | Ex-Senior VP @Bobble AI | Founder & CEO @Gofig",
      imgSrc: "/testimonial/gofig.webp",
    },
    {
      testimonialText: `
       <p>
          looking so clean himanshu!
        </p>
      `,
      name: "Buildspace",
      bio: "we're the place where people build cool stuff. backed by a16z + y combinator.",
      imgSrc: "/testimonial/buildspace.webp",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className={`${styles.main}`} id="testimonials">
      <div className={`${styles.container} ${styles.magicpattern}`}>
        <div className={styles.header}>
          <Fade delay={0} duration={1500} triggerOnce>
            <h1 className={styles.testimonialHeading}>Here’s What They Say</h1>
          </Fade>

          <Fade delay={200} duration={1500} triggerOnce>
            <p className={styles.testimonialDesc}>
              Experiences shared by ppl who've walked alongside us, shaped our
              path, and witnessed our growth firsthand.
            </p>
          </Fade>
        </div>

        <div
          className={`${styles.carouselWrapper} ${
            isPaused ? styles.pauseAnimation : ""
          }`}
        >
          <div className={styles.scrollingTrack}>
            <Fade cascade damping={0.15} duration={1000} triggerOnce>
              {TESTIMONIAL_DATA.concat(TESTIMONIAL_DATA).map(
                (testimonial, index) => (
                  <div
                    className={styles.card}
                    key={index}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                  >
                    <TestimonialCard
                      testimonialText={testimonial.testimonialText}
                      name={testimonial.name}
                      bio={testimonial.bio}
                      imgSrc={testimonial.imgSrc}
                    />
                  </div>
                )
              )}
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStack;
