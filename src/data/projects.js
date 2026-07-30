import msSpaceImage from '../assets/msspace-app.jpg'
import taskImage from '../assets/Task-management.png'
import habitImage from '../assets/Habit-flow.jpg'
import aetherImage from '../assets/aethernote.jpg'
import heartImage from '../assets/heart-diesase-prediction.jpg'
import cxlImage from '../assets/cxl-delivery.jpg'

const projects = [
  {
    title: 'MSSPACE App',
    category: 'Enterprise Platform',
    summary: 'A multi-module enterprise suite spanning risk assessment (RAM), audit management, gap analysis, professional training & learning management, and activity execution — built to power organizational compliance at scale.',
    image: msSpaceImage,
    technologies: ['Next.js', 'ShadCN', 'PHP', 'Laravel', 'MySQL'],
    liveUrl: 'https://msspaceglobal.com',
  },
  {
    title: 'TaskManager Pro',
    category: 'Productivity Platform',
    summary: 'Built the performance management module enabling staff performance monitoring, target-setting, department configuration, and task assignment — driving measurable team accountability.',
    image: taskImage,
    technologies: ['Next.js', 'ShadCN', 'Node.js', 'Express', 'PostgreSQL'],
    liveUrl: 'https://task.msspaceglobal.com',
  },
  {
    title: 'AbitFlo',
    category: 'Behavioral Technology',
    summary: 'A production-grade habit and goal tracking platform combining deep habit science, real-time social accountability, AI-powered coaching, gamified progression, group challenges, a built-in focus timer, and mood correlation analytics.',
    image: habitImage,
    technologies: ['Next.js', 'ShadCN', 'NestJS', 'Socket.io', 'Prisma', 'PostgreSQL'],
    sourceUrl: 'https://github.com/Tur-nar/AbiFlo-frontend',
  },
  {
    title: 'AetherNote',
    category: 'Productivity Experience',
    summary: 'A futuristic note-taking platform with AI-powered neural organization, real-time collaboration via WebSockets, an infinite spatial canvas, end-to-end encryption, and offline-first sync — a second brain for power users.',
    image: aetherImage,
    technologies: ['Next.js', 'ShadCN', 'PHP', 'Laravel', 'Reverb', 'MySQL'],
    sourceUrl: 'https://github.com/Tur-nar/TT-note-frontend',
  },
  {
    title: 'Heart Disease Prediction',
    category: 'Health Technology',
    summary: 'A machine-learning platform that analyses patient information to estimate the likelihood of heart disease, providing actionable health insights through predictive analytics.',
    image: heartImage,
    technologies: ['Python', 'Flask', 'PostgreSQL', 'Machine Learning'],
    sourceUrl: 'https://github.com/DawnTurn/Heart-disease-prediction',
  },
  {
    title: 'CXL Logistics Solution',
    category: 'Logistics Website',
    summary: 'A responsive logistics experience for exploring delivery services, tracking shipments, and managing customer journeys with a clean, professional interface.',
    image: cxlImage,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://cxl-web.onrender.com',
  },
]

export default projects
