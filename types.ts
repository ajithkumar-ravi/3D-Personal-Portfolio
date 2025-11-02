// FIX: Import React to resolve error: Cannot find namespace 'React'.
import React from 'react';

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  result: string;
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: 'Remote' | 'On-site';
  responsibilities: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
  liveUrl: string;
  codeUrl: string;
  tags: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  certificateUrl: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}
