export const projectsData = [
  {
    title: "Multi-OEM Smart Home Architecture",
    company: "Atom8 Robotic Labs PVT LTD",
    desc: "Engineered a scalable React Native architecture that powers multiple OEM-branded apps (Atom8, Blunex) from a single codebase. Implemented runtime flags and environment-based routing to isolate voice assistant integrations and deployment pipelines.",
    tech: ["React Native", "GitLab CI", "Fastlane", "Node.js", "Zustand"]
  },
  {
    title: "Secure Account Deletion & Orchestration",
    company: "Atom8 Robotic Labs PVT LTD",
    desc: "Designed a GDPR-compliant account deletion system using Temporal.io for idempotent workflow orchestration. Managed sequential cleanup across Tuya IoT Cloud, Firebase Auth, and 8+ PostgreSQL tables with strict data integrity guarantees.",
    tech: ["Temporal.io", "TypeScript", "Node.js", "PostgreSQL", "Firebase Admin", "React Native"]
  },
  {
    title: "Voice Assistant Cloud Bridge",
    company: "Atom8 Robotic Labs PVT LTD",
    desc: "Designed and implemented a high-availability cloud bridge for Google HomeGraph and Amazon Alexa. Built using a Node.js backend with Kafka for real-time event processing, supporting device sync and state reporting for 10,000+ active IoT devices.",
    tech: ["AWS Lambda", "API Gateway", "Node.js", "Kafka", "Firebase Hosting"]
  },
  {
    title: "Full-Stack Warranty Lifecycle System",
    company: "Atom8 Robotic Labs PVT LTD",
    desc: "Developed an enterprise-grade warranty management platform featuring admin dashboards, server-side PDF generation via PDFKit, and secure AWS S3 storage. Ensured type safety with Zod and solved concurrency challenges in a Turborepo monorepo.",
    tech: ["Next.js", "TypeScript", "Postgres", "AWS S3", "Zod", "Turborepo"]
  },
  {
    title: "WhatsApp AI Support Bot & Dashboard",
    company: "Atom8 Robotic Labs PVT LTD",
    desc: "Built an end-to-end customer service workflow using the WhatsApp Cloud API. Features a stateful bot for automated ticket intake and a centralized operations dashboard with debounced search and real-time status updates.",
    tech: ["Node.js", "WhatsApp API", "Next.js", "Postgres", "Express"]
  },
  {
    title: "Enterprise HRMS Platform",
    company: "TekSolvent IT Services and Consulting",
    desc: "Designed and implemented key modules for a comprehensive HRMS, including employee timesheets and leave management. Optimized global state management using Redux Toolkit, resulting in a 30% improvement in UI responsiveness.",
    tech: ["React Js", "Node.js", "PostgreSQL", "Redux Toolkit", "Material UI"]
  },
  {
    title: "WordPress Web Development",
    company: "TekSolvent IT Services and Consulting",
    desc: "Developed and deployed numerous high-performance WordPress websites for diverse business needs. Expertise in custom theme modifications, plugin integrations, and ensuring mobile-first responsiveness and SEO optimization.",
    tech: ["WordPress", "PHP", "MySQL", "Custom Themes", "Elementor", "SEO"]
  },
  {
    title: "Lead & Client Management (CRM)",
    company: "Intelligrow Bancsoft",
    desc: "Developed a secure CRM system for financial services to track leads and manage client communication. Implemented using a Java Spring Boot backend with Hibernate for efficient database operations and PostgreSQL for robust storage.",
    tech: ["Java", "Spring Boot", "Hibernate", "PostgreSQL", "Thymeleaf"]
  },
  {
    title: "Secure OTP Authentication System",
    company: "Intelligrow Bancsoft",
    desc: "Integrated a secure OTP-based authentication system using the MobTexting API. Built to handle smooth user onboarding for legacy applications, ensuring secure multi-factor authentication and reliable delivery.",
    tech: ["AngularJS", "Java", "MobTexting API", "MySQL", "REST API"]
  }
];
