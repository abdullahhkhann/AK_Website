import type { NavItem, SkillCategoryType, ExperienceItem, ProjectItem, EducationItem, StatItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Education', href: 'education' },
  { label: 'Contact', href: 'contact' },
]

export const TYPEWRITER_PHRASES = [
  'Software Engineer',
  'Product Manager',
  'Product Thinker',
  'Full-Stack Developer',
  'Team Leader',
  'Innovative Builder',
]

export const STATS: StatItem[] = [
  { value: '3.89', label: 'GPA', numericValue: 3.89 },
  { value: '3+', label: 'Years Experience', numericValue: 3 },
  { value: '10+', label: 'Projects Shipped', numericValue: 10 },
  { value: '2', label: 'Products Shipped', numericValue: 2 },
]

export const SKILL_CATEGORIES: SkillCategoryType[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 83 },
      { name: 'C#', level: 83 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 75 },
    ],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      { name: 'Linux / Unix', level: 90, highlight: true },
      { name: 'REST API Design', level: 87, highlight: true },
      { name: 'Cloud Computing', level: 85, highlight: true },
    ],
  },
  {
    title: 'Web & Mobile',
    skills: [
      { name: 'React / React Native', level: 90 },
      { name: '.NET Core', level: 87 },
      { name: 'Node.js', level: 87 },
      { name: 'AngularJS', level: 85 },
      { name: 'SQL / NoSQL', level: 85 },
      { name: 'Flutter', level: 75 },
      { name: '.NET MAUI', level: 70 },
    ],
  },
  {
    title: 'Testing & Automation',
    skills: [
      { name: 'API Testing', level: 90, highlight: true },
      { name: 'Automated Testing', level: 88, highlight: true },
      { name: 'Unit / Integration Tests', level: 86, highlight: true },
    ],
  },
  {
    title: 'Security & Networking',
    skills: [
      { name: 'Routing & Switching', level: 88 },
      { name: 'Cyber Security', level: 85 },
      { name: 'Network Security', level: 83 },
    ],
  },
  {
    title: 'Other',
    skills: [
      { name: 'Product Management', level: 90 },
      { name: 'Project Management', level: 88 },
      { name: 'Leadership', level: 85 },
      { name: 'Presentations', level: 85 },
      { name: 'Innovation', level: 85 },
    ],
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Graduate Software Engineer',
    company: 'T3 – Wichita State University',
    companyUrl: 'https://www.tthree.org/',
    location: 'Wichita, KS',
    startDate: 'Sep 2024',
    endDate: 'Present',
    description: [
      'Implemented accessibility-focused swipe interactions integrated with iOS VoiceOver, improving usability for blind and low-vision users in a React Native mobile application, "Vizling".',
      'Integrated Stripe Payment Gateway into an existing production platform using .NET Core, enabling secure and scalable payment processing.',
      'Developed a badge generator service for Wichita Industrial Trade Show (WITS 2025) using Razor Components in .NET Core MVC.',
      'Led data migration from Oracle to MS SQL for a State of Kansas project, authored official client documentation, and developed SQL triggers for database change logging.',
      'Conducted user acceptance testing, quality assurance, and API testing to validate system functionality and client requirements.',
    ],
    tags: ['React Native', 'TypeScript', '.NET Core', 'REST APIs', 'SQL', 'Automated Testing', 'Linux'],
  },
  {
    role: 'Product Manager Intern',
    company: 'Ansen AI Technologies',
    companyUrl: 'https://www.ansen.ai/',
    location: 'Abu Dhabi, UAE',
    startDate: 'Feb 2024',
    endDate: 'Jun 2024',
    description: [
      'Designed the company\'s copilot feature and added GenAI capabilities to their endpoint products.',
      'Led the project to revamp the product design to enhance UX for the company\'s in-house SIEM product.',
      'Drove operational efficiency by 50% by proposing a streamlined filter feature for log search.',
      'Assisted the product director & pre-sales in writing white papers, data sheets, product comparisons, and battle cards.',
    ],
    tags: ['GenAI', 'REST APIs', 'Cloud Services', 'Product Strategy', 'Technical Leadership'],
  },
  {
    role: 'Cloud Computing Intern',
    company: 'Huawei Technologies',
    companyUrl: 'https://www.huaweicloud.com/intl/en-us/',
    location: 'Dubai, UAE',
    startDate: 'Jul 2023',
    endDate: 'Sep 2023',
    description: [
      'Built a cloud infrastructure and deployed the cloud environment for the company\'s testing purposes.',
      'Worked on cloud infrastructure components supporting enterprise-scale deployments.',
      'Wrote Python automation scripts to streamline cloud provisioning workflows.',
      'Gained deep exposure to distributed systems, load balancing, and cloud networking fundamentals.',
    ],
    tags: ['Cloud Computing', 'Python', 'Automation', 'Linux', 'Distributed Systems', 'Networking'],
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Senior Design Project',
    description: 'Developed a cross-platform mobile application using Flutter and Unity to aid students in conceptualizing and visualizing major programming concepts such as Object Oriented Programming and Data Structures. Created a separate web panel for instructors to monitor student performance, give feedback, and post learning tutorials. Built a voice feature to accommodate students with special needs, allowing full app interaction by voice.',
    tags: ['Flutter', 'Unity', 'Web Panel', 'Accessibility', 'Mobile', 'Voice Recognition'],
    featured: true,
    category: 'web',
  },
]

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Wichita State University',
    gpa: '3.89 / 4.0',
    startYear: 'Aug 2024',
    endYear: 'May 2026',
    location: 'Wichita, KS',
    note: 'Graduate Research Assistant',
    coursework: [
      'Artificial Intelligence',
      'Machine Learning',
      'Cyber Security',
      'Network Security',
      'Advanced Algorithms',
      'Advanced Data Storage',
    ],
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Abu Dhabi University',
    startYear: 'Sep 2019',
    endYear: 'Aug 2023',
    location: 'Abu Dhabi, UAE',
    note: 'Attended on a Sports Scholarship',
    coursework: [
      'Data Structures & Algorithms',
      'OOP Design Patterns',
      'Database Management',
      'Data Analytics',
      'Web Programming',
    ],
  },
]

export const CONTACT_INFO = {
  email: 'abdullahhkhann169@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abdullah-khan-05b90b233/',
  github: 'https://github.com/abdullahhkhann',
  location: 'Wichita, KS',
  status: 'Open to New Opportunities',
}
