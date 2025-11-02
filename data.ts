
import type { Education, SkillCategory, Experience, Project, Certification, SocialLink } from './types';
import { Linkedin, Github, Mail, Phone, Code } from 'lucide-react';

export const professionalObjective = "As a passionate tech enthusiast and BE Computer Science and Engineering undergraduate, I aim to secure a challenging role in a forward-thinking organization where I can apply my technical expertise, problem-solving abilities, and innovative mindset. I am eager to contribute to meaningful projects, tackle new challenges, and continuously enhance my skills while growing as a professional and a leader in the industry.";

export const educationData: Education[] = [
  {
    degree: 'BE Computer Science Engineering',
    institution: 'The Kavery Engineering College',
    location: 'Salem, TN',
    period: 'Oct 2022 – Jun 2026',
    result: 'GPA: 8.1',
    isCurrent: true,
  },
  {
    degree: '12th STD – State Board',
    institution: 'St. Ignatius H.S.S',
    location: 'Erode, TN',
    period: 'Jun 2020 – May 2022',
    result: 'Percentage: 72%',
  },
  {
    degree: '10th STD – State Board',
    institution: 'Govt H.S.S',
    location: 'Salem, TN',
    period: 'Jun 2018 – Mar 2020',
    result: 'Percentage: 73%',
  },
];

export const skillsData: SkillCategory[] = [
    {
        title: 'Languages',
        skills: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
        title: 'Frameworks',
        skills: ['React.js', 'Node.js', 'Express.js']
    },
    {
        title: 'Databases',
        skills: ['MongoDB']
    },
    {
        title: 'Tools',
        skills: ['Git', 'GitHub', 'VS Code', 'Excel', 'Word', 'PowerPoint', 'Notion']
    },
    {
        title: 'Soft Skills',
        skills: ['Rapport Building', 'Stakeholder Management', 'People Management', 'Excellent Communication']
    }
];

export const experienceData: Experience[] = [
  {
    role: 'Full Stack Development',
    company: 'NoviTech R&D Pvt. Ltd.',
    period: 'Apr 17 – May 2025',
    type: 'Remote',
    responsibilities: [
      'Built full-stack applications with React, Node.js, MongoDB',
      'Deployed responsive web applications',
    ],
  },
  {
    role: 'Java Development',
    company: 'OdugaaTech Pvt. Ltd.',
    period: 'Mar 01 – Mar 2024',
    type: 'On-site',
    responsibilities: [
      'Solved DSA problems in mini-projects',
    ],
  },
];

export const projectsData: Project[] = [
  {
    title: 'Online Course Reservation System',
    period: 'Jun 25 – Jul 2025',
    description: [
      'Full-stack MERN app',
      'Responsive UI, course booking, user dashboard',
    ],
    liveUrl: 'https://ajithkumar-r.neocities.org/Online%20Course%20Reservation%20/',
    codeUrl: 'https://github.com/ajithkumar-ravi/Online-Course-Reservation/tree/main/project',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Food Delivery Website',
    period: 'Jul 24 – 2025',
    description: [
      'Responsive design, interactive menu, cart simulation',
    ],
    liveUrl: 'https://ajithkumar-r.neocities.org/Food%20Delivery%20Website/',
    codeUrl: 'https://github.com/ajithkumar-ravi?tab=repositories',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Login Page Project',
    period: 'Apr 28 – May 2025',
    description: [
      'Client-side login/register toggle',
      'Smooth animations with JavaScript',
    ],
    liveUrl: 'https://ajithkumar-r.neocities.org/Ajithkumar%20login%20page/intex',
    codeUrl: 'https://github.com/ajithkumar-ravi/Responsive-login-page',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const certificationsData: Certification[] = [
  { title: 'JavaScript', issuer: 'GeeksforGeeks', date: 'Jul 2025', certificateUrl: 'https://drive.google.com/file/d/1UY33v8rMmW_bHijIGEQ-WJmisD4INpYp/view?usp=sharing' },
  { title: 'Python Web Developer', issuer: 'Infosys', date: 'Aug 2025', certificateUrl: 'https://drive.google.com/file/d/1lPj8UvJEbUTqtgMs-B6H8tL6fqjISW8y/view?usp=sharing' },
  { title: 'Introduction to Generative AI', issuer: 'Simplilearn', date: 'Jul 2025', certificateUrl: 'https://drive.google.com/file/d/1qqG3XiV82_3by0Ms39pnMIoAUmXv7MLV/view?usp=sharing' },
  { title: 'AWS for Beginners', issuer: 'Simplilearn', date: 'Jul 2025', certificateUrl: 'https://drive.google.com/file/d/1UN3WLq2p9ocvXXSaJnzKza29jJYKc3hM/view?usp=sharing' },
  { title: 'Introduction to MS Excel', issuer: 'Microsoft', date: 'Jul 2025', certificateUrl: 'https://drive.google.com/file/d/1UhFVzPPR5PAscZ7jn_zCcLUeX_TfpuiS/view?usp=sharing' },
  { title: 'IBM Cloud Essential', issuer: 'Cognitive Class', date: 'Sep 2025', certificateUrl: 'https://drive.google.com/file/d/1qrr1_M54zEl6Q9fiyTcfFMCbfoxQosMk/view?usp=sharing' },
  { title: 'Tata Data Visualisation', issuer: 'Forage', date: 'June 2025', certificateUrl: 'https://drive.google.com/file/d/1quBUd7vmzI9-vGJ4KZdfuCbcwuq8loys/view?usp=sharing' },
  { title: 'Introduction to MongoDB', issuer: 'MongoDB', date: 'Aug 2024', certificateUrl: 'https://drive.google.com/file/d/1qyLQLynnu8GQDU_smVVZgLWWzmPn8aJX/view?usp=sharing' },
];

export const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ajithkumar-be', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ajithkumar-ravi', icon: Github },
    { name: 'Email', url: 'mailto:ajithkumarravi.dev@gmail.com', icon: Mail },
    { name: 'Mobile', url: 'tel:+918610634862', icon: Phone },
    { name: 'LeetCode', url: 'https://leetcode.com/u/ajithkumar-r/', icon: Code },
];