
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  Bus,
  TrainFront,
  Ticket,
  Luggage,
  MapPin,
  Search,
  Users,
  ShieldCheck,
  Sparkles,
  Plane,
} from "lucide-react";

import styles from "./BookingSearch.module.css";

const tabs = [
  { label: "Cab & Taxi", value: "Cab & taxi", icon: CarFront },
  { label: "Bus Rental", value: "Bus rental", icon: Bus },
  { label: "Flights", value: "Flights", icon: Plane },
  { label: "Railway", value: "Railway", icon: TrainFront },
  { label: "Maharashtra ST", value: "Maharashtra ST", icon: Ticket },
  { label: "Vehicle Rental", value: "Vehicle rental", icon: Luggage },
];

export default function BookingSearch() {
  const router = useRouter();

  const [tab, setTab] = useState("Cab & taxi");
  const [from, setFrom] = useState("Pune");
  const [to, setTo] = useState("Mumbai");
  const [date, setDate] = useState("");
  const [people, setPeople] = useState("2 passengers");
  const [message, setMessage] = useState("");

  function submit(e) {
    e.preventDefault();

    if (!from.trim() || !to.trim()) {
      setMessage("Please enter both pickup and destination.");
      return;
    }

    if (from.trim().toLowerCase() === to.trim().toLowerCase()) {
      setMessage("Pickup and destination cannot be the same.");
      return;
    }

    if (date && date < new Date().toLocaleDateString("en-CA")) {
      setMessage("Please select today or a future date.");
      return;
    }

    const params = new URLSearchParams({
      type: tab,
      from: from.trim(),
      to: to.trim(),
      date,
      people,
    });

    router.push(`/search-results?${params.toString()}`);
  }

  return (
    <section className={styles.section} id="booking">
      <div className="container">

        <div className={styles.heading}>
          <span className={styles.eyebrow}>
            <Sparkles size={14} />
            SIMPLE · FAST · CONVENIENT
          </span>

          <h1>Find Your Perfect Journey</h1>

          <p>
            Choose your travel service, enter your journey details
            and explore available demo options.
          </p>
        </div>

        <div className={styles.card}>

          <div className={styles.cardTop}>
            <div>
              <p>Select a service to get started</p>
            </div>

            <span className={styles.secureTag}>
              <ShieldCheck size={15} />
              Easy Booking
            </span>
          </div>

          <div className={styles.tabs} role="tablist" aria-label="Travel service">
            {tabs.map((t, index) => {
              const Icon = t.icon;

              return (
                <button
                  type="button"
                  key={`${t.value}-${index}`}
                  role="tab"
                  aria-selected={tab === t.value}
                  className={tab === t.value ? styles.active : ""}
                  onClick={() => {
                    setTab(t.value);
                    setMessage("");
                  }}
                >
                  <Icon size={19} />
                  <span>{t.label}</span>
                </button>
              );
            })}
          </div>

          <form className={styles.form} onSubmit={submit}>

            <label>
              <span>
                <MapPin size={15} />
                PICKUP / FROM
              </span>

              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Enter pickup city"
                autoComplete="address-level2"
                required
              />
            </label>

            <span className={styles.arrow}>
              <ArrowRight size={19} />
            </span>

            <label>
              <span>
                <MapPin size={15} />
                DESTINATION / TO
              </span>

              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Where to?"
                required
              />
            </label>

            <label>
              <span>
                <CalendarDays size={15} />
                JOURNEY DATE
              </span>

              <input
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setMessage("");
                }}
              />
            </label>

            <label className={styles.people}>
              <span>
                <Users size={15} />
                TRAVELLERS
              </span>

              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
              >
                <option>1 passenger</option>
                <option>2 passengers</option>
                <option>3 passengers</option>
                <option>4 passengers</option>
                <option>5 passengers</option>
                <option>6+ passengers</option>
                <option>Group / corporate</option>
              </select>
            </label>

            <button
              className={`button button-primary ${styles.searchButton}`}
              type="submit"
            >
              <Search size={19} />
              Search Trips
              <ArrowRight size={17} />
            </button>

          </form>

          <div className={styles.foot}>
            <span role="status">
              {message || "Your next journey is just a search away."}
            </span>

            <span>
              <ShieldCheck size={14} />
              Simple & Secure Demo
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
