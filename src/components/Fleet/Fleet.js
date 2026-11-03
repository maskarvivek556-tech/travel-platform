import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  BriefcaseBusiness,
  ShieldCheck,
  Gauge,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";
import styles from "./Fleet.module.css";

export default function Fleet() {
  return (
    <section className={`section ${styles.section}`} id="fleet">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className="eyebrow">
              <Sparkles size={15} /> OUR VEHICLE COLLECTION
            </span>

            <h2>
              The right ride for
              <br />
              <span>every journey.</span>
            </h2>

            <p>
              From comfortable city rides to spacious group travel,
              choose a vehicle that perfectly matches your journey.
            </p>
          </div>

          <Link href="/contact" className={styles.customLink}>
            Request a custom quote <ArrowRight size={17} />
          </Link>
        </div>

        <div className={styles.grid}>
          {vehicles.map((vehicle, index) => {
            const Icon = vehicle.icon;

            return (
              <Link
                href={`/fleet/${vehicle.slug}`}
                className={styles.card}
                key={vehicle.slug}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className={styles.imageBox}>
                  <img src={vehicle.image} alt={vehicle.name} />

                  <span className={styles.availability}>
                    <span className={styles.dot} />
                    Available for booking
                  </span>

                  <span className={styles.vehicleNumber}>
                    0{index + 1}
                  </span>

                  <span className={styles.imageIcon}>
                    <Icon size={23} />
                  </span>
                </div>

                <div className={styles.content}>
                  <span className={styles.category}>
                    {vehicle.tone === "peach" || vehicle.tone === "purple"
                      ? "GROUP TRAVEL"
                      : "PERSONAL TRAVEL"}
                  </span>

                  <h3>{vehicle.name}</h3>
                  <p className={styles.description}>{vehicle.detail}</p>

                  <div className={styles.specs}>
                    <div>
                      <Users size={17} />
                      <span>{vehicle.passengers}</span>
                    </div>

                    <div>
                      <BriefcaseBusiness size={17} />
                      <span>{vehicle.luggage}</span>
                    </div>
                  </div>

                  <div className={styles.benefit}>
                    <ShieldCheck size={15} />
                    Comfortable travel experience
                  </div>

                  <div className={styles.bottom}>
                    <div className={styles.price}>
                      <small>STARTING FROM</small>
                      <strong>{vehicle.priceLabel}</strong>
                    </div>

                    <span className={styles.explore}>
                      View Details <ArrowUpRight size={17} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.fleetIntro}>
          <span className={styles.fleetIntroLabel}>OUR FLEET</span>
          <h3>
            Choose the right ride for your route.
          </h3>
          <p>
            Illustrative vehicle categories for solo travellers, families,
            teams and groups.
          </p>
        </div>

        <div className={styles.banner}>
          <div className={styles.bannerIcon}>
            <Gauge size={26} />
          </div>

          <div className={styles.bannerText}>
            <span>NEED A DIFFERENT VEHICLE?</span>
            <h3>We have the perfect ride for your group.</h3>
            <p>Contact our team for customized travel arrangements.</p>
          </div>

          <Link href="/contact">
            Get a Free Quote <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}