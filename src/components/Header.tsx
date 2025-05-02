import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold">
          ChatGPT & Sora לעיצוב
        </div>
        
        <div className="hidden md:flex space-x-8 space-x-reverse">
          <a href="#about" className="text-gray-800 hover:text-[#D5C3A8] transition-colors">על הקורס</a>
          <a href="#learn" className="text-gray-800 hover:text-[#D5C3A8] transition-colors">מה תלמדו</a>
          <a href="#who" className="text-gray-800 hover:text-[#D5C3A8] transition-colors">למי זה מתאים</a>
          <a href="#instructor" className="text-gray-800 hover:text-[#D5C3A8] transition-colors">המדריכה</a>
        </div>
        
        <div className="md:block">
          <a 
            href="#join" 
            className="bg-[#D5C3A8] text-white px-5 py-2 rounded-lg hover:bg-[#C6B397] transition-all shadow-md hover:shadow-lg"
          >
            להצטרפות
          </a>
        </div>
        
        <button 
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-5 absolute top-full left-0 right-0">
          <div className="flex flex-col space-y-4 items-end">
            <a href="#about" className="text-gray-800 hover:text-[#D5C3A8] transition-colors" onClick={() => setIsMenuOpen(false)}>על הקורס</a>
            <a href="#learn" className="text-gray-800 hover:text-[#D5C3A8] transition-colors" onClick={() => setIsMenuOpen(false)}>מה תלמדו</a>
            <a href="#who" className="text-gray-800 hover:text-[#D5C3A8] transition-colors" onClick={() => setIsMenuOpen(false)}>למי זה מתאים</a>
            <a href="#instructor" className="text-gray-800 hover:text-[#D5C3A8] transition-colors" onClick={() => setIsMenuOpen(false)}>המדריכה</a>
            <a 
              href="#join" 
              className="bg-[#D5C3A8] text-white px-5 py-2 rounded-lg hover:bg-[#C6B397] transition-all shadow-md hover:shadow-lg w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              להצטרפות
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;