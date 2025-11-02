
import React, { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import { skillsData } from '../../data';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import SkillCloud from '../3d/SkillCloud';
import { Layers, Wrench, Code } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].title);

  return (
    <SectionWrapper id="skills" title="Skills & Expertise" subtitle="A comprehensive toolkit for building modern web applications">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="w-full h-96 lg:h-[500px]">
                <Canvas camera={{ position: [0, 0, 35], fov: 75 }}>
                   <SkillCloud />
                </Canvas>
            </div>
            <div className="flex flex-col space-y-8">
                <div className="flex flex-wrap gap-4">
                {skillsData.map((category) => (
                    <motion.button
                        key={category.title}
                        onClick={() => setActiveCategory(category.title)}
                        className={`px-4 py-2 rounded-md font-semibold transition-all duration-300 ${activeCategory === category.title ? 'bg-accent text-white' : 'bg-primary text-text-secondary hover:bg-secondary'}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                    {category.title}
                    </motion.button>
                ))}
                </div>
                <div>
                {skillsData.map((category) => (
                    <div key={category.title} className={activeCategory === category.title ? 'block' : 'hidden'}>
                        <motion.div 
                            className="flex flex-wrap gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {category.skills.map((skill, index) => (
                                <motion.div
                                key={skill}
                                className="bg-secondary px-4 py-2 rounded text-text font-medium"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </SectionWrapper>
  );
};

export default Skills;
