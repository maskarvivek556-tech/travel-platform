import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Users, BriefcaseBusiness } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import styles from "./Fleet.module.css";

export default function Fleet() {
  return (
    <section className={`section ${styles.section}`} id="fleet">
      <div className="container">

        <div className="section-top">
          <div className="section-heading">
            <span className="eyebrow">
              <Sparkles size={16} /> OUR VEHICLE FLEET
            </span>

            <h2>
              Find your perfect ride.
              <br />
              <span>Travel in comfort.</span>
            </h2>

            <p>
              Explore our vehicle collection. Choose the right vehicle
              according to your group size, budget and travel needs.
            </p>
          </div>

          <Link href="/contact" className="text-link">
            Request a custom quote <ArrowRight size={18} />
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

                  <span className={styles.badge}>Available for booking</span>

                  <span className={styles.imageIcon}>
                    <Icon size={24} />
                  </span>
                </div>

                <div className={styles.content}>
                  <h3>{vehicle.name}</h3>
                  <p>{vehicle.detail}</p>

                  <div className={styles.specs}>
                    <span><Users size={16} /> {vehicle.passengers}</span>
                    <span><BriefcaseBusiness size={16} /> {vehicle.luggage}</span>
                  </div>

                  <div className={styles.bottom}>
                    <div>
                      <small>Starting rental price</small>
                      <strong>{vehicle.priceLabel}</strong>
                    </div>

                    <span className={styles.arrow}>
                      <ArrowUpRight size={21} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}