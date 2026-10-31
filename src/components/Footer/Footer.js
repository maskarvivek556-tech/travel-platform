"use client";

import Link from "next/link";
import { Route, Mail, Building2, ArrowRight, Heart } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.brand}>
            <span>
              <Route size={22} />
            </span>

            <b>
              travel<span>ease</span>
              <small>YOUR JOURNEY, SIMPLIFIED</small>
            </b>
          </Link>

          <p>
            Thoughtful travel, practical mobility and simpler journeys — for
            individuals, families and businesses.
          </p>

          <div className={styles.social}>
            <Link href="/contact">
              <Mail size={16} />
            </Link>

            <Link href="/corporate">
              <Building2 size={16} />
            </Link>
          </div>
        </div>

        <div className={styles.links}>
          <b>Explore</b>

          <Link href="/services">Travel Services</Link>
          <Link href="/packages">Tour Packages</Link>
          <Link href="/fleet">Our Fleet</Link>
          <Link href="/#booking">Find a Ride</Link>
        </div>

        <div className={styles.links}>
          <b>Corporate</b>

          <Link href="/corporate">Corporate Mobility</Link>
          <Link href="/contact">Employee Commute</Link>
          <Link href="/contact">Monthly Contracts</Link>
          <Link href="/contact">Group Travel</Link>
        </div>

        <div className={styles.news}>
          <b>Travel Notes</b>

          <p>Demo newsletter signup.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo only");
            }}
          >
            <input type="email" placeholder="Your email" required />
            <button type="submit">
              <ArrowRight size={16} />
            </button>
          </form>

          <small>Frontend demo only.</small>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} TravelEase</span>

        <span>
          Built with <Heart size={12} />
        </span>

        <Link href="/">Back to Top ↑</Link>
      </div>
    </footer>
  );
}