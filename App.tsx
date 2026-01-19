import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarBrands from './components/CarBrands';
import ProblemSolution from './components/ProblemSolution';
import ProductInfo from './components/ProductInfo';
import Tones from './components/Tones';
import SecurityFilms from './components/SecurityFilms';
import LegalityWarranty from './components/LegalityWarranty';
import Pricing from './components/Pricing';
import Process from './components/Process';
import Brands from './components/Brands';
import Business from './components/Business';
import Gallery from './components/Gallery';
import TikTokVideos from './components/TikTokVideos';
import Location from './components/Location';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Terms from './components/Terms';
import Warranty from './components/Warranty';
import QuoteModal from './components/QuoteModal';
import BusinessQuoteModal from './components/BusinessQuoteModal';
import FinalCTA from './components/FinalCTA';
import ServiceDetail from './components/ServiceDetail';
import { SERVICES } from './data/services';

const App: React.FC = () => {
  // Routing state
  const [currentRoute, setCurrentRoute] = useState<string>('home');
  const [serviceId, setServiceId] = useState<string | null>(null);

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#/terminos') {
        setCurrentRoute('terms');
        setServiceId(null);
      } else if (hash === '#/garantia') {
        setCurrentRoute('warranty');
        setServiceId(null);
      } else if (hash.startsWith('#/servicios/')) {
        const id = hash.replace('#/servicios/', '');
        if (SERVICES[id]) {
            setCurrentRoute('service');
            setServiceId(id);
        } else {
            // Fallback if service doesn't exist
            setCurrentRoute('home');
            setServiceId(null);
        }
      } else {
        setCurrentRoute('home');
        setServiceId(null);
      }
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

  // Render specific page based on route
  const renderContent = () => {
    switch (currentRoute) {
        case 'terms':
            return <Terms />;
        case 'warranty':
            return <Warranty />;
        case 'service':
            return serviceId && SERVICES[serviceId] ? (
                <ServiceDetail 
                    service={SERVICES[serviceId]} 
                    onOpenModal={openQuoteModal} 
                    onOpenBusinessModal={openBusinessModal}
                />
            ) : (
                <Hero onOpenModal={openQuoteModal} /> // Fallback
            );
        case 'home':
        default:
            return (
                <>
                    <Hero onOpenModal={openQuoteModal} />
                    <CarBrands />
                    <ProblemSolution onOpenModal={openQuoteModal} />
                    <TikTokVideos />
                    <ProductInfo onOpenModal={openQuoteModal} /> 
                    <Tones onOpenModal={openQuoteModal} />
                    <Gallery />
                    <Process onOpenModal={openQuoteModal} />
                    <SecurityFilms onOpenModal={openQuoteModal} />
                    <LegalityWarranty onOpenModal={openQuoteModal} />
                    <Pricing onOpenModal={openQuoteModal} />
                    <Brands onOpenModal={openQuoteModal} />
                    <Business onOpenModal={openBusinessModal} />
                    <Reviews />
                    <FAQ />
                    <FinalCTA onOpenModal={openQuoteModal} />
                    <Location onOpenModal={openQuoteModal} />
                </>
            );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar onOpenModal={openQuoteModal} />
      
      <main>
        {renderContent()}
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