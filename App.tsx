import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import ProductInfo from './components/ProductInfo';
import Tones from './components/Tones';
import LegalityWarranty from './components/LegalityWarranty';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Brands from './components/Brands';
import Business from './components/Business';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <ProductInfo />
        <Tones />
        <LegalityWarranty />
        <Pricing />
        <Process />
        <Brands />
        <Business />
        <Gallery />
        <Location />
      </main>
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
         <a 
            href="https://wa.me/521234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-900/30 text-white"
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
         </a>
      </div>
    </div>
  );
};

export default App;