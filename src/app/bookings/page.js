"use client";
import { useEffect, useState } from "react";
import { CalendarDays, Trash2 } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";

export default function BookingsPage(){
 const [bookings,setBookings]=useState([]);
 useEffect(()=>{try{setBookings(JSON.parse(localStorage.getItem("travelease-bookings")||"[]"));}catch{}},[]);
 function cancel(id){const next=bookings.filter(b=>b.id!==id);setBookings(next);localStorage.setItem("travelease-bookings",JSON.stringify(next));}
 return <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow"><CalendarDays size={14}/> MY BOOKINGS</span><h2>Your demo travel<br/><span>requests.</span></h2><p>Requests saved from this browser appear here. This page does not show real operator bookings.</p></div><div className={styles.list}>{bookings.length===0?<div className={styles.empty}><CalendarDays size={32}/><h3>No demo requests yet</h3><p>When you submit a travel request, it will appear here.</p><Link className="button button-primary" href="/#booking">Plan a trip</Link></div>:bookings.map(b=><article className={styles.item} key={b.id}><div><small>{b.id} · {b.date||b.createdAt}</small><h3>{b.item||b.title||"Travel inquiry"}</h3><p>{b.name} · {b.phone}</p><span>{b.status||"Demo request saved"}</span></div><button onClick={()=>cancel(b.id)} aria-label="Remove demo request"><Trash2 size={17}/> Remove</button></article>)}</div></div></section>
}
