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


            </div>
    );
}
