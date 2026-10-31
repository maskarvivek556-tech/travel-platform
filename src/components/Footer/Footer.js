
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

import styles from "./Footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Tour Packages", href: "/packages" },
  { label: "Our Fleet", href: "/fleet" },
  { label: "Corporate Travel", href: "/corporate" },
];

const services = [
  "Cab & Taxi",
  "Bus Rental",
  "Airport Transfers",
  "Vehicle Rental",
  "Group Transportation",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>T</span>
            <span>
              Travel<span className={styles.logoAccent}>Ease</span>
            </span>
          </Link>

          <p>
            Making every journey comfortable, memorable and hassle-free.
            Discover new destinations and travel with confidence.
          </p>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter size={17} />
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h3>Quick Links</h3>
          {quickLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <h3>Our Services</h3>
          {services.map((service) => (
            <Link href="/services" key={service}>
              {service}
              <ArrowUpRight size={13} />
            </Link>
          ))}
        </div>

        <div className={styles.column}>
          <h3>Get In Touch</h3>

          <div className={styles.contactItem}>
            <MapPin size={17} />
            <span>India</span>
          </div>

          <div className={styles.contactItem}>
            <Phone size={17} />
            <span>+91 98765 43210</span>
          </div>

          <div className={styles.contactItem}>
            <Mail size={17} />
            <span>hello@travelease.example</span>
          </div>

          <Link href="/contact" className={styles.contactButton}>
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {new Date().getFullYear()} TravelEase. All rights reserved.</p>

        <div>
          <Link href="/contact">Privacy Policy</Link>
          <Link href="/contact">Terms & Conditions</Link>
        </div>

        <a href="#" className={styles.backTop}>
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
