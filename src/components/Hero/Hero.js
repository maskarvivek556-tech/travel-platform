
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Compass,
  Sparkles,
  Plane,
  Globe2
} from "lucide-react";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundShape} />

      <div className={`container ${styles.container}`}>
        <div className={styles.left}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowIcon}>
              <Sparkles size={14} />
            </span>
            YOUR NEXT ADVENTURE STARTS HERE
          </div>

          <h2>
            Life is short.
            <br />
            <span>Make it</span>
            <br />
            <span className={styles.colourText}>an adventure.</span>
          </h2>

          <p className={styles.description}>
            Discover breathtaking destinations, unforgettable road trips
            and beautiful experiences. Your dream journey starts with us.
          </p>

          <div className={styles.buttons}>
            <Link href="/packages" className={styles.primaryButton}>
              Explore Packages
              <ArrowUpRight size={19} />
            </Link>

            <Link href="/#booking" className={styles.secondaryButton}>
              Plan Your Trip
              <span><ArrowRight size={17} /></span>
            </Link>
          </div>

          <div className={styles.bottomInfo}>
            <div className={styles.infoIcon}>
              <Globe2 size={22} />
            </div>
            <div>
              <strong>Travel beyond ordinary</strong>
              <p>Find your next favourite destination</p>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageMain}>
            <div className={styles.imageLabel}>
              <MapPin size={14} />
              <span>Explore the beautiful world</span>
            </div>
          </div>

          <div className={styles.imageSmall} />

          <div className={styles.roundBadge}>
            <Compass size={28} />
            <span>EXPLORE</span>
            <strong>MORE</strong>
          </div>

          <div className={styles.destinationCard}>
            <div className={styles.destinationIcon}>
              <Plane size={20} />
            </div>
            <div>
              <small>YOUR JOURNEY</small>
              <strong>Starts right here</strong>
            </div>
            <ArrowUpRight size={20} />
          </div>

          <div className={styles.decorativeCircle} />
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>DISCOVER</span>
        <span className={styles.line} />
        <span>EXPERIENCE</span>
        <span className={styles.line} />
        <span>REMEMBER</span>
      </div>
    </section>
  );
}
