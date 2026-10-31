"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Heart, MapPin, Star } from "lucide-react";
import { packages } from "@/data/packages";
import styles from "./TourPackages.module.css";

export default function TourPackages() {
  const [saved,setSaved] = useState([]);
  function toggle(name){setSaved(old=>old.includes(name)?old.filter(x=>x!==name):[...old,name]);}
  return <section className={`section ${styles.section}`} id="packages"><div className="container">
    <div className="section-top"><div className="section-heading"><span className="eyebrow">CURATED GETAWAYS</span><h2>A little escape goes<br/><span>a long way.</span></h2><p>Discover handpicked ideas for your next break. Pick a place, gather your people, and let the journey begin.</p></div><Link className="text-link" href="/contact">Build a custom trip <ArrowRight size={17}/></Link></div>
    <div className={styles.grid}>{packages.map((p,i)=><article className={styles.card} key={p.name}><div className={styles.image} style={{backgroundImage:`url("${p.image}")`}}><span className={styles.label}>{p.label}</span><button className={`${styles.save} ${saved.includes(p.name)?styles.saved:""}`} aria-label={`Save ${p.name}`} onClick={()=>toggle(p.name)}><Heart size={18} fill={saved.includes(p.name)?"currentColor":"none"}/></button><span className={styles.number}>0{i+1}</span></div><div className={styles.content}><div className={styles.place}><MapPin size={14}/>{p.place}</div><h3>{p.name}</h3><div className={styles.meta}><span><CalendarDays size={14}/>{p.days}</span><span><Star size={14} fill="currentColor"/>{p.rating}</span></div><div className={styles.bottom}><div><small>Starting from</small><b>{p.price}<small> / person</small></b></div><Link className={styles.round} href="/contact" aria-label={`Enquire about ${p.name}`}><ArrowUpRight size={19}/></Link></div></div></article>)}</div>
  </div></section>;
}
