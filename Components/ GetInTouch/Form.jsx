"use client";
import { useState } from "react";
import styles from "./Form.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    goal: "",
    timeline: "",
    budget: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
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
        <label className={styles.label} htmlFor="social">
          Website / Social Media Link (optional)
        </label>
        <input
          className={styles.input}
          name="company"
          type="text"
          placeholder="https://yourwebsite.com"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className={styles.inputDiv}>
        <label className={styles.label} htmlFor="goal">
          Tell me about your Project
        </label>
        <textarea
          className={styles.textarea}
          name="goal"
          placeholder="What's on your mind?"
          value={formData.goal}
          onChange={handleChange}
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
        >
          <option value="">Select</option>
          <option value="<500">&#60; $500</option>
          <option value="800-1200">$500 - $1500</option>
          <option value="1800+">$1500 +</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <button className={styles.button} type="submit" disabled={submitted}>
        {submitted ? "Sent!" : "Submit"}
      </button>
    </form>
  );
}
