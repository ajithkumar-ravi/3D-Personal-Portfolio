
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '' }) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-text tracking-tight">{title}</h2>
        {subtitle && <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>}
        <div className="mt-4 w-24 h-1 bg-accent mx-auto rounded"></div>
      </div>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
