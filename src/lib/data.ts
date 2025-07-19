import { Code, Briefcase, GraduationCap, Star, BarChart, Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';

export const personalData = {
  name: 'Alex Doe',
  profilePicture: 'https://placehold.co/150x150.png',
  bio: 'A passionate and creative Computer Science student with a knack for building beautiful and functional web applications. I am eager to learn new technologies and apply my skills to solve real-world problems.',
  resumeUrl: '/resume.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const projects = [
  {
    name: 'E-commerce Platform',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'e-commerce website',
  },
  {
    name: 'Task Management App',
    description: 'A web app to help users organize tasks, set priorities, and track progress with a clean and intuitive UI.',
    techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'task app',
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase my projects and skills, built with Next.js and Framer Motion.',
    techStack: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com',
    demoLink: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio design',
  },
];

export const internships = [
  {
    company: 'Tech Solutions Inc.',
    role: 'Software Engineer Intern',
    duration: 'Jun 2023 - Aug 2023',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with a team of developers to implement new features and fix bugs.',
  },
  {
    company: 'Innovate Co.',
    role: 'Frontend Developer Intern',
    duration: 'Jan 2023 - May 2023',
    description: 'Worked on redesigning the company\'s main website, improving user experience and performance. Used Figma for design mockups and Vue.js for implementation.',
  },
];

export const education = [
  {
    institution: 'State University',
    degree: 'Bachelor of Science in Computer Science',
    cgpa: '3.8/4.0',
    duration: '2020 - 2024',
  },
];

export const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 70 },
  { name: 'Figma', level: 80 },
];

export const certifications = [
  {
    name: 'Certified JavaScript Developer',
    provider: 'Tech Certification Body',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'certificate logo',
  },
  {
    name: 'React Nanodegree',
    provider: 'Online Course Platform',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'certificate logo',
  },
  {
    name: 'Cloud Practitioner',
    provider: 'Major Cloud Provider',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'certificate logo',
  },
];

export const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'mailto:alex.doe@example.com',
};

export const sectionIcons = {
  about: Code,
  experience: Briefcase,
  education: GraduationCap,
  certifications: Star,
  skills: BarChart,
  projects: Briefcase,
  contact: Mail,
};
