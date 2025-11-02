
import React, { Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import { Loader } from '@react-three/drei';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main className="overflow-x-hidden">
        <Suspense fallback={<Loader />}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <footer className="text-center p-4 text-text-secondary text-sm">
        <p>&copy; {new Date().getFullYear()} Ajithkumar R. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
