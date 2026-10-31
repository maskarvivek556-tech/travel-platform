
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
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
  ShieldCheck,
  Star,
  Plane,
} from "lucide-react";

import styles from "./page.module.css";

const demoData = {
  "Cab & taxi": [
    {
      name: "Sedan Cab",
      detail: "Comfortable AC sedan for city-to-city travel",
      price: "₹1,499",
      time: "3 hr 30 min",
      seats: "4 Seats",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "SUV Cab",
      detail: "Spacious SUV, perfect for family journeys",
      price: "₹2,299",
      time: "3 hr 30 min",
      seats: "6 Seats",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Premium Car",
      detail: "Premium comfort for a stylish journey",
      price: "₹3,499",
      time: "3 hr 30 min",
      seats: "4 Seats",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
    },
  ],

  "Bus rental": [
    {
      name: "Mini Bus",
      detail: "Ideal for small groups and family trips",
      price: "₹5,999",
      time: "4 hr",
      seats: "17 Seats",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Luxury Bus",
      detail: "Premium AC bus for comfortable group travel",
      price: "₹9,999",
      time: "4 hr",
      seats: "30 Seats",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Tempo Traveller",
      detail: "Spacious vehicle for family and group tours",
      price: "₹6,999",
      time: "4 hr",
      seats: "12 Seats",
      image:
        "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=1200&q=85",
    },
  ],

  Flights: [
    {
      name: "Economy Flight",
      detail: "Affordable air travel with comfortable seating",
      price: "₹3,999",
      time: "1 hr 30 min",
      seats: "Demo availability",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Premium Economy",
      detail: "Extra comfort and spacious seating",
      price: "₹5,499",
      time: "1 hr 30 min",
      seats: "Demo availability",
      image:
        "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Business Class",
      detail: "Premium flying experience for your journey",
      price: "₹9,999",
      time: "1 hr 30 min",
      seats: "Demo availability",
      image:
        "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=85",
    },
  ],

  Railway: [
    {
      name: "Express Train",
      detail: "Convenient express train journey",
      price: "₹450",
      time: "3 hr 15 min",
      seats: "Demo availability",
      image:
        "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Superfast Train",
      detail: "Faster intercity rail travel",
      price: "₹650",
      time: "2 hr 45 min",
      seats: "Demo availability",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Intercity Express",
      detail: "Comfortable train for daily travel",
      price: "₹550",
      time: "3 hr",
      seats: "Demo availability",
      image:
        "https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1200&q=85",
    },
  ],

  "Maharashtra ST": [
    {
      name: "Ordinary ST Bus",
      detail: "Affordable travel across Maharashtra",
      price: "₹250",
      time: "4 hr 30 min",
      seats: "Demo seats",
      image:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Shivshahi Bus",
      detail: "Comfortable AC bus service",
      price: "₹550",
      time: "3 hr 45 min",
      seats: "Demo seats",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Shivneri Bus",
      detail: "Premium intercity bus experience",
      price: "₹650",
      time: "3 hr 30 min",
      seats: "Demo seats",
      image:
        "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?auto=format&fit=crop&w=1200&q=85",
    },
  ],

  "Vehicle rental": [
    {
      name: "Hatchback Rental",
      detail: "Compact car for easy city travel",
      price: "₹1,200/day",
      time: "Daily rental",
      seats: "4 Seats",
      image:
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Sedan Rental",
      detail: "Comfortable vehicle for personal travel",
      price: "₹1,800/day",
      time: "Daily rental",
      seats: "4 Seats",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "SUV Rental",
      detail: "Spacious SUV for family adventures",
      price: "₹2,800/day",
      time: "Daily rental",
      seats: "6 Seats",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=85",
    },
  ],
};

const icons = {
  "Cab & taxi": CarFront,
  "Bus rental": Bus,
  Flights: Plane,
  Railway: TrainFront,
  "Maharashtra ST": Ticket,
  "Vehicle rental": Luggage,
};

export default async function SearchResultsPage({ searchParams }) {
  const params = await searchParams;

  const rawType = params.type || "Cab & taxi";

 const type = rawType.toLowerCase().includes("flight")
  ? "Flights"
  : rawType;
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
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            TRAVELEASE • YOUR JOURNEY STARTS HERE
          </span>

          <h1>
            {type === "Flights"
              ? "Find Your Perfect Flight"
              : "Find Your Perfect Ride"}
          </h1>

          <p>
            Compare travel options and choose what suits your journey.
          </p>
        </div>

        <div className={styles.summary}>
          <div className={styles.route}>
            <div>
              <small>FROM</small>
              <h2>{from}</h2>
            </div>

            <div className={styles.routeLine}>
              <span />
              <ArrowRight size={20} />
              <span />
            </div>

            <div>
              <small>TO</small>
              <h2>{to}</h2>
            </div>
          </div>

          <div className={styles.details}>
            <span>
              <CalendarDays size={16} />
              {formattedDate}
            </span>

            <span>
              <Users size={16} />
              {people}
            </span>

            <span>
              <Icon size={16} />
              {type}
            </span>
          </div>
        </div>

        <div className={styles.resultHeading}>
          <div>
            <span className={styles.sectionEyebrow}>
              HANDPICKED FOR YOU
            </span>

            <h2>Recommended Options</h2>
            <p>{results.length} sample options for your journey</p>
          </div>

          <span className={styles.demo}>DEMO RESULTS</span>
        </div>

        <div className={styles.results}>
          {results.map((item, index) => (
            <article className={styles.resultCard} key={item.name}>
              <div className={styles.imageWrap}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.resultImage}
                />

                <span className={styles.imageTag}>
                  <Icon size={13} />
                  {type}
                </span>
              </div>

              <div className={styles.info}>
                <span className={styles.option}>
                  OPTION 0{index + 1}
                </span>

                <h3>{item.name}</h3>
                <p>{item.detail}</p>

                <div className={styles.features}>
                  <span>
                    <Clock size={15} />
                    {item.time}
                  </span>

                  <span>
                    <Users size={15} />
                    {item.seats}
                  </span>
                </div>

                <div className={styles.rating}>
                  <Star size={14} fill="currentColor" />
                  <span>Popular choice</span>
                  <span className={styles.dot}>•</span>
                  <ShieldCheck size={14} />
                  <span>Comfort travel</span>
                </div>
              </div>

              <div className={styles.price}>
                <small>STARTING FROM</small>
                <h3>{item.price}</h3>
                <span>Indicative demo price</span>

                <Link href="/#booking" className={styles.selectButton}>
                  Search Again
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.notice}>
          <CheckCircle2 size={19} />

          <p>
            These are sample demo results. Live availability, actual fares
            and reservations are not connected yet.
          </p>
        </div>

        <Link href="/#booking" className={styles.searchAgain}>
          <MapPin size={16} />
          Search Another Journey
        </Link>
      </div>
    </main>
  );
}
