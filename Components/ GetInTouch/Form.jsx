"use client";
import { useState } from "react";
import styles from "./Form.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    socialUrl: "",
    projectInfo: "",
    budget: "",
  });

  const [submitBtnText, setSubmitBtnText] = useState("Submit");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);

    setTimeout(() => {
      setSubmitBtnText("- - -");
    }, 3000);

    setSubmitBtnText("Sent!");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <span className={styles.nameCompanySpan}>
        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="company">
            Company (optional)
          </label>
          <input
            className={styles.input}
            name="company"
            type="text"
            placeholder="Your company name"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
      </span>

      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor="email">
          Business Email
        </label>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor="socialUrl">
          Website / Social Media Link (optional)
        </label>
        <input
          className={styles.input}
          name="socialUrl"
          type="text"
          placeholder="https://yourwebsite.com"
          value={formData.socialUrl}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor="projectInfo">
          Tell me about your Project
        </label>
        <textarea
          className={styles.textarea}
          name="projectInfo"
          placeholder="What's on your mind?"
          value={formData.projectInfo}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor="budget">
          How much are you looking to invest on this project?
        </label>
        <select
          className={styles.select}
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="<500">&#60; $500</option>
          <option value="500-1500">$500 - $1500</option>
          <option value="1500+">$1500 +</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <button className={styles.button} type="submit">
        {submitBtnText}
      </button>
    </form>
  );
}
