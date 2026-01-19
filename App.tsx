import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarBrands from './components/CarBrands';
import ProblemSolution from './components/ProblemSolution';
import ProductInfo from './components/ProductInfo';
import Tones from './components/Tones';
import LegalityWarranty from './components/LegalityWarranty';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Brands from './components/Brands';
import Business from './components/Business';
import Gallery from './components/Gallery';
import TikTokVideos from './components/TikTokVideos';
import Location from './components/Location';
import Footer from './components/Footer';
import Terms from './components/Terms';
import QuoteModal from './components/QuoteModal';
import BusinessQuoteModal from './components/BusinessQuoteModal';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  // Simple view state based on hash
  const [isTermsPage, setIsTermsPage] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      // Check if hash is strictly '#/terminos'
      setIsTermsPage(window.location.hash === '#/terminos');
    };

    // Check on mount
    handleHashChange();

    // Add listener
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openQuoteModal = () => setIsQuoteModalOpen(true);
  const closeQuoteModal = () => setIsQuoteModalOpen(false);

  const openBusinessModal = () => setIsBusinessModalOpen(true);
  const closeBusinessModal = () => setIsBusinessModalOpen(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar onOpenModal={openQuoteModal} />
      <main>
        {isTermsPage ? (
          <Terms />
        ) : (
          <>
            <Hero onOpenModal={openQuoteModal} />
            <CarBrands />
            <ProblemSolution onOpenModal={openQuoteModal} />
            <ProductInfo onOpenModal={openQuoteModal} />
            <TikTokVideos />
            <Tones onOpenModal={openQuoteModal} />
            <LegalityWarranty onOpenModal={openQuoteModal} />
            <Gallery />
            <Process onOpenModal={openQuoteModal} />
            <Pricing onOpenModal={openQuoteModal} />
            <Brands onOpenModal={openQuoteModal} />
            <Business onOpenModal={openBusinessModal} />
            <Location onOpenModal={openQuoteModal} />
          </>
        )}
      </main>
      <Footer />
      
      <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} />
      <BusinessQuoteModal isOpen={isBusinessModalOpen} onClose={closeBusinessModal} />

      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
         <button 
            onClick={openQuoteModal}
            className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-900/30 text-white hover:bg-green-600 transition-colors"
         >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
         </button>
      </div>
    </div>
  );
};

export default App;