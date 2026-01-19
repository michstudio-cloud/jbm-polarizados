import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine navbar classes based on state
  // Transparent at top, Solid when scrolled
  const navClasses = isScrolled
    ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 shadow-sm'
    : 'bg-transparent border-b border-transparent';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="https://polarizados.site/wp-content/uploads/2026/01/jbm-logo.svg" 
              alt="JBM Tecnología Solar" 
              className="h-8 md:h-10 w-auto"
            />
          </div>
          
          {/* Right Side Actions (Always Visible) */}
          <div className="flex items-center gap-3 md:gap-4">
            <ThemeToggle />
            <button
              onClick={onOpenModal}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg shadow-orange-900/20 transition-transform transform hover:scale-105 active:scale-95"
            >
              Agendar Cita
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;