'use client';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>
          <img src="/logo.png" alt="LankaGeo" style={{ height: '54px', width: 'auto', objectFit: 'contain' }} />
        </div>
        <div className={styles.navLinks}>
          <a href="#" className={`${styles.navLink} ${styles.navLinkActive}`}>Home</a>
          <a href="#" className={styles.navLink}>Dashboard</a>
          <a href="#" className={styles.navLink}>Alert service</a>
          <a href="#" className={styles.navLink}>Case studies</a>
          <a href="#" className={styles.navLink}>About Us</a>
        </div>
        <div className={styles.navActions}>
          <button className={styles.iconBtn}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <button className={styles.profileBtn}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" opacity="0.8">
              <circle cx="12" cy="12" r="11" fill="transparent" stroke="currentColor" strokeWidth="2" />
              <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM5.5 20a7 7 0 0 1 13 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroMap} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Lanka<span>Geo</span></h1>
          <p className={styles.heroSub}>
            Precision SAR satellite monitoring for Sri Lanka&apos;s high-risk regions. Real-time penetration through dense cloud cover for disaster mitigation.
          </p>
          <div className={styles.searchWrap}>
            <input type="text" className={styles.searchInput} />
            <button className={styles.searchBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <span className={styles.tag}>OUR MISSION</span>
          <h2 className={styles.aboutTitle}>About Lanka<span>Geo</span></h2>
          <p className={styles.aboutDesc}>
            Lanka Geo delivers high-precision flood analysis to support disaster response and regional safety across Sri Lanka. By transforming complex satellite telemetry into simple, data-driven reports, we empower the Disaster Management Center and local communities to act quickly and effectively during environmental crises.
          </p>
        </div>
        <div className={styles.aboutRight}>
          <div className={`${styles.card} ${styles.cardHalf}`}>
            <div className={styles.cardIcon}>📡</div>
            <h3 className={styles.cardTitle}>Advanced SAR Monitoring</h3>
            <p className={styles.cardText}>
              Uses advanced Radar technology to see through heavy rain, clouds, and darkness, providing clear flood maps even during the worst monsoon storms.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardHalf}`}>
            <div className={styles.cardIcon}>⚠</div>
            <h3 className={styles.cardTitle}>Real-time Risk Assessment</h3>
            <p className={styles.cardText}>
              Automated analysis pipelines that identify vulnerabilities and flood risks as they emerge.
            </p>
          </div>
          <div className={`${styles.card} ${styles.cardFull}`}>
            <div className={styles.cardIcon}>⚡</div>
            <div className={styles.cardFullContent}>
              <h3 className={styles.cardTitle}>Agile Response Coordination</h3>
              <p className={styles.cardText}>
                Turning complex satellite images into clear, actionable maps and reports to help Sri Lankan emergency teams respond to floods faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footerWrap}>
        <div className={styles.footer}>
          <div className={styles.footerBrand}>
            <img src="/logo.png" alt="LankaGeo" style={{ height: '54px', width: 'auto', objectFit: 'contain', marginBottom: '14px' }} />
            <p className={styles.footerBrandText}>
              Precision SAR satellite monitoring for Sri Lanka&apos;s high-risk regions. Real-time penetration through dense cloud cover for disaster mitigation.
            </p>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColHead}>Platform</h4>
            <a className={styles.footerLink} href="#">Analysis</a>
            <a className={styles.footerLink} href="#">Risk Maps</a>
            <a className={styles.footerLink} href="#">Reports</a>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColHead}>Agency</h4>
            <a className={styles.footerLink} href="#">Login</a>
          </div>
          <div className={styles.footerCol}>
            <h4 className={styles.footerColHead}>Legal</h4>
            <a className={styles.footerLink} href="#">Privacy Policy</a>
            <a className={styles.footerLink} href="#">Terms of Service</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>© 2026 LankaGeo Agency Intelligence Platform.</p>
          <div className={styles.statusDot}>
            <span className={styles.dot} />
            System Status
          </div>
        </div>
      </footer>
    </div>
  );
}
