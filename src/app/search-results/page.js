
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  CalendarDays,
  Users,
  CarFront,
  Bus,
  TrainFront,
  Ticket,
  Luggage,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import styles from "./page.module.css";

const demoData = {
  "Cab & taxi": [
    { name: "Sedan Cab", detail: "Comfortable AC sedan", price: "₹1,499", time: "3 hr 30 min", seats: "4 Seats" },
    { name: "SUV Cab", detail: "Spacious family travel", price: "₹2,299", time: "3 hr 30 min", seats: "6 Seats" },
    { name: "Premium Car", detail: "Luxury travel experience", price: "₹3,499", time: "3 hr 30 min", seats: "4 Seats" },
  ],
  "Bus rental": [
    { name: "Mini Bus", detail: "Comfortable group travel", price: "₹5,999", time: "4 hr", seats: "17 Seats" },
    { name: "Luxury Bus", detail: "AC luxury bus", price: "₹9,999", time: "4 hr", seats: "30 Seats" },
    { name: "Tempo Traveller", detail: "Family and group trip", price: "₹6,999", time: "4 hr", seats: "12 Seats" },
  ],
  Railway: [
    { name: "Express Train", detail: "Regular express service", price: "₹450", time: "3 hr 15 min", seats: "Demo availability" },
    { name: "Superfast Train", detail: "Faster intercity journey", price: "₹650", time: "2 hr 45 min", seats: "Demo availability" },
    { name: "Intercity Express", detail: "Comfortable daily travel", price: "₹550", time: "3 hr", seats: "Demo availability" },
  ],
  "Maharashtra ST": [
    { name: "Ordinary ST Bus", detail: "Budget-friendly journey", price: "₹250", time: "4 hr 30 min", seats: "Demo seats" },
    { name: "Shivshahi Bus", detail: "Comfortable AC journey", price: "₹550", time: "3 hr 45 min", seats: "Demo seats" },
    { name: "Shivneri Bus", detail: "Premium bus service", price: "₹650", time: "3 hr 30 min", seats: "Demo seats" },
  ],
  "Vehicle rental": [
    { name: "Hatchback Rental", detail: "Compact city vehicle", price: "₹1,200/day", time: "Daily rental", seats: "4 Seats" },
    { name: "Sedan Rental", detail: "Comfortable personal vehicle", price: "₹1,800/day", time: "Daily rental", seats: "4 Seats" },
    { name: "SUV Rental", detail: "Spacious family vehicle", price: "₹2,800/day", time: "Daily rental", seats: "6 Seats" },
  ],
};

const icons = {
  "Cab & taxi": CarFront,
  "Bus rental": Bus,
  Railway: TrainFront,
  "Maharashtra ST": Ticket,
  "Vehicle rental": Luggage,
};

export default async function SearchResultsPage({ searchParams }) {
  const params = await searchParams;

  const type = params.type || "Cab & taxi";
  const from = params.from || "Pune";
  const to = params.to || "Mumbai";
  const date = params.date || "";
  const people = params.people || "2 passengers";

  const results = demoData[type] || demoData["Cab & taxi"];
  const Icon = icons[type] || CarFront;

  const formattedDate = date
    ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Date not selected";

  return (
    <main className={styles.page}>
      <div className={styles.container}>

        <Link href="/" className={styles.back}>
          <ArrowLeft size={17} /> Back to Home
        </Link>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>TRAVELEASE SEARCH</span>
          <h1>Available Travel Options</h1>
          <p>Explore demo options for your journey.</p>
        </div>

        <div className={styles.summary}>
          <div className={styles.route}>
            <div>
              <small>FROM</small>
              <h2>{from}</h2>
            </div>

            <ArrowRight className={styles.routeArrow} size={22} />

            <div>
              <small>TO</small>
              <h2>{to}</h2>
            </div>
          </div>

          <div className={styles.details}>
            <span><CalendarDays size={16} /> {formattedDate}</span>
            <span><Users size={16} /> {people}</span>
            <span><Icon size={16} /> {type}</span>
          </div>
        </div>

        <div className={styles.resultHeading}>
          <div>
            <h2>Recommended Options</h2>
            <p>{results.length} demo options found for your search</p>
          </div>
          <span className={styles.demo}>DEMO RESULTS</span>
        </div>

        <div className={styles.results}>
          {results.map((item, index) => (
            <article className={styles.resultCard} key={item.name}>
              <div className={styles.vehicleIcon}>
                <Icon size={30} />
              </div>

              <div className={styles.info}>
                <span className={styles.option}>OPTION 0{index + 1}</span>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>

                <div className={styles.features}>
                  <span><Clock size={14} /> {item.time}</span>
                  <span><Users size={14} /> {item.seats}</span>
                  <span><CheckCircle2 size={14} /> Demo option</span>
                </div>
              </div>

              <div className={styles.price}>
                <small>DEMO PRICE</small>
                <h3>{item.price}</h3>
                <span>Indicative only</span>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.notice}>
          <CheckCircle2 size={18} />
          <p>
            These are sample demo results. Live availability, real fares and
            actual reservations are not connected yet.
          </p>
        </div>

        <Link href="/#booking" className={styles.searchAgain}>
          <MapPin size={16} /> Search Another Journey
        </Link>

      </div>
    </main>
  );
}
