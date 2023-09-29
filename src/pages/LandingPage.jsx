import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Working from '../components/Working';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <Features />
        <Working />
      </main>
      <Footer />
    </div>
  );
}
