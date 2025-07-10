import React from "react";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import HeroSection from "@/Components/HeroSection/HeroSection";
import BrandsWorked from "@/Components/BrandsWorked/BrandsWorked";
import CoreProblems from "@/Components/CoreProblems/CoreProblems";
import CardStacking from "@/Components/CardStacking/CardStacking";
import CaseStudy from "@/Components/CaseStudy/CaseStudy";
import TestimonialStack from "@/Components/Testimonial/TestimonialStack";
import Navbar from "@/Components/Navbar/Navbar";
import CoreProblemsNew from "@/Components/CoreProblems/CoreProblemsNew";
import GetInTouch from "@/Components/ GetInTouch/ GetInTouch";
import Footer from "@/Components/Footer/Footer";
import Features from "@/Components/Features/Features";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Design Agency for Product/Software Companies</title>
        <meta
          name="description"
          content="We build websites for Product & Software companies which bring them more leads and build trust in their market segment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.svg" />

        {/* OG META TAGS */}
        <meta
          property="og:title"
          content="Web Design Agency for Product/Software Companies"
        />
        <meta
          property="og:description"
          content="We build websites for Product & Software companies which bring them more leads and build trust in their market segment."
        />
        <meta
          property="og:image"
          content="https://www.bimboo.co/"
        />
        <meta property="og:url" content="https://www.bimboo.co/og-img.jpg" />
        <meta property="og:url" content="https://bimboo.co/og-img.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bimboo" />
      </Head>
      <main data-scroll-container>
        <Navbar />
        <HeroSection />
        <BrandsWorked />
        <CoreProblemsNew />
        <CardStacking />
        <Features />
        <CaseStudy />
        <TestimonialStack />
        <GetInTouch />
        <Footer />
      </main>
    </>
  );
}
