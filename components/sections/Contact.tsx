
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { socialLinks } from '../../data';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import SocialOrbit from '../3d/SocialOrbit';


const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" title="Let's Connect" subtitle="Feel free to reach out for collaborations or just a friendly chat!">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="w-full h-96 lg:h-[500px]">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <SocialOrbit />
            </Canvas>
        </div>
        <div className="flex flex-col space-y-6">
            {socialLinks.map((link, index) => (
                <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-primary rounded-lg shadow-sm border border-secondary hover:border-accent hover:bg-secondary transition-all duration-300"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <link.icon className="w-8 h-8 mr-4 text-accent" />
                    <span className="text-lg font-medium text-text">{link.name}</span>
                </motion.a>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
