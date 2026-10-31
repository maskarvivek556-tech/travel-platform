import Link from "next/link";
import { ArrowRight, MoveRight, ShieldCheck } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return <section className={styles.hero} id="home">
    <div className={styles.photo}/><div className={styles.shade}/>
    <div className={`container ${styles.content}`}>
      <div className={styles.copy}><span className={styles.kicker}><i/> ONE PLATFORM. EVERY JOURNEY.</span><h1>Go further.<br/><em>Worry less.</em></h1><p>From everyday rides to family getaways and business travel — discover a simpler way to move.</p><div className={styles.actions}><Link className="button button-primary" href="/#booking">Find your ride <ArrowRight size={17}/></Link><Link className={styles.link} href="/services">Explore services <MoveRight size={17}/></Link></div><div className={styles.trust}><div className={styles.avatars}><span>V</span><span>A</span><span>S</span><span>+</span></div><div><b>★★★★★ <strong>4.9/5</strong></b><small>Designed around your comfort</small></div></div></div>
      <div className={styles.note}><span><ShieldCheck size={21}/></span><div><b>Your trip, your way</b><small>Flexible travel options for every plan</small></div></div>
    </div>
    <div className={`container ${styles.bottom}`}><span>TRAVEL SMARTER WITH TRAVELEASE</span><i/><span>01 — 04</span></div>
  </section>;
}
