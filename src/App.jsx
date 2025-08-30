import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Services from './components/Services';
import QualityGuarantee from './components/QualityGuarantee';
import Showroom from './components/Showroom';
import TradeSection from './components/TradeSection';
import RecentAcquisitions from './components/RecentAcquisitions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Collection />
      <Services />
      <QualityGuarantee />
      <Showroom />
      <TradeSection />
      <RecentAcquisitions />
      <Footer />
    </div>
  );
}

export default App;
