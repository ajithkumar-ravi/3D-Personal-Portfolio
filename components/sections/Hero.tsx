import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { socialLinks, professionalObjective } from '../../data';
import Globe from '../3d/Globe';
import { Canvas } from '@react-three/fiber';

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        // FIX: Use ReturnType<typeof setTimeout> for browser compatibility instead of NodeJS.Timeout
        let ticker: ReturnType<typeof setTimeout>;
        const handleTyping = () => {
            const i = loopNum % text.length;
            const fullText = text;
            const updatedText = isDeleting ? fullText.substring(0, displayedText.length - 1) : fullText.substring(0, displayedText.length + 1);

            setDisplayedText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        }
        ticker = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(ticker);
    }, [displayedText, isDeleting, text, loopNum, typingSpeed]);

    return (
        <span className="border-r-2 border-white pr-1">{displayedText}</span>
    );
};


const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <Globe />
          </Canvas>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-32">
        <div className="flex flex-col items-center">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl font-semibold text-text-secondary mb-2">
              Hi, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-shadow-lg">
              AJITHKUMAR R
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary mb-2">
              Junior software developer
            </h2>
            <p className="text-xl text-text-secondary mb-6">
              React • Node.js • MongoDB
            </p>
            <p className="italic text-text-secondary mb-8">
              "Passionate tech enthusiast | Building the future, one line at a time"
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="px-6 py-3 bg-accent text-white rounded-md font-semibold hover:bg-accent-hover transition-all duration-300 transform hover:scale-105">View Projects</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-6 py-3 bg-secondary text-text rounded-md font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">Get In Touch</a>
            </div>
            <div className="flex justify-center space-x-4">
              {socialLinks.slice(0, 3).map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full text-text-secondary hover:text-accent hover:bg-gray-700 transition-all duration-300">
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
            className="mt-24 text-center p-6 bg-primary/50 backdrop-blur-sm rounded-lg border border-secondary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h3 className="text-lg font-semibold text-accent mb-2">PROFESSIONAL OBJECTIVE</h3>
            <p className="text-text-secondary leading-relaxed">
              <Typewriter text={professionalObjective} />
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;