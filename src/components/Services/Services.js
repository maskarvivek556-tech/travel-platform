import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import styles from "./Services.module.css";

export default function Services() {
  return <section className="section" id="services"><div className="container">
    <div className="section-top"><div className="section-heading"><span className="eyebrow"><Sparkles size={14}/> OUR SERVICES</span><h2>Everything travel.<br/><span>All in one place.</span></h2><p>From a quick ride across town to a planned group journey, find a service that fits the way you travel.</p></div><Link className="text-link" href="/services">Explore all services <ArrowRight size={17}/></Link></div>
    <div className={`card-grid ${styles.grid}`}>{services.map(item=><Link href="/#booking" className={styles.card} key={item.title}><span className={`${styles.icon} ${styles[item.color]}`}><item.icon size={23}/></span><span className={styles.tag}>{item.tag}</span><b>{item.title}</b><p>{item.text}</p><span className={styles.arrow}><ArrowUpRight size={17}/></span></Link>)}</div>
  </div></section>;
}
