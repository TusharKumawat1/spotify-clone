import React from 'react'
import styles from "../style/footer.module.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.mainFooter}>
        <div className={styles.linksSection}>
          <div className={styles.links}>
            <h2>Company</h2>
            <span>About</span>
            <span>Jobs</span>
            <span>For the recoard</span>
          </div>
          <div className={styles.links}>
            <h2>Commnunities</h2>
            <span>For artist</span>
            <span>Developer</span>
            <span>Advertising</span>
            <span>Investors</span>
            <span>Vendors</span>
          </div>
          <div className={styles.links}>
            <h2>Useful links</h2>
            <span>Support</span>
            <span>Free mobile app</span>
          </div>
        </div>
        <div className={styles.socialIconSection}>
        <i className={`fa-brands fa-instagram icons ${styles.icons}`}></i>
     
        <i className={`fa-brands fa-twitter icons ${styles.icons}`}></i>
     
        <i className={`fa-brands fa-facebook icons ${styles.icons}`}></i>
     
        </div>
      </div>
      <div className={styles.subFooter}>
        <h4>© 2022 Company, Inc</h4>
      </div>
    </div>
  )
}
