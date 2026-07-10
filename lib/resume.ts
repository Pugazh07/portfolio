export const profile = {
  name: "Pugazhenthiran C",
  initials: "PC",
  title: "Lead Software Engineer",
  location: "Chennai, India",
  email: "pugazh9296@gmail.com",
  phone: "+91 95241 25876",
  github: "https://github.com/Pugazh07",
  linkedin: "https://linkedin.com/in/pugazhenthiran",
  resumeUrl: "/resume.pdf",
  tagline:
    "I build fast, accessible, and maintainable frontend systems — and use AI to build them faster.",
  summary:
    "Lead Software Engineer with 7+ years of experience designing and building scalable enterprise web applications using React, Ember, TypeScript, and modern frontend technologies. I lead feature development, improve engineering productivity through AI-assisted workflows, and ship high-quality software with a focus on performance, accessibility, and maintainability.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const highlights = [
  { label: "Years of experience", value: "7+" },
  { label: "Test coverage achieved", value: "95%" },
  { label: "Faster delivery via AI workflows", value: "+40%" },
];

export const achievements = [
  "Won internal hackathon competitions",
  "Recognized as Top Performer at Tekion",
  "Received multiple internal awards for excellence",
];

export const education = {
  degree: "B.E., Electronics & Communication Engineering",
  school: "CEG, Anna University",
  period: "Aug 2014 — Apr 2018",
};

export const experience = [
  {
    company: "Freshworks",
    role: "Lead Software Engineer",
    period: "Oct 2024 — Present",
    points: [
      "Leveraged AI-assisted development workflows to accelerate feature delivery by 40% while maintaining production quality.",
      "Achieved 95% test coverage through comprehensive Playwright testing.",
      "Automated document workflows, cutting manual effort across teams by 70%.",
      "Built reusable Table and Timeline component libraries, reducing implementation time across multiple product teams.",
      "Implemented accessibility enhancements (WCAG 2.1) across the product suite.",
      "Migrated legacy jQuery modules to modern React components.",
      "Introduced Playwright visual regression testing to catch UI regressions before release.",
      "Mentored junior engineers and contributed to sprint planning and code reviews.",
    ],
  },
  {
    company: "Tekion",
    role: "Senior Software Engineer",
    period: "Jan 2022 — Oct 2024",
    points: [
      "Built CRM and account management systems serving 1,000+ dealerships.",
      "Developed 'Live User Sentiment', a real-time app powered by WebSocket updates.",
      "Implemented a micro-frontend architecture enabling independent team releases.",
      "Automated dealer ranking and task creation, achieving 4x faster actions.",
      "Optimized bundle size by 35% through code splitting and lazy loading.",
      "Led the migration from a monolithic to a modular frontend architecture.",
      "Mentored team members and led end-to-end development cycles.",
    ],
  },
  {
    company: "TCS",
    role: "Software Engineer",
    period: "Oct 2018 — Nov 2021",
    points: [
      "Developed UI components using React class components and Ant Design.",
      "Implemented infinite scrolling to improve UX on large datasets.",
      "Improved application responsiveness through AJAX optimizations.",
      "Practiced TDD with Jest and followed CI/CD deployment pipelines.",
      "Collaborated in Agile sprints with cross-functional teams.",
      "Reduced page load time by 25% through component optimization.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Ember.js",
      "Redux",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "Node.js",
      "Python",
      "Ruby on Rails",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Micro-frontends",
      "Module Federation",
      "Design Systems",
      "Component Libraries",
      "Accessibility (WCAG)",
      "Performance Optimization",
    ],
  },
  {
    title: "Testing",
    skills: ["Playwright", "Jest", "Cypress", "React Testing Library"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "CI/CD", "Webpack", "Vite", "Docker"],
  },
  {
    title: "AI & Developer Productivity",
    skills: [
      "AI-assisted Development",
      "GitHub Copilot",
      "Cursor",
      "MCP",
      "Prompt Engineering",
    ],
  },
];

export const projects = [
  {
    name: "AI Automation Script Generator",
    description:
      "An LLM-powered internal tool that generates automation scripts from plain-language test steps, cutting QA effort by 50%.",
    tags: ["LLM", "Python", "Automation", "Developer Tools"],
  },
];
