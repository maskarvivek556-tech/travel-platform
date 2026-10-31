"use client";
import { useState } from "react";
import { CheckCircle2, X, ArrowRight } from "lucide-react";
import styles from "./BookingModal.module.css";

export default function BookingModal({title="Travel inquiry",onClose=()=>{}}) {
  const [form,setForm] = useState({name:"",phone:"",email:"",details:""});
  const [reference,setReference] = useState("");
  function submit(e){
    e.preventDefault();
    const record={...form,title,id:`TE${Date.now().toString().slice(-7)}`,createdAt:new Date().toLocaleString("en-IN")};
    const old=JSON.parse(localStorage.getItem("travelease-bookings")||"[]");
    old.unshift(record);localStorage.setItem("travelease-bookings",JSON.stringify(old));setReference(record.id);
  }
  return <div className={styles.backdrop} role="presentation" onMouseDown={e=>{if(e.target===e.currentTarget)onClose();}}><section className={styles.modal} role="dialog" aria-modal="true" aria-label={title}><button className={styles.close} onClick={onClose} aria-label="Close"><X/></button>{reference?<><span className={styles.success}><CheckCircle2 size={30}/></span><span className="eyebrow">REQUEST SAVED</span><h2>Thanks for your request.</h2><p>Your frontend demo request was saved in this browser.</p><div className={styles.reference}><small>DEMO REFERENCE</small><b>{reference}</b></div><button className="button button-primary" onClick={onClose}>Close <ArrowRight size={16}/></button></>:<><span className="eyebrow">TRAVELEASE REQUEST</span><h2>{title}</h2><p>Enter your contact details to save a demo request locally.</p><form onSubmit={submit}><label className="field-label">Full name *<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label className="field-label">Phone number *<input required type="tel" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="+91"/></label><label className="field-label">Email address<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label><label className="field-label">Additional details<textarea rows="2" value={form.details} onChange={e=>setForm({...form,details:e.target.value})} placeholder="Date, route, group size..."/></label><button className="button button-primary" type="submit">Save demo request <ArrowRight size={16}/></button><small>Demo only — no real booking or payment is created.</small></form></>}</section></div>;
}
