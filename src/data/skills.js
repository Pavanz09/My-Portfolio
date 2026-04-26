import { 
  faCode, faServer, faCloud, faInfinity, 
  faMobileScreenButton, faMicrochip, faTerminal, 
  faTools, faBrain
} from '@fortawesome/free-solid-svg-icons';

export const skillsData = [
  {
    id: 1,
    title: 'Frontend & Mobile Stack',
    icon: faMobileScreenButton,
    description: 'Specializing in high-performance cross-platform mobile apps and responsive web architectures.',
    tags: [
      'React Native', 'React Js',
      'Zustand', 'Redux Toolkit', 'HTML5/CSS3', 'Sass', 'Material UI', 'Native Modules'
    ],
    color: '#FF004F',
  },
  {
    id: 2,
    title: 'Backend & IoT Engineering',
    icon: faMicrochip,
    description: 'Designing event-driven backends and bridging hardware to cloud ecosystems.',
    tags: [
      'Node.js', 'TypeScript', 'Java', 'Kafka', 
      'REST API', 'Webhooks', 
    ],
    color: '#FF004F',
  },
  {
    id: 3,
    title: 'Cloud & Database Systems',
    icon: faCloud,
    description: 'Architecting scalable cloud infrastructure and secure data management solutions.',
    tags: [
      'AWS (ECS, Lambda, S3, API Gateway)', 'GCP Console', 'Firebase', 
      'PostgreSQL', 'MySQL', 'Sequelize ORM'
    ],
    color: '#FF004F',
  },
  {
    id: 4,
    title: 'DevOps & Pipeline Automation',
    icon: faInfinity,
    description: 'Managing the full deployment lifecycle and non-interactive CI/CD workflows.',
    tags: [
      'GitLab CI/CD', 'Fastlane', 'Docker', 'App Store Connect API', 
      'Google Play Console', 'Self-hosted Runners', 'Bash / Shell Script', 'Jest'
    ],
    color: '#FF004F',
  },
  {
    id: 5,
    title: 'Intelligent CLIs & Environments',
    icon: faTerminal,
    description: 'Utilizing next-gen command-line agents and intelligent IDEs to accelerate engineering.',
    tags: [
      'Claude Code', 'Cursor', 'Antigravity', 'Qoder', 'Gemini CLI', 
      'Codex', 'MCP Servers', 'VS Code', 'Postman', 'Ngrok'
    ],
    color: '#FF004F',
  },
  {
    id: 6,
    title: 'Reasoning Models & LLMs',
    icon: faBrain,
    description: 'Leveraging advanced reasoning models for technical decision-making and logic optimization.',
    tags: [
      'DeepSeek', 'Claude', 'GPT', 'Llama', 'Gemini'
    ],
    color: '#FF004F',
  },
];
