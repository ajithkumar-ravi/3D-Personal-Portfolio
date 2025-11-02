
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { certificationsData } from '../../data';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications" subtitle="My credentials and professional development">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-primary rounded-lg shadow-lg border border-secondary flex flex-col text-left cursor-pointer group"
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
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;