import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Corresponds to h-20 in Tailwind
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-xl md:text-2xl font-bold tracking-wider text-text">
          AK
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, link.toLowerCase())}
              className="text-text-secondary hover:text-accent transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <a 
          href="mailto:ajithkumarravi.dev@gmail.com"
          className="px-4 py-2 bg-accent hover:bg-accent-hover text-white rounded-md font-medium transition-transform duration-300 hover:scale-105"
        >
          Hire Me
        </a>
      </div>
    </motion.header>
  );
};

export default Header;