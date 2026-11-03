
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Phone,
  MapPin,
  Plane,
  ChevronRight,
} from "lucide-react";

import styles from "./Navbar.module.css";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Packages", href: "/packages" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Corporate", href: "/corporate" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* Top Information Bar */}
      <div className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <div className={styles.topLeft}>
            <span>
              <MapPin size={13} />
              Your journey, our priority
            </span>
            <span className={styles.topDivider}></span>
            <span>Travel comfortably. Explore freely.</span>
          </div>

          <a href="tel:+919876543210" className={styles.topPhone}>
            <Phone size={13} />
            +91 98765 43210
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={styles.header}>
        <div className={`container ${styles.navContainer}`}>

          {/* Logo */}
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <span className={styles.logoIcon}>
              <Plane size={25} />
            </span>

            <span className={styles.brandText}>
              Travel<span>Ease</span>
              <small>TRAVEL BEYOND EXPECTATIONS</small>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            {navLinks.map((link) => {
              const route = link.href.split("#")[0];
              const active =
                route === "/"
                  ? pathname === "/"
                  : pathname === route ||
                    pathname.startsWith(`${route}/`);

              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={active ? styles.activeLink : ""}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link href="/booking" className={styles.bookButton}>
            <span>Book Your Trip</span>
            <span className={styles.buttonIcon}>
              <ArrowUpRight size={17} />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={styles.menuButton}
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ""}`}>
          <div className={styles.mobileMenuInner}>
            <p className={styles.mobileLabel}>EXPLORE TRAVELEASE</p>

            {navLinks.map((link) => {
              const route = link.href.split("#")[0];
              const active =
                route === "/"
                  ? pathname === "/"
                  : pathname === route ||
                    pathname.startsWith(`${route}/`);

              return (
                <Link
                  href={link.href}
                  key={link.name}
                  onClick={closeMenu}
                  className={active ? styles.mobileActive : ""}
                >
                  {link.name}
                  <ChevronRight size={17} />
                </Link>
              );
            })}

            <Link
              href="/booking"
              className={styles.mobileBook}
              onClick={closeMenu}
            >
              Book Your Trip
              <ArrowUpRight size={18} />
            </Link>

            <a href="tel:+919876543210" className={styles.mobilePhone}>
              <Phone size={16} />
              +91 98765 43210
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
