
import React from 'react';
import SectionWrapper from '../SectionWrapper';

const techSkills = [
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/FFFFFF' },
  { name: 'Replit', icon: 'https://cdn.simpleicons.org/replit/FFFFFF' },
  { name: 'Notion', icon: 'https://cdn.simpleicons.org/notion/FFFFFF' },
];


const Skills: React.FC = () => {
  const duplicatedSkills = [...techSkills, ...techSkills];

  return (
    <SectionWrapper id="skills" title="Skills & Expertise" subtitle="My technical toolkit">
        <div
            className="w-full overflow-hidden relative py-8"
            style={{
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
        >
            <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
                {duplicatedSkills.map((skill, index) => (
                    <div key={index} className="w-44 h-40 mx-4 flex-shrink-0">
                        <div className="w-full h-full p-4 bg-primary border border-secondary rounded-lg flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/40 transform hover:-translate-y-2 hover:scale-105">
                            <img src={skill.icon} alt={skill.name} className="h-14 w-14 object-contain" />
                            <p className="text-text-secondary font-medium text-center">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </SectionWrapper>
  );
};

export default Skills;