import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Enhance from './components/Enhance';
import Services from './components/Services';
import History from './components/History';
import Experiences from './components/Experiences';
import Contact from './components/Contact';
import News from './components/News';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Navbar />

      <main style={{ flex: 1 }}>
        <Hero />
        <Enhance />
        <Services />
        <News />
        <History />
        <Experiences />
        <Contact />

      </main>

      <Footer />
    </div>
  );
}
