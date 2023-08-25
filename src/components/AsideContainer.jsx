import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from "../style/aside.module.css";
export default function AsideContainer() {
  return (
    <div className={styles.AsideContainer}>
      <nav className={styles.nav}>
        <div className={styles.item}><h2><i class="fas fa-house"></i>&nbsp;&nbsp;&nbsp; Home</h2></div>
        <div className={styles.item2}><h2><i class="fas fa-magnifying-glass"></i>&nbsp;&nbsp;&nbsp; Search</h2></div>
      </nav>
      <div className={styles.library}>
        <h1><i class="fas fa-notes-medical"></i>&nbsp;&nbsp; Your Library</h1>
        <div className={styles.section}>
            <h2>Create your first playlist</h2>
            <p>It's easy,We'll help you</p>
            <button className={styles.btn}>Create playlist</button>    
        </div>
        <div className={styles.section}>
            <h2>Let's find some podcast to follow</h2>
            <p>we'll keep you update on new episode</p>
            <button className={styles.btn}>Browse podcast</button>    
        </div>
        <div className={styles.footer}>
            <div className={styles.footerContent}>
            <span>Legal</span>
            <span>Privacy Center</span>
            <span>Privacy Policy</span>
            <span>Cookies</span>
            <span>About Ads</span>
            </div>
            <div className={styles.access}>Accessiblity</div>
            <div className={styles.cookies}>Cookies</div>
           <button className={styles.btn2}><i class="fas fa-globe"></i> &nbsp; English</button>
        </div>
      </div>
    </div>
  )
}
