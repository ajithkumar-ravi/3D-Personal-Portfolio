
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { educationData } from '../../data';
import { GraduationCap, MapPin, Calendar, Award, BookOpenCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="Education" subtitle="My academic journey and qualifications">
        <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 h-96 flex items-center justify-center">
                <motion.div
                    className="relative"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <BookOpenCheck className="w-48 h-48 text-accent opacity-80" strokeWidth={1} />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-2 bg-accent/50 rounded-full blur-md"></div>
                </motion.div>
            </div>
            <div className="md:col-span-2 relative border-l-2 border-secondary pl-10">
                {educationData.map((edu, index) => (
                <motion.div
                    key={index}
                    className="mb-10 relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                    <div className="absolute -left-[49px] top-1.5 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                    <div className="p-6 bg-primary rounded-lg shadow-lg border border-secondary hover:border-accent transition-all duration-300">
                        {edu.isCurrent && (
                            <span className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-2 py-1 rounded">Current</span>
                        )}
                        <h3 className="text-xl font-bold text-text mb-1">{edu.degree}</h3>
                        <p className="text-text-secondary font-medium mb-2 flex items-center">
                            <GraduationCap className="w-4 h-4 mr-2" /> {edu.institution}
                        </p>
                        <div className="text-sm text-text-secondary space-y-1">
                            <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {edu.location}</p>
                            <p className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {edu.period}</p>
                            <p className="flex items-center font-bold text-accent"><Award className="w-4 h-4 mr-2" /> {edu.result}</p>
                        </div>
                    </div>
                </motion.div>
                ))}
            </div>
        </div>
    </SectionWrapper>
  );
};

export default About;