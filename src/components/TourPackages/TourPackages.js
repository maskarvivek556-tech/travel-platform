"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Heart,
  MapPin,
  Star,
  Sparkles,
} from "lucide-react";

import { packages } from "@/data/packages";
import styles from "./TourPackages.module.css";

export default function TourPackages() {
  const [saved, setSaved] = useState([]);

  function toggle(name) {
    setSaved((old) =>
      old.includes(name)
        ? old.filter((item) => item !== name)
        : [...old, name]
    );
  }

  return (
    <section className={`section ${styles.section}`} id="packages">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className="eyebrow">
              <Sparkles size={14} /> CURATED GETAWAYS
            </span>

            <h2>
              Your next adventure
              <br />
              <span>starts right here.</span>
            </h2>

            <p>
              Discover beautiful destinations, explore new places and create
              unforgettable memories with our handpicked travel packages.
            </p>
          </div>

          <Link href="/contact" className={styles.customLink}>
            Plan a Custom Trip <ArrowRight size={17} />
          </Link>
        </div>

        <div className={styles.grid}>
          {packages.map((p, i) => (
            <article className={styles.card} key={p.name}>
              <div
                className={styles.image}
                style={{ backgroundImage: `url("${p.image}")` }}
                role="img"
                aria-label={p.name}
              >
                <span className={styles.label}>{p.label}</span>

                <button
                  type="button"
                  className={`${styles.save} ${
                    saved.includes(p.name) ? styles.saved : ""
                  }`}
                  aria-label={
                    saved.includes(p.name)
                      ? `Remove ${p.name} from saved packages`
                      : `Save ${p.name}`
                  }
                  aria-pressed={saved.includes(p.name)}
                  onClick={() => toggle(p.name)}
                >
                  <Heart
                    size={19}
                    fill={saved.includes(p.name) ? "currentColor" : "none"}
                  />
                </button>

                <span className={styles.number}>0{i + 1}</span>

                <div className={styles.imageBottom}>
                  <MapPin size={15} />
                  <span>{p.place}</span>
                </div>
              </div>

              <div className={styles.content}>
                <div className={styles.topInfo}>
                  <span>FEATURED PACKAGE</span>
                  <div className={styles.rating}>
                    <Star size={15} fill="currentColor" />
                    {p.rating}
                  </div>
                </div>

                <h3>{p.name}</h3>

                <div className={styles.duration}>
                  <CalendarDays size={16} />
                  <span>{p.days}</span>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                  <div className={styles.price}>
                    <small>Starting from</small>
                    <strong>{p.price}</strong>
                    <span>per person</span>
                  </div>

                  <Link
                    href="/contact"
                    className={styles.explore}
                    aria-label={`Enquire about ${p.name}`}
                  >
                    Explore <ArrowUpRight size={17} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.bottomBanner}>
          <div>
            <span>YOUR JOURNEY, YOUR WAY</span>
            <h3>Can't find your dream destination?</h3>
            <p>Tell us what you have in mind. We'll help plan your trip.</p>
          </div>

          <Link href="/contact">
            Let's Plan Together <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}