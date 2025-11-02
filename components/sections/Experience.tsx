
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { experienceData } from '../../data';
import { Building, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience" subtitle="Building real-world solutions through internships">
      <div className="max-w-4xl mx-auto space-y-8">
        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            className="p-8 bg-primary rounded-lg shadow-lg border border-secondary hover:border-accent transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-text">{exp.role}</h3>
                <p className="text-text-secondary font-semibold">{exp.company}</p>
              </div>
              <span className={`px-3 py-1 text-sm font-semibold rounded-full ${exp.type === 'Remote' ? 'bg-blue-900 text-blue-300' : 'bg-green-900 text-green-300'}`}>
                {exp.type}
              </span>
            </div>
            <div className="flex items-center text-sm text-text-secondary mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{exp.period}</span>
            </div>
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-3 text-accent flex-shrink-0 mt-1" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
