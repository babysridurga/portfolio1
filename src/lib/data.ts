import { Code, Briefcase, GraduationCap, Star, BarChart, Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';

export const personalData = {
  name: 'Baby Sri Durga Kadali',
  profilePicture: 'https://placehold.co/150x150.png',
  bio: 'A dedicated and proactive individual with a strong passion for software development. Eager to apply my skills to contribute to meaningful projects, solve real-world problems, and continuously learn and grow in a challenging environment.',
  resumeUrl: '/resume.pdf',
};

export const navLinks = [
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const projects = [
  {
    name: 'Portfolio Website',
    description: 'Developed a responsive personal portfolio website showcasing dynamic navigation, interactive elements, and a sleek user interface.',
    techStack: ['React.js', 'CSS3', 'HTML5', 'Visual Studio Code', 'GitHub'],
    githubLink: 'https://github.com/babysridurga/portfolio-website',
    demoLink: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'portfolio website',
  },
  {
    name: 'Weather Application',
    description: 'Built a real-time weather application displaying temperature, humidity, and forecasts using OpenWeather API.',
    techStack: ['React.js', 'OpenWeather API', 'JavaScript', 'CSS3', 'Visual Studio Code'],
    githubLink: 'https://github.com/babysridurga/weather-app',
    demoLink: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'weather app',
  },
  {
    name: 'Image Processing and Skin Lesion Detection',
    description: 'Developed an image processing project for detecting and classifying skin lesions, using advanced algorithms for early diagnosis.',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'GitHub'],
    githubLink: 'https://github.com/babysridurga/skin-lesion-detection',
    demoLink: 'https://example.com',
    image: 'https://placehold.co/600x400.png',
    dataAiHint: 'skin lesion detection',
  },
];

export const internships = [];

export const education = [
  {
    institution: 'Vishnu Institute of Technology',
    degree: 'Bachelor of Technology in Information Technology',
    cgpa: '85%',
    duration: '2022 - 2026',
  },
  {
    institution: 'Deepthi Junior College',
    degree: 'Intermediate (12th)',
    cgpa: '92.9%',
    duration: '2022',
  },
    {
    institution: 'Deepthi High School',
    degree: 'SSC (10th)',
    cgpa: '96.5%',
    duration: '2020',
  },
];

export const skills = [
  { name: 'Java', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'SQL', level: 80 },
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 85 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Visual Studio Code', level: 90 },
  { name: 'Firebase', level: 85 },
  { name: 'npm', level: 80 },
  { name: 'MySQL', level: 75 },
];

export const certifications = [
  {
    name: 'AI-ML Virtual Internship',
    provider: 'Google for Developers & AICTE',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'certificate logo',
  },
  {
    name: 'Data Science with Python Bootcamp',
    provider: 'LetsUpgrade',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'certificate logo',
  },
  {
    name: 'Decision Tree Using Python',
    provider: 'Infosys Springboard',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'certificate logo',
  },
  {
    name: 'Responsive Web Design',
    provider: 'FreeCodeCamp',
    logo: 'https://placehold.co/100x100.png',
    dataAiHint: 'certificate logo',
  },
];

export const socialLinks = {
  github: 'https://github.com/babysridurga',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com',
  email: 'mailto:babysridurgakadali@gmail.com',
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
