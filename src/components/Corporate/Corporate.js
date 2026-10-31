import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Clock3, Users } from "lucide-react";
import styles from "./Corporate.module.css";

const features = [
  ["Employee pick-up & drop","Daily office commute planning"],
  ["Business travel & airport rides","Meetings, airport trips and events"],
  ["Monthly cab contracts","Custom plans for your organisation"],
  ["Group & shift transportation","Flexible vehicle requirements"]
];

export default function Corporate() {
  return <section className={styles.section} id="corporate"><div className={`container ${styles.grid}`}>
    <div className={styles.copy}><span className="eyebrow"><Building2 size={14}/> TRAVELEASE FOR BUSINESS</span><h2>Move your people.<br/><em>Move business forward.</em></h2><p>A dedicated corporate transportation experience for teams, offices and organisations — designed to make everyday employee movement easier to manage.</p><div className={styles.features}>{features.map(([title,desc])=><div key={title}><CheckCircle2 size={18}/><span><b>{title}</b><small>{desc}</small></span></div>)}</div><Link href="/corporate" className={`button ${styles.light}`}>Explore corporate travel <ArrowRight size={17}/></Link></div>
    <div className={styles.visual}><div className={styles.photo}/><div className={styles.panel}><div className={styles.panelTop}><i/> CORPORATE MOBILITY <span>•••</span></div><h3>Your team&apos;s commute,<br/>under one roof.</h3><div className={styles.stats}><div><span><Users size={16}/></span><b>Team travel</b><small>Centralised planning</small></div><div><span><Clock3 size={16}/></span><b>Shift-ready</b><small>Flexible schedules</small></div></div><div className={styles.progress}><span>Transport coordination</span><b>Simple & organised</b><div><i/></div></div></div><div className={styles.sticker}><BriefcaseBusiness size={19}/><span><b>One partner</b><small>Multiple mobility needs</small></span></div></div>
  </div></section>;
}
