import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import About from './components/About';
import WhatYouLearn from './components/WhatYouLearn';
import WhoIsItFor from './components/WhoIsItFor';
import WhatYouGet from './components/WhatYouGet';
import Instructor from './components/Instructor';
import CostOfNotLearning from './components/CostOfNotLearning';
import FinalOffer from './components/FinalOffer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app rtl bg-[#FFFDF8]">
      <Header />
      <main>
        <Hero />
        <Problem />
        <About />
        <WhatYouLearn />
        <WhoIsItFor />
        <WhatYouGet />
        <Instructor />
        <CostOfNotLearning />
        <FinalOffer />
      </main>
      <Footer />
    </div>
  );
}

export default App;