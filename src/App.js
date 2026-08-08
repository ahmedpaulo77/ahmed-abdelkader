import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Branches from './components/Branches';
import Testimonials from './components/Testimonials';
import BMI from './components/BMI';
import Booking from './components/Booking';
import Results from './components/Results';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ObesityService from './components/ObesityService'; // الـ import الجديد
import Admin from './components/Admin';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
    </>
  );
}

function AppShell() {
  const location = useLocation();
  const isAdmin = location.pathname === '/admin';

  return (
    <div className="app">
      {!isAdmin && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/obesity" element={<ObesityService />} /> {/* الـ Route الجديد */}
          <Route path="/branches" element={<Branches />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/results" element={<Results />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
      {!isAdmin && <WhatsAppButton />}
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppShell />
    </HashRouter>
  );
}

export default App;