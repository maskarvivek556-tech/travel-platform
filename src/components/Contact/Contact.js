"use client";
import { useState } from "react";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form,setForm] = useState({name:"",email:"",company:"",need:"Employee pick-up & drop",message:""});
  const [notice,setNotice] = useState("");
  function submit(e){
    e.preventDefault();
    const old = JSON.parse(localStorage.getItem("travelease-inquiries") || "[]");
    old.unshift({...form,createdAt:new Date().toLocaleString("en-IN")});
    localStorage.setItem("travelease-inquiries",JSON.stringify(old));
    setNotice("Thanks! Your demo inquiry has been saved in this browser.");
    setForm({name:"",email:"",company:"",need:"Employee pick-up & drop",message:""});
  }
  return <section className="section" id="contact"><div className={`container ${styles.grid}`}><div className={styles.copy}><div className="section-heading"><span className="eyebrow">LET'S PLAN SOMETHING</span><h2>Big plans or daily rides,<br/><span>we're listening.</span></h2><p>Tell us what you need. From a family holiday to transport for a whole team, let's find the right fit.</p></div>
    <div className={styles.method}><span><Phone size={19}/></span><div><small>CALL OUR TEAM</small><b>+91 98765 43210</b><p>Demo contact number</p></div></div><div className={styles.method}><span><Mail size={19}/></span><div><small>EMAIL US</small><b>hello@travelease.example</b><p>Demo email address</p></div></div><div className={styles.note}><ShieldCheck size={18}/><p>This frontend demo stores form submissions locally in your browser.</p></div>
  </div><form className={styles.form} onSubmit={submit}><div className={styles.title}><span className="eyebrow">SEND AN INQUIRY</span><h3>How can we help?</h3><p>Share a few details and we'll organise your request.</p></div>
    <div className={styles.row}><label className="field-label">Your name *<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="e.g. Priya Sharma"/></label><label className="field-label">Email address *<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@example.com"/></label></div>
    <label className="field-label">Company name<input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Optional"/></label>
    <label className="field-label">What do you need?<select value={form.need} onChange={e=>setForm({...form,need:e.target.value})}><option>Employee pick-up & drop</option><option>Corporate cab contract</option><option>Airport transfers</option><option>Group transportation</option><option>Tour package</option><option>Personal travel</option><option>Other travel service</option></select></label>
    <label className="field-label">Tell us a little more<textarea rows="3" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Route, group size, dates..."/></label>
    <button className="button button-primary" type="submit">Send inquiry <Mail size={16}/></button>{notice&&<p className="form-message" role="status">{notice}</p>}
  </form></div></section>;
}
