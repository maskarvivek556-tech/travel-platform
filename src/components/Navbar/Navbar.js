
"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Route, ArrowUpRight } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className={styles.topbar}>
        <div className="container">
          <span>⌖ Made for journeys across Maharashtra & beyond</span>
          <span>Travel support, made simple</span>
        </div>
      </div>

      <header className={styles.header}>
        <div className={`container ${styles.inner}`}>

          {/* Left Side - Plan a Trip */}
          <Link
            className={styles.cta}
            href="/#booking"
            onClick={close}
          >
            Plan a Trip <ArrowUpRight size={19} />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          {/* Center Navigation */}
          <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
            <Link href="/">Home</Link>
            <Link href="/services" onClick={close}>Services</Link>
            <Link href="/packages" onClick={close}>Tour Packages</Link>
            <Link href="/fleet" onClick={close}>Our Fleet</Link>
            <Link href="/corporate" onClick={close}>Corporate</Link>
            <Link href="/contact" onClick={close}>Contact</Link>
          </nav>

          {/* Right Side - Logo */}
          <Link
            href="/"
            className={styles.brand}
            onClick={close}
          >
            <span className={styles.logo}>
              <Route size={27} />
            </span>

            <span>
              travel<span>ease</span>
              <small>YOUR JOURNEY, SIMPLIFIED</small>
            </span>
          </Link>

        </div>
      </header>
    </>
  );
}
