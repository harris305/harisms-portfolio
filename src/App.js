import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfitCalculator from './components/ProfitCalculator';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <ProfitCalculator />
        <Projects />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
