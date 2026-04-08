'use client';
import { useState, useEffect } from 'react';
import AuthModal from './AuthModal';
import styles from './LandingPage.module.css';

type ModalView = 'login' | 'signup' | 'verify' | 'forgot' | 'reset' | null;

interface LandingPageProps {
  onLogin?: () => void;
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  const [modal, setModal] = useState<ModalView>(null);

  /* Lock scroll when modal is open */
  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modal]);

  return (
    <>
      {/* ─── Page content (blurred when modal is open) ─── */}
      <div className={`${styles.page} ${modal ? styles.blurred : ''}`}>

        {/* NAV */}
        <nav className={styles.nav}>
          <span className={styles.logo}>
            <img src="/logo.png" alt="LankaGeo" style={{ height: '54px', width: 'auto', objectFit: 'contain' }} />
          </span>
          <button className={styles.navBtn} onClick={() => setModal('login')}>
            Get Started
          </button>
        </nav>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.heroGrid} />
          <div className={styles.heroMap} />
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Lanka<span>Geo</span></h1>
            <p className={styles.heroSub}>
              Precision SAR satellite monitoring for Sri Lanka&apos;s high-risk regions.
              Real-time penetration through dense cloud cover for disaster mitigation.
            </p>
          </div>
        </section>

        {/* STATS BAR */}
        <div className={styles.statsBar}>
          <div className={styles.stat}>
            <p className={styles.statLabel}>System Status</p>
            <p className={styles.statVal}>
              Active <span className={styles.badge}>SAR Core</span>
            </p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Update Frequency</p>
            <p className={styles.statVal}>
              45m <span className={styles.badge}>Latency</span>
            </p>
          </div>
          <div className={styles.stat}>
            <p className={styles.statLabel}>Coverage Area</p>
            <p className={styles.statVal}>
              100% <span className={styles.badge}>Island-wide</span>
            </p>
          </div>
        </div>

        {/* CORE CAPABILITIES */}
        <section className={styles.section}>
          <p className={styles.sectionTag}>What We Do</p>
          <h2 className={styles.sectionTitle}>CORE CAPABILITIES</h2>
          <p className={styles.sectionSub}>
            Providing authoritative flood detection through SAR-based analysis, ensuring reliable
            data for emergency responders even during heavy rainfall and cloud cover.
          </p>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>📡</div>
              <h3 className={styles.cardTitle}>Advanced SAR Monitoring</h3>
              <p className={styles.cardText}>
                Penetrating dense cloud cover and heavy precipitation for uninterrupted flood
                monitoring across all topographic zones of the island.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🌐</div>
              <h3 className={styles.cardTitle}>Dual-Mode Risk Identification</h3>
              <p className={styles.cardText}>
                Integrates multi-temporal Sentinel-1 SAR and Sentinel-2 optical data via Google
                Earth Engine to provide live flood extent detection and 5-year historical
                frequencing analysis for high-precision risk zoning.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚡</div>
              <h3 className={styles.cardTitle}>Agile Response Coordination</h3>
              <p className={styles.cardText}>
                Instant data dissemination protocols providing decision-makers with actionable
                intelligence for rapid mitigation and evacuation.
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footerWrap}>
          <div className={styles.footer}>
            <div className={styles.footerBrand}>
              <span className={styles.logo}>
                <img src="/logo.png" alt="LankaGeo" style={{ height: '54px', width: 'auto', objectFit: 'contain' }} />
              </span>
              <p className={styles.footerBrandText}>
                Precision SAR satellite monitoring for Sri Lanka&apos;s high-risk regions.
                Real-time penetration through dense cloud cover for disaster mitigation.
              </p>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColHead}>Platform</h4>
              <a className={styles.footerLink} href="#">Analysis</a>
              <a className={styles.footerLink} href="#">Latency</a>
              <a className={styles.footerLink} href="#">Reports</a>
            </div>
            <div className={styles.footerCol}>
              <h4 className={styles.footerColHead}>Agency</h4>
              <button
                className={`${styles.footerLink} ${styles.footerLinkBtn}`}
                onClick={() => setModal('login')}
              >Login</button>
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
              System Active
            </div>
          </div>
        </footer>
      </div>

      {/* ─── Auth Modal (rendered outside blurred page) ─── */}
      {modal && (
        <AuthModal
          view={modal as 'login' | 'signup' | 'forgot' | 'reset'}
          onViewChange={(v) => setModal(v)}
          onClose={() => setModal(null)}
          onLogin={onLogin}
        />
      )}
    </>
  );
}
