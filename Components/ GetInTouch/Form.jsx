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
      <h2 className={styles.title}>Let’s build something.</h2>

      <label htmlFor="name">Name</label>
      <input
        className={styles.input}
        name="name"
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        className={styles.input}
        name="email"
        type="email"
        placeholder="Your email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="company">Company</label>
      <input
        className={styles.input}
        name="company"
        type="text"
        placeholder="Company name (optional)"
        value={formData.company}
        onChange={handleChange}
      />

       <label htmlFor="social">Website / Social Media Link</label>
      <input
        className={styles.input}
        name="company"
        type="text"
        placeholder="https://"
        value={formData.company}
        onChange={handleChange}
      />

      <label htmlFor="goal">Tell me about your Project</label>
      <textarea
        className={styles.textarea}
        name="goal"
        placeholder="What’s your goal with this website?"
        value={formData.goal}
        onChange={handleChange}
      />

      <label htmlFor="budget">
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

      <button className={styles.button} type="submit" disabled={submitted}>
        {submitted ? "Sent!" : "Submit"}
      </button>
    </form>
  );
}
