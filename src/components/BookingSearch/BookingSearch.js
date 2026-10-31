"use client";

import { useState } from "react";
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
} from "lucide-react";

import styles from "./BookingSearch.module.css";

const tabs = [
  { label: "Cab & taxi", icon: CarFront },
  { label: "Bus rental", icon: Bus },
  { label: "Railway", icon: TrainFront },
  { label: "Maharashtra ST", icon: Ticket },
  { label: "Vehicle rental", icon: Luggage },
];

export default function BookingSearch() {
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

    const params = new URLSearchParams({
      type: tab,
      from: from.trim(),
      to: to.trim(),
      date,
      people,
    });

    const url = `/search-results?${params.toString()}`;

    const newWindow = window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

    if (!newWindow) {
      setMessage("Please allow pop-ups to open search results.");
      return;
    }

    setMessage("Your search results are opening...");
  }

  return (
    <section className={styles.section} id="booking">
      <div className="container">
        <div className={styles.card}>

          <div className={styles.tabs} role="tablist">
            {tabs.map((t) => (
              <button
                type="button"
                key={t.label}
                role="tab"
                aria-selected={tab === t.label}
                className={tab === t.label ? styles.active : ""}
                onClick={() => {
                  setTab(t.label);
                  setMessage("");
                }}
              >
                <t.icon size={18} />
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          <form className={styles.form} onSubmit={submit}>

            <label>
              <span>
                <MapPin size={14} />
                FROM
              </span>

              <input
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                placeholder="Pickup city or station"
                required
              />
            </label>

            <span className={styles.arrow}>
              <ArrowRight size={19} />
            </span>

            <label>
              <span>
                <MapPin size={14} />
                TO
              </span>

              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="Destination"
                required
              />
            </label>

            <label>
              <span>
                <CalendarDays size={14} />
                DEPARTURE
              </span>

              <input
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>

            <label className={styles.people}>
              <span>
                <Users size={14} />
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
              <Search size={18} />
              Search
            </button>

          </form>

          <div className={styles.foot}>
            <span role="status">
              {message || "Compare travel options and plan with confidence."}
            </span>

            <span>✓ Demo experience</span>
          </div>

        </div>
      </div>
    </section>
  );
}
