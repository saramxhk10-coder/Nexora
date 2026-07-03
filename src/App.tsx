import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Process from './components/Process';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Offer from './components/Offer';
import Trust from './components/Trust';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-deep-dark text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Process />
        <Services />
        <Benefits />
        <Offer />
        <Trust />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
