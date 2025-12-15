import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Routes from './components/Routes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import SubmitRoute from './components/SubmitRoute';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSubmitRoute, setShowSubmitRoute] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  // Check URL for admin route
  const isAdminRoute = window.location.hash === '#admin';

  if (isAdminRoute || showAdmin) {
    return <AdminDashboard />;
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header 
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
      <main>
        <Hero onJoinClick={() => setShowSignup(true)} />
        <About />
        <Schedule />
        <Routes onSubmitRouteClick={() => setShowSubmitRoute(true)} />
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
    </div>
  );
}