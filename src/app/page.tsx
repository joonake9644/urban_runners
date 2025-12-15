'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Schedule from '@/components/Schedule';
import Routes from '@/components/Routes';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import SubmitRoute from '@/components/SubmitRoute';
import RouteDetails from '@/components/RouteDetails';

interface Route {
  name: string;
  distance: string;
  difficulty: string;
  elevation: string;
  time: string;
  rating: number;
  description: string;
  highlights: string[];
}

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSubmitRoute, setShowSubmitRoute] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
      <main>
        <Hero onJoinClick={() => setShowSignup(true)} />
        <About />
        <Schedule onJoinClick={() => setShowSignup(true)} />
        <Routes
          onSubmitRouteClick={() => setShowSubmitRoute(true)}
          onViewRouteDetails={(route) => setSelectedRoute(route)}
        />
        <Gallery />
      </main>
      <Footer />

      {/* Modals */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToSignup={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
        />
      )}

      {showSignup && (
        <Signup
          onClose={() => setShowSignup(false)}
          onSwitchToLogin={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      {showSubmitRoute && (
        <SubmitRoute onClose={() => setShowSubmitRoute(false)} />
      )}

      {selectedRoute && (
        <RouteDetails
          route={selectedRoute}
          onClose={() => setSelectedRoute(null)}
        />
      )}
    </div>
  );
}
