'use client';

import styles from '/styles/AuthModal.module.css';
import {useState, useEffect} from "react";

type ModalView = 'login' | 'signup' | 'forgot' | 'reset';

interface Props {
    view: ModalView;
    onViewChange: (v: ModalView) => void;
    onClose: () => void;
    onLogin?: () => void;
}

 function ForgotView({onBack, onNext } :{ onBack: () => void; onNext : () => void }) {
    const [email, setEmail] = useState('');
    return (
        <div className={styles.forgotWrap}>
            <div className={styles.iconBox}>
                <svg viewBox="0 0 24 24" className={styles.iconCyan} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                </svg>
            </div>
            <h2 className={styles.forgotTitle}>Reset Your Password</h2>
            <p className={styles.forgotDesc}>
                Enter the email associated with your account. We&apos;ll send you a secure link to reset your credentials.
            </p>
            <div className={styles.field}>
                <label className={styles.label}>Email Address</label>
                <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}>@</span>
                    <input
                        type="email"
                        className={styles.input}
                        placeholder="name@agency.gov"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <button className={styles.submitBtn} onClick={onNext}>Next ➔</button>
            <button className={styles.backLink} onClick={onBack}>← Back to Login</button>
        </div>
    );
 }

   /* reset password view */

function ResetView({ onComplete }: { onComplete: () => void }) {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    return (
        <div className={styles.forgotWrap}>
            <div className={styles.iconBox}>
                <svg viewBox="0 0 24 24" className={styles.iconCyan} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                    <path d="M3 3v5h5"/>
                </svg>
            </div>
            <h2 className={styles.forgotTitle}>Reset Your Password</h2>
            <p className={styles.forgotDesc}>
                Create a new password for your account.
            </p>
            <div className={styles.field}>
                <label className={styles.label}>New Password</label>
                <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}>🔒</span>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.field}>
                <label className={styles.label}>Confirm New Password</label>
                <div className={styles.inputWrap}>
                    <span className={styles.inputIcon}>🔒</span>
                    <input
                        type="password"
                        className={styles.input}
                        placeholder="••••••••"
                        value={confirm}
                        onChange={e => setConfirm(e.target.value)}
                    />
                </div>
            </div>
            <button className={styles.submitBtn} onClick={onComplete}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px', verticalAlign: 'middle'}}>
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                </svg>
                Complete
            </button>
        </div>
    );
}

/* Main AuthModal */

export default function AuthModal({ view, onViewChange, onClose, onLogin }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (view === 'login' && typeof window !== 'undefined' && (window as any).google) {
            const g = (window as any).google;
            g.accounts.id.initialize({
                client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '1035252541334-mock.apps.googleusercontent.com',
                callback: (response: any) => {
                    console.log("Google JWT Token:", response.credential);
                    onClose();
                    if (onLogin) onLogin();
                }
            });

            const btnElement = document.getElementById('google-signin-btn');
            if (btnElement) {
                g.accounts.id.renderButton(btnElement, {
                    theme: 'filled_black',
                    size: 'large',
                    text: 'signin_with',
                    width: 334
                });
            }
        }
    }, [view, onClose, onLogin]);

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
    };

    return (
        <div className={styles.overlay} onClick={handleOverlayClick} role="dialog" aria-modal>
            <div className={styles.modal}>
                {view === 'forgot' ? (
                    <ForgotView onBack={() => onViewChange('login')} onNext={() => onViewChange('reset')}/>
                ) : view === 'reset' ? (
                    <ResetView onComplete={onClose}/>
                ) : (
                    <>
                        {/* Header */}
                        <div className={styles.header}>
              <span className={styles.modalLogo}>
                <img src="/logo.png" alt="LankaGeo" style={{height: '48px', width: 'auto', objectFit: 'contain'}}/>
              </span>
                            <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
                        </div>
                        <p className={styles.headerSub}>Official portal for Sri Lankan satellite and terrain data.</p>

                        {/* Tabs */}
                        <div className={styles.tabs}>
                            <button
                                className={`${styles.tab} ${view === 'login' ? styles.tabActive : ''}`}
                                onClick={() => onViewChange('login')}
                            >Login
                            </button>
                            <button
                                className={`${styles.tab} ${view === 'signup' ? styles.tabActive : ''}`}
                                onClick={() => onViewChange('signup')}
                            >Sign Up
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>

    );
}



