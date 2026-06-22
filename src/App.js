import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import Services from './components/Services';
import Branches from './components/Branches';
import Testimonials from './components/Testimonials';
import BMI from './components/BMI';
import Booking from './components/Booking';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Branches />
        <Testimonials />
        <BMI />
        <Booking />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
