
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Users,
  Plane,
  CalendarDays,
} from "lucide-react";

import styles from "./Corporate.module.css";

const features = [
  {
    icon: Users,
    title: "Employee Pick-up & Drop",
    description: "Reliable daily office transportation for your employees.",
  },
  {
    icon: Plane,
    title: "Business & Airport Travel",
    description: "Comfortable rides for meetings, events and airport transfers.",
  },
  {
    icon: CalendarDays,
    title: "Monthly Cab Contracts",
    description: "Flexible monthly transportation plans for your business.",
  },
  {
    icon: Clock3,
    title: "Group & Shift Transportation",
    description: "Transportation solutions for different teams and shifts.",
  },
];

export default function Corporate() {
  return (
    <section className={styles.section} id="corporate">
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <span className="eyebrow">
            <Building2 size={15} />
            TRAVELEASE FOR BUSINESS
          </span>

          <h2>
            Smarter travel.
            <br />
            <span>Stronger business.</span>
          </h2>

          <p className={styles.description}>
            Make business transportation easier with reliable corporate
            travel solutions. From employee commutes to business meetings,
            we help your team travel comfortably.
          </p>

          <div className={styles.features}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div className={styles.feature} key={feature.title}>
                  <div className={styles.featureIcon}>
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/contact" className={`button ${styles.cta}`}>
            Discuss Your Requirements
            <ArrowRight size={17} />
          </Link>

          <div className={styles.note}>
            <CheckCircle2 size={15} />
            <span>Custom transportation solutions for businesses</span>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.photo}>
            <div className={styles.photoLabel}>
              <span></span>
              BUSINESS TRAVEL SOLUTIONS
            </div>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.cardTop}>
              <div className={styles.cardIcon}>
                <BriefcaseBusiness size={20} />
              </div>
              <span>YOUR BUSINESS, OUR PRIORITY</span>
            </div>

            <h3>
              Your team deserves
              <br />
              a better way to travel.
            </h3>

            <div className={styles.divider}></div>

            <div className={styles.stats}>
              <div>
                <span className={styles.statIcon}>
                  <Users size={17} />
                </span>
                <b>Team Travel</b>
                <small>Organised transport</small>
              </div>

              <div>
                <span className={styles.statIcon}>
                  <Clock3 size={17} />
                </span>
                <b>Flexible Timing</b>
                <small>Shift-based travel</small>
              </div>
            </div>

            <Link href="/contact" className={styles.cardLink}>
              Get a corporate quote <ArrowRight size={15} />
            </Link>
          </div>

          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <CheckCircle2 size={20} />
            </div>
            <div>
              <b>Travel made simple</b>
              <span>One partner for your team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
