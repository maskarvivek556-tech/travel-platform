import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Users,
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { vehicles } from "@/data/vehicles";
import styles from "./page.module.css";

export function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export default async function VehicleDetailsPage({ params }) {
  const { slug } = await params;

  const vehicle = vehicles.find((item) => item.slug === slug);

  if (!vehicle) {
    notFound();
  }

  const sampleDistance = 100;
  const estimatedPrice = vehicle.price * sampleDistance;

  return (
    <main className={styles.page}>
      <div className="container">

        <Link href="/#fleet" className={styles.back}>
          <ArrowLeft size={18} /> Back to Fleet
        </Link>

        <div className={styles.layout}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img src={vehicle.image} alt={vehicle.name} />
            </div>

            <div className={styles.description}>
              <span className="eyebrow">VEHICLE OVERVIEW</span>
              <h1>{vehicle.name}</h1>
              <p>{vehicle.description}</p>

              <h2>Vehicle Features</h2>

              <div className={styles.features}>
                {vehicle.features.map((feature) => (
                  <div key={feature}>
                    <CheckCircle2 size={19} />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className={styles.booking}>
            <span className={styles.tag}>TRAVELEASE FLEET</span>

            <h2>Vehicle Specifications</h2>

            <div className={styles.spec}>
              <Users size={20} />
              <div>
                <small>Passenger Capacity</small>
                <strong>{vehicle.passengers}</strong>
              </div>
            </div>

            <div className={styles.spec}>
              <BriefcaseBusiness size={20} />
              <div>
                <small>Luggage Capacity</small>
                <strong>{vehicle.luggage}</strong>
              </div>
            </div>

            <div className={styles.spec}>
              <ShieldCheck size={20} />
              <div>
                <small>Travel Service</small>
                <strong>Professional Driver</strong>
              </div>
            </div>

            <div className={styles.priceBox}>
              <small>Demo Rental Price</small>
              <h3>₹{vehicle.price} <span>/ km</span></h3>

              <div className={styles.estimate}>
                <span>Example: {sampleDistance} km trip</span>
                <strong>₹{estimatedPrice.toLocaleString("en-IN")}</strong>
              </div>
            </div>

            <Link href="/contact" className={styles.bookButton}>
              Enquire Now <MapPin size={18} />
            </Link>

            <p className={styles.note}>
              * Demo estimate only. Final rental cost may vary based on
              distance, tolls, parking and trip duration.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}