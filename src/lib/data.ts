import { Code, Briefcase, GraduationCap, Star, BarChart, Mail, Github, Linkedin, Twitter, Download } from 'lucide-react';

export const personalData = {
  name: 'Baby Sri Durga Kadali',
  profilePicture: '/profile.jpeg',
  bio: 'Aspiring Software Engineer',
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
    githubLink: 'https://github.com/babysridurga',
    demoLink: 'https://example.com',
  },
  {
    name: 'Weather Application',
    description: 'Built a real-time weather application displaying temperature, humidity, and forecasts using OpenWeather API.',
    techStack: ['React.js', 'OpenWeather API', 'JavaScript', 'CSS3', 'Visual Studio Code'],
    githubLink: 'https://github.com/babysridurga',
    demoLink: 'https://example.com',
  },
  {
    name: 'Image Processing and Skin Lesion Detection',
    description: 'Developed an image processing project for detecting and classifying skin lesions, using advanced algorithms for early diagnosis.',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'Jupyter Notebook', 'GitHub'],
    githubLink: 'https://github.com/babysridurga',
    demoLink: 'https://example.com',
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
    url: 'https://www.linkedin.com/posts/babysridurgakadali-dev_ai-ml-virtual-internship-activity-7204326806143815681-AySY?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEP5KmQB0fTbmsSsio3hhdihD6TGRxp8KnQ&utm_campaign=share_via',
  },
  {
    name: 'Data Science with Python Bootcamp',
    provider: 'LetsUpgrade',
    url: 'https://www.linkedin.com/posts/babysridurgakadali-dev_letsupgrade-activity-7204832364080893955-yu7s?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEP5KmQB0fTbmsSsio3hhdihD6TGRxp8KnQ&utm_campaign=copy_link',
  },
  {
    name: 'Decision Tree Using Python',
    provider: 'Infosys Springboard',
    url: 'https://www.linkedin.com/posts/babysridurgakadali-dev_decision-tree-using-python-activity-7199656626696380418-h5fb?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEP5KmQB0fTbmsSsio3hhdihD6TGRxp8KnQ&utm_campaign=copy_link',
  },
  {
    name: 'Responsive Web Design',
    provider: 'FreeCodeCamp',
    url: 'https://www.linkedin.com/posts/babysridurgakadali-dev_generative-ai-fundamentals-certification-activity-7335972396148895744-vnxX',
  },
];

export const socialLinks = {
  github: 'https://github.com/babysridurga',
  linkedin: 'https://www.linkedin.com/in/babysridurgakadali-dev',
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
