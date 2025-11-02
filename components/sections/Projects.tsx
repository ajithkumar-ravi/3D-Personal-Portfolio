
import React from 'react';
import SectionWrapper from '../SectionWrapper';
import { projectsData } from '../../data';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import ProjectCube from '../3d/ProjectCube';

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Some of the things I've built">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-primary rounded-lg shadow-lg border border-secondary overflow-hidden flex flex-col group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="h-56 w-full">
              <Canvas>
                <ProjectCube />
              </Canvas>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-text mb-2">{project.title}</h3>
              <p className="text-sm text-text-secondary mb-4">{project.period}</p>
              <ul className="space-y-2 mb-4 flex-grow">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-text-secondary text-sm">{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-secondary text-accent text-xs font-semibold rounded">{tag}</span>
                ))}
              </div>
              <div className="flex justify-end space-x-4 mt-auto">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300">
                  <ExternalLink className="w-6 h-6" />
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
