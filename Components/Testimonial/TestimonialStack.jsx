import React from "react";
import styles from "./TestimonialStack.module.css";
import TestimonialCard from "./TestimonialCard";
import Link from "next/link";

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
      bio: "Founder @Thadani International Trading | Ex-Amazon India",
      imgSrc: "/testimonial/titc.png",
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
      imgSrc: "/testimonial/godetia.png",
    },
    {
      testimonialText: `
       <p>
     Exceptional hands-on responsive design skills. Deep understanding of Next.js, CSS and Web Design. Excellent communication abilities.
        </p>
      `,
      name: "Piyush Pandey",
      bio: "Full Stack Engineer @Hipla",
      imgSrc: "/testimonial/hipla.png",
    },
    {
      testimonialText: `
       <p>
          I had the pleasure of working closely with Himanshu Pal. Throughout this short duration, he demonstrated great dedication, enthusiasm, and a proactive attitude. His rapid integration into our team, coupled with effective communication and teamwork skills, significantly contributed to our events. Himanshu's willingness to take on challenges and eagerness to learn make him a valuable asset, and I wholeheartedly recommend him for any future endeavours.
        </p>
      `,
      name: "Disha Shah",
      bio: "Founder & CEO @Gofig | Ex-Senior VP @Bobble AI | Ex- Director India, FrankfurtRheinMain GmbH | Angel Investor",
      imgSrc: "/testimonial/gofig.png",
    },
    {
      testimonialText: `
       <p>
          looking so clean himanshu!
        </p>
      `,
      name: "Buildspace",
      bio: "we're the place where people build cool stuff. backed by a16z + y combinator.",
      imgSrc: "/testimonial/buildspace.png",
    },
  ];

  return (
    <section className={`${styles.main}`}>
      <div className={`${styles.container} ${styles.magicpattern}`}>
        <div className={styles.header}>
          <h1 className={styles.testimonialHeading}>The Unfiltered Truth</h1>

          <p className={styles.testimonialDesc}>
            Experiences shared by ppl who've walked alongside us, shaped our
            path, and witnessed our growth firsthand.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.scrollingTrack}>
            {TESTIMONIAL_DATA.concat(TESTIMONIAL_DATA).map(
              (testimonial, index) => (
                <TestimonialCard
                  key={index}
                  testimonialText={testimonial.testimonialText}
                  name={testimonial.name}
                  bio={testimonial.bio}
                  imgSrc={testimonial.imgSrc}
                />
              )
            )}
          </div>
        </div>

        <Link href={CALENDAR_LINK} className={styles.ctaButton}>
          <div className={styles.glow}></div>
          Book a Free Discovery Call{" "}
          <img
            src="/icons/arrow-up-right-fancy.svg"
            alt="arrow right"
            height="56px"
            width="auto"
          />
        </Link>
      </div>
    </section>
  );
};

export default TestimonialStack;
