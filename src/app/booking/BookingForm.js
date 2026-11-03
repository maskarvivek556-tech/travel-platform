"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  LockKeyhole,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

import styles from "./page.module.css";

function getInitialTravelers(people) {
  const count = Number.parseInt(people, 10);
  return Number.isFinite(count) && count > 0 ? count : 1;
}

export default function BookingForm({ trip }) {
  const searchParams = new URLSearchParams({
    type: trip.type,
    from: trip.from,
    to: trip.to,
    date: trip.date,
    people: trip.people,
  });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: String(getInitialTravelers(trip.people)),
    date: trip.date,
  });
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");

  const readyToPay =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    Number(form.travelers) > 0 &&
    form.date;

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError("");
  }

  function handlePayNow(event) {
    event.preventDefault();
    setError("");

    const record = {
      ...form,
      id: `TE${Date.now().toString().slice(-7)}`,
      item: trip.name,
      type: trip.type,
      from: trip.from,
      to: trip.to,
      price: trip.price,
      travelers: Number(form.travelers),
      status: "Payment pending · Demo only",
      createdAt: new Date().toLocaleString("en-IN"),
    };

    try {
      const saved = JSON.parse(
        localStorage.getItem("travelease-bookings") || "[]"
      );

      if (!Array.isArray(saved)) {
        throw new Error("Saved bookings are not in the expected format.");
      }

      localStorage.setItem(
        "travelease-bookings",
        JSON.stringify([record, ...saved])
      );
      setConfirmation(
        "Your booking details were saved. A payment gateway is not connected in this demo, so no payment was processed."
      );
    } catch {
      setError(
        "We couldn't save your booking details in this browser. Please try again."
      );
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link
          href={`/search-results?${searchParams.toString()}`}
          className={styles.back}
        >
          <ArrowLeft size={17} />
          Back to search results
        </Link>

        <header className={styles.heading}>
          <span className={styles.eyebrow}>TRAVELEASE · BOOK YOUR TRIP</span>
          <h1>Traveller details</h1>
          <p>Complete your details to continue to the payment step.</p>
        </header>

        {confirmation ? (
          <section className={styles.confirmation} role="status">
            <span className={styles.confirmationIcon}>
              <CheckCircle2 size={26} />
            </span>
            <span className={styles.eyebrow}>DEMO BOOKING SAVED</span>
            <h2>Thanks, {form.name.trim()}.</h2>
            <p>{confirmation}</p>
            <Link href="/bookings" className="button button-primary">
              View My Bookings
              <ArrowRight size={17} />
            </Link>
          </section>
        ) : (
          <div className={styles.layout}>
            <section className={styles.formCard}>
              <div className={styles.formHeading}>
                <span className={styles.formIcon}>
                  <Users size={20} />
                </span>
                <div>
                  <h2>Who is travelling?</h2>
                  <p>Fields marked * are required.</p>
                </div>
              </div>

              <form onSubmit={handlePayNow}>
                <div className={styles.fields}>
                  <label>
                    Full name *
                    <input
                      name="name"
                      autoComplete="name"
                      value={form.name}
                      onChange={updateField}
                      placeholder="Enter your full name"
                      required
                    />
                  </label>

                  <label>
                    Email address *
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="you@example.com"
                      required
                    />
                  </label>

                  <label>
                    Phone number *
                    <input
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={updateField}
                      placeholder="+91 98765 43210"
                      required
                    />
                  </label>

                  <div className={styles.fieldRow}>
                    <label>
                      Number of travellers *
                      <input
                        name="travelers"
                        type="number"
                        min="1"
                        max="50"
                        value={form.travelers}
                        onChange={updateField}
                        required
                      />
                    </label>

                    <label>
                      Travel date *
                      <input
                        name="date"
                        type="date"
                        min={new Date().toLocaleDateString("en-CA")}
                        value={form.date}
                        onChange={updateField}
                        required
                      />
                    </label>
                  </div>
                </div>

                {error && (
                  <p className={styles.error} role="alert">
                    {error}
                  </p>
                )}

                {readyToPay && (
                  <div className={styles.paymentAction}>
                    <p>
                      <LockKeyhole size={15} />
                      You’ll review payment on the next step.
                    </p>
                    <button className="button button-primary" type="submit">
                      <CreditCard size={18} />
                      Pay Now
                      <ArrowRight size={17} />
                    </button>
                    <small>
                      Demo only. No payment will be charged or processed.
                    </small>
                  </div>
                )}
              </form>
            </section>

            <aside className={styles.tripCard}>
              <span className={styles.tripType}>{trip.type}</span>
              <h2>{trip.name}</h2>

              <div className={styles.tripDetail}>
                <MapPin size={17} />
                <span>
                  {trip.from} <ArrowRight size={14} /> {trip.to}
                </span>
              </div>
              <div className={styles.tripDetail}>
                <CalendarDays size={17} />
                <span>{trip.date || "Select your travel date"}</span>
              </div>
              <div className={styles.tripDetail}>
                <Users size={17} />
                <span>{form.travelers} traveller(s)</span>
              </div>

              <div className={styles.fare}>
                <span>Indicative demo fare</span>
                <strong>{trip.price}</strong>
              </div>
              <p className={styles.demoNote}>
                <ShieldCheck size={15} />
                Sample result only. Fare and availability are not live.
              </p>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
