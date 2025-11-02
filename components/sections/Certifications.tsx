
import React, { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import { certificationsData } from '../../data';
import { Award, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <SectionWrapper id="certifications" title="Certifications" subtitle="My credentials and professional development">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className="p-6 bg-primary rounded-lg shadow-lg border border-secondary flex flex-col text-left cursor-pointer group"
            onClick={() => setSelectedCert(cert.certificateUrl)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: 'rgb(59 130 246)' }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-text mb-1">{cert.title}</h3>
                <p className="text-sm text-text-secondary font-medium">{cert.issuer}</p>
                <p className="text-xs text-text-secondary mt-1">{cert.date}</p>
              </div>
              <Award className="w-10 h-10 text-accent flex-shrink-0" />
            </div>
            <div className="mt-4 pt-4 border-t border-secondary flex items-center justify-between">
              <span className="flex items-center text-xs text-green-400">
                <ShieldCheck className="w-4 h-4 mr-1" /> Verified
              </span>
              <span className="flex items-center text-xs text-accent-hover group-hover:underline">
                View Certificate <ExternalLink className="w-3 h-3 ml-1" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedCert} alt="Certificate" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" />
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 bg-primary rounded-full p-2 text-text-secondary hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Certifications;
