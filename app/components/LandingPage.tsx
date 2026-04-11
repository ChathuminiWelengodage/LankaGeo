'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/app/styles/LandingPage.module.css';
import AuthModal from './AuthModal';

type ModalView = 'login' | 'signup' | 'verify' | 'forgot' | 'reset' | null;

interface LandingPageProps {
    onLogin?: () => void;
}

export default function LandingPage({ onLogin}: LandingPageProps) {
    const [modal, setModal] = useState<ModalView>(null);

    useEffect(() => {
        document.body.style.overflow = modal ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [modal]);

    return (
        <>
            /* Page content */
            <div className={`${styles.page} ${modal ? styles.blurred : ''}`}>


                /*NAV*/
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="LankaGeo logo"
                            style={{height: '54px', width: 'auto', objectFit: 'contain'}}
                        />
                    </div>

                    <button
                        className={styles.navBtn}
                        onClick={() => setModal('login')}
                    >
                        Get Started
                    </button>
                </nav>

                /* Hero */
                <section className={styles.hero}>
                    <div className={styles.heroBg}/>
                    <div className={styles.heroGrid}/>
                    <div className={styles.heroMap}/>

                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Lanka<span>Geo</span>
                        </h1>

                        <p className={styles.heroSub}>
                            Precision SAR satellite monitoring for Sri Lanka's high-risk regions.
                            Real-time penetration through dense cloud cover for disaster mitigation.
                        </p>
                    </div>
                </section>
            </div>


            {modal && (
                <AuthModal
                    view={modal as 'login' | 'signup' | 'forgot' | 'reset'}
                    onViewChange={(v)=> setModal(v)}
                    onClose={() => setModal(null)}
                    onLogin={onLogin}
                />
            )}
        </>
    );
}
