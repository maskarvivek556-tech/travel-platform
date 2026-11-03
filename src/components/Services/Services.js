import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import styles from "./Services.module.css";

const serviceImages = {
  "Local Taxi": "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=85",
  "Outstation Cabs": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=85",
  "Airport Transfers": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=85",
  "Bus & Group Travel": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=85",
  "Train Tickets": "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&q=85",
  "Maharashtra ST": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=85",
  "Vehicle Rentals": "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=85",
  "Tour Packages": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=85",
};

const serviceLinks = [
  "/#booking",
  "/#booking",
  "/#booking",
  "/#booking",
  "/#booking",
  "/#booking",
  "/#booking",
  "/packages",
];

export default function Services() {
  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.heading}>
            <span className="eyebrow">
              <Sparkles size={14} /> OUR SERVICES
            </span>

            <h2>
              Everything travel.
              <br />
              <span>All in one place.</span>
            </h2>

            <p>
              From comfortable city rides to memorable holidays, discover
              travel services designed to make every journey easier.
            </p>
          </div>

          <Link href="/services" className={styles.exploreLink}>
            Explore all services <ArrowRight size={17} />
          </Link>
        </div>

        <div className={styles.grid}>
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                href={serviceLinks[index] || "/#booking"}
                className={styles.card}
                key={item.title}
              >
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url("${serviceImages[item.title]}")` }}
                  role="img"
                  aria-label={item.title}
                >
                  <span className={styles.tag}>{item.tag}</span>

                  <span className={styles.icon}>
                    <Icon size={22} />
                  </span>

                  <span className={styles.imageArrow}>
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className={styles.content}>
                  <span className={styles.number}>
                    SERVICE 0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <span className={styles.cardLink}>
                    Explore service <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={styles.bottomBanner}>
          <div>
            <span>TRAVEL MADE SIMPLE</span>
            <h3>One destination. Many ways to get there.</h3>
            <p>Choose your travel style and let us help with the journey.</p>
          </div>

          <Link href="/#booking">
            Book Your Journey <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}