
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import styles from "./Contact.module.css";

const initialForm = {
  name: "",
  email: "",
  company: "",
  need: "Employee pick-up & drop",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [notice, setNotice] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setNotice("");
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const old = JSON.parse(
        localStorage.getItem("travelease-inquiries") || "[]"
      );

      const inquiry = {
        ...form,
        id: Date.now(),
        createdAt: new Date().toLocaleString("en-IN"),
      };

      localStorage.setItem(
        "travelease-inquiries",
        JSON.stringify([inquiry, ...old])
      );

      setNotice("success");
      setForm(initialForm);
    } catch (error) {
      setNotice("error");
    }
  }

  return (
    <section className={styles.section} id="contact">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">LET'S PLAN SOMETHING</span>

          <h2>
            Your next journey
            <br />
            <span>starts with a hello.</span>
          </h2>

          <p className={styles.description}>
            Whether you are planning a family holiday, booking a cab
            or arranging corporate transportation, we are here to help.
            Tell us about your plans.
          </p>

          <div className={styles.contactCards}>
            <a href="tel:+919876543210" className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <Phone size={20} />
              </div>
              <div>
                <small>CALL OUR TEAM</small>
                <h3>+91 98765 43210</h3>
                <p>Demo contact number</p>
              </div>
              <ArrowRight size={17} className={styles.arrow} />
            </a>

            <a
              href="mailto:hello@travelease.example"
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>
                <Mail size={20} />
              </div>
              <div>
                <small>EMAIL US</small>
                <h3>hello@travelease.example</h3>
                <p>Demo email address</p>
              </div>
              <ArrowRight size={17} className={styles.arrow} />
            </a>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>
                <MapPin size={20} />
              </div>
              <div>
                <small>OUR LOCATION</small>
                <h3>India</h3>
                <p>Serving travel requirements across India</p>
              </div>
            </div>
          </div>

          <div className={styles.trustNote}>
            <ShieldCheck size={20} />
            <div>
              <b>Your information stays in this browser</b>
              <p>
                This is a frontend demo. Inquiry data is saved locally,
                not sent to a server.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.formCard}>
          <div className={styles.formHeader}>
            <div>
              <span className="eyebrow">SEND AN INQUIRY</span>
              <h3>Let's talk about your trip.</h3>
              <p>Fill in the details below to get started.</p>
            </div>

            <div className={styles.formIcon}>
              <Mail size={23} />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <label className="field-label">
                Your name *
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label className="field-label">
                Email address *
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <label className="field-label">
              Company name
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company (optional)"
              />
            </label>

            <label className="field-label">
              What do you need?
              <select
                name="need"
                value={form.need}
                onChange={handleChange}
              >
                <option>Employee pick-up & drop</option>
                <option>Corporate cab contract</option>
                <option>Airport transfers</option>
                <option>Group transportation</option>
                <option>Tour package</option>
                <option>Personal travel</option>
                <option>Other travel service</option>
              </select>
            </label>

            <label className="field-label">
              Tell us about your requirements
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your destination, dates, number of travellers..."
              />
            </label>

            <button
              className={`button button-primary ${styles.submitButton}`}
              type="submit"
            >
              Send Inquiry
              <ArrowRight size={17} />
            </button>

            {notice === "success" && (
              <div className={styles.successMessage} role="status">
                <CheckCircle2 size={19} />
                <span>
                  Thank you! Your inquiry has been saved successfully.
                </span>
              </div>
            )}

            {notice === "error" && (
              <p className={styles.errorMessage} role="alert">
                Something went wrong while saving. Please try again.
              </p>
            )}

            <div className={styles.formFooter}>
              <Clock3 size={14} />
              Your details are stored locally in this browser.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
