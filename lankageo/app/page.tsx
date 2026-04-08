'use client';
import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import HomePage from '@/components/HomePage';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
    return <HomePage />;
  }

  return <LandingPage onLogin={() => setIsAuthenticated(true)} />;
}
