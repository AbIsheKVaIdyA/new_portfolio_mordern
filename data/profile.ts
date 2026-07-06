export type ViewMode = 'developer' | 'security'

export type BulletTag = 'dev' | 'security' | 'both'

export type ExperienceType = 'work' | 'education'

export type CertStatus = 'completed' | 'in-progress'

export interface CertificationEntry {
  id: string
  name: string
  issuer: string
  year: string
  targetYear?: string
  status: CertStatus
  image: string | null
  link: string
  clearance: string
  pipelineNote?: string
  featured?: boolean
}

export interface TaggedBullet {
  text: string
  tag: BulletTag
}

export interface StatChip {
  label: string
  detail?: string
}

export interface ExperienceEntry {
  id: string
  type: ExperienceType
  title: string
  company: string
  location: string
  period: string
  summary?: string
  bullets: TaggedBullet[]
  skills: string[]
  impact?: { label: string; detail: string }
  featured?: boolean
  flagshipBadge?: string
  client?: string
  honor?: string
}

export interface ProjectCaseStudy {
  overview: string
  problem: string
  solution: string
  architecture: string
  challenges: string[]
  securityConsiderations: string[]
  metrics: string[]
  lessonsLearned: string[]
  categories: Array<'developer' | 'security' | 'cloud' | 'ai' | 'fullstack'>
}

export interface ProjectEntry {
  id: string
  title: string
  description: string
  stack: string[]
  image: string
  github: string
  demo: string
  posture: string
  clearance: string
  sortOrder: Record<ViewMode, number>
  caseStudy?: ProjectCaseStudy
}

export interface SkillWithProficiency {
  name: string
  proficiency: number
}

export const profile = {
  identity: {
    name: 'Abhishek Vaidya',
    location: 'Dallas, TX',
    school: 'The University of Texas at Dallas',
    degree: 'M.S. Cybersecurity',
    links: {
      github: 'https://github.com/AbIsheKVaIdyA',
      linkedin: 'https://www.linkedin.com/in/abhishek-vaidya-73075424a/',
      resumeDeveloper: '/Abhishek_Vaidya_Developer.pdf',
      resumeSecurity: '/Abhishek_Vaidya_Security.pdf',
      medium: 'https://medium.com/@abhishekcv.us',
    },
  },

  recruiter: {
    headline: 'Available for Full-Time Roles',
    credentials: [
      'M.S. Cyber Security, UT Dallas',
      'CompTIA Security+',
      'Former Full Stack Developer at TCS',
    ],
    location: 'Dallas, Texas',
    workAuthorization: 'F-1 OPT Eligible',
  },

  hero: {
    developer: {
      headline: 'Abhishek Vaidya.',
      subtitle:
        'Full Stack Developer specializing in React, Next.js, TypeScript, Java, cloud infrastructure, and AI-powered applications.',
      featuredProjectId: 'walmart-ecommerce',
    },
    security: {
      headline: 'Abhishek Vaidya.',
      subtitle:
        'I build and harden production software — from React/Next.js and Spring Boot APIs to cloud deployments with security gates baked in.',
      featuredProjectId: 'hipaa-hospital-system',
    },
    stats: [
      {
        label: '$400K+ client impact',
        detail: 'Measured value at Boeing HR platform (TCS)',
      },
      {
        label: '55%+ faster page loads',
        detail: 'React/MUI rebuild — Boeing company-wide HR system',
      },
      { label: '5× TCS award recipient', detail: 'Recognition across client delivery teams' },
      {
        label: '16 vulnerabilities closed',
        detail: 'Caught pre-release via Burp Suite in UTD platform CI/CD',
      },
    ] satisfies StatChip[],
  },

  contact: {
    email: 'abhishekcv.us@gmail.com',
    phone: '+1 (945) 367-2111',
  },

  about: {
    paragraphs: [
      "I'm Abhishek Vaidya — full-stack engineer and M.S. Cybersecurity candidate at UT Dallas.",
      'I build production web applications end-to-end and harden them the way an attacker would test them — from React/Next.js frontends and APIs to Docker CI/CD with security gates.',
    ],
    focusAreas: [
      'Full-stack product delivery',
      'React / Next.js & API design',
      'Cloud + CI/CD pipelines',
      'Secure system design',
    ],
    certificationPath: {
      completed: ['CompTIA Security+', 'ISC2 Certified in Cybersecurity'],
      inProgress: ['TryHackMe Penetration Testing'],
    },
    cardTagline: 'Building secure software systems with engineering discipline and cyber defense mindset.',
  },

  skills: {
    security: [
      'OWASP Top 10',
      'Secure coding',
      'RBAC',
      'Burp Suite',
      'OWASP ZAP',
      'SonarQube',
      'Wireshark',
      'Nmap',
      'Penetration testing',
      'Digital forensics',
      'HIPAA alignment',
    ],
    categories: [
      {
        id: 'programming' as const,
        title: 'Programming',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
      },
      {
        id: 'frontend' as const,
        title: 'Frontend',
        skills: ['React', 'Next.js 14', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'REST & GraphQL'],
      },
      {
        id: 'backend' as const,
        title: 'Backend & data',
        skills: [
          'Node.js',
          'Express',
          'Spring Boot',
          'JWT',
          'Supabase',
          'Firebase',
          'PostgreSQL',
          'MongoDB',
        ],
      },
      {
        id: 'cloud-data' as const,
        title: 'Cloud & DevOps',
        skills: [
          'AWS',
          'Azure',
          'Docker',
          'Kubernetes',
          'CI/CD',
          'GitHub Actions',
          'Vercel',
          'Git',
          'Jira',
          'Agile',
        ],
      },
      {
        id: 'ai' as const,
        title: 'AI',
        skills: ['Google Gemini AI', 'AI-powered recommendations', 'SSR optimization'],
      },
    ],
    viewLayout: {
      developer: {
        primary: 'dev-categories' as const,
        secondaryLabel: 'Also experienced in security',
        secondary: 'security' as const,
      },
      security: {
        primary: 'security' as const,
        secondaryLabel: 'Also experienced in engineering',
        secondary: 'dev-categories' as const,
      },
    },
  },

  experience: [
    {
      id: 'utd-student-developer',
      type: 'work' as const,
      title: 'Student Assistant Developer',
      company: 'University of Texas at Dallas',
      location: 'Dallas, TX',
      period: 'Nov 2025 – Present',
      featured: true,
      flagshipBadge: 'university-wide launch',
      impact: {
        label: '70% faster publishing',
        detail: 'Content-publish time cut; page/API load time down 60%',
      },
      bullets: [
        {
          text: 'Architected a full-stack learning platform (Next.js 14, React, Firebase) launching university-wide.',
          tag: 'dev' as const,
        },
        {
          text: 'Cut content-publish time by 70% and page/API load time by 60%.',
          tag: 'dev' as const,
        },
        {
          text: 'Built multi-role RBAC with Clerk across students, faculty, and admins.',
          tag: 'both' as const,
        },
        {
          text: 'Implemented Docker CI/CD with integrated Burp Suite scans, catching 16 vulnerabilities pre-release.',
          tag: 'security' as const,
        },
        {
          text: 'Reduced deployment incidents by 35% through automated security gates in the pipeline.',
          tag: 'security' as const,
        },
      ],
      skills: ['Next.js', 'Firebase', 'Clerk Auth', 'RBAC', 'Docker CI/CD', 'Burp Suite'],
    },
    {
      id: 'tcs-boeing',
      type: 'work' as const,
      title: 'Full Stack Developer',
      company: 'Tata Consultancy Services',
      client: 'The Boeing Company',
      location: 'Maharashtra, India',
      period: 'Feb 2024 – May 2025',
      honor: '5x TCS Award Recipient',
      impact: {
        label: '55%+ faster loads',
        detail: '$400K+ in measured client value across the HR platform',
      },
      bullets: [
        {
          text: "Rebuilt the React/Material UI frontend of Boeing's company-wide HR platform, reducing page load time by 55%+.",
          tag: 'dev' as const,
        },
        {
          text: 'Diagnosed and resolved 200+ production defects across React, Spring Boot, and SQL.',
          tag: 'both' as const,
        },
        {
          text: 'Designed secure REST APIs with input validation and auth controls across 100+ endpoints.',
          tag: 'security' as const,
        },
        {
          text: 'Enforced secure coding standards across a 10-person team — contributing to $400K+ in measured client value.',
          tag: 'both' as const,
        },
      ],
      skills: ['React', 'Material UI', 'Spring Boot', 'SQL', 'Secure REST APIs'],
    },
    {
      id: 'eduskills-palo-alto',
      type: 'work' as const,
      title: 'Cybersecurity Virtual Intern',
      company: 'EduSkills Foundation (Palo Alto Networks Partner)',
      location: 'Remote',
      period: 'Mar 2022 – May 2022',
      bullets: [
        {
          text: 'Hands-on labs in network security, firewall configuration, IDS/IPS, and threat detection.',
          tag: 'security' as const,
        },
        {
          text: 'Monitored live traffic with Wireshark and Nmap, identifying simulated intrusions via packet-level analysis.',
          tag: 'security' as const,
        },
      ],
      skills: ['Network Security', 'Firewalls', 'IDS/IPS', 'Wireshark', 'Nmap'],
    },
    {
      id: 'utd-ms',
      type: 'education' as const,
      title: 'M.S. Cybersecurity, Technology and Policy',
      company: 'University of Texas at Dallas',
      location: 'Dallas, TX',
      period: '2025 – Expected May 2027 · GPA 3.90/4.0',
      bullets: [
        {
          text: 'Founder, Pixelora — active product studio shipping client and side projects.',
          tag: 'both' as const,
        },
      ],
      skills: ['Cybersecurity', 'Technology Policy', 'Risk Management', 'Pixelora'],
    },
    {
      id: 'vtu-bs',
      type: 'education' as const,
      title: 'B.S. Electronics and Communications',
      company: 'Visvesvaraya Technological University',
      location: 'Karnataka, India',
      period: 'Completed June 2023 · GPA 3.20/4.0',
      bullets: [
        {
          text: 'B.S. in Electronics and Communications — systems, protocols, and signal processing.',
          tag: 'both' as const,
        },
      ],
      skills: ['Electronics', 'Communications', 'Signal Processing', 'Digital Systems'],
    },
  ] satisfies ExperienceEntry[],

  projects: [
    {
      id: 'walmart-ecommerce',
      title: 'Walmart E-commerce Platform',
      description:
        'Full-stack commerce: catalog, cart, payments, inventory, and secure checkout with real-time stock.',
      stack: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Stripe API', 'Redis'],
      image: '/walmart.png',
      github: 'https://github.com/AbIsheKVaIdyA/Walmart-Clone',
      demo: 'https://walmart-clone-jade.vercel.app/',
      posture: 'PAYMENTS',
      clearance: 'PUBLIC RELEASE',
      sortOrder: { developer: 1, security: 5 },
    },
    {
      id: 'utd-learning-platform',
      title: 'UpSkillr — UTD Learning Platform',
      description:
        'University-wide student learning dashboard at UT Dallas — structured courses, gamified progress, built-in community channels, and educational podcasts. Built with Next.js 14, Clerk RBAC, and Docker CI/CD with Burp Suite security gates.',
      stack: ['Next.js 14', 'React', 'Firebase', 'Clerk', 'RBAC', 'Docker CI/CD', 'Burp Suite'],
      image: '/utd-upskillr.png',
      github: 'https://github.com/AbIsheKVaIdyA',
      demo: 'https://github.com/AbIsheKVaIdyA',
      posture: 'RBAC + AUTH',
      clearance: 'ACADEMIC',
      sortOrder: { developer: 2, security: 6 },
    },
    {
      id: 'azure-honeypot-lab',
      title: 'Azure Honeypot — T-Pot Threat Lab',
      description:
        'Cloud-hosted T-Pot honeypot on Microsoft Azure to capture real-world attack traffic — 200+ SIEM events, 22+ IOCs from SSH brute-force and port scans, analyzed with ElasticStack and Kibana.',
      stack: ['Microsoft Azure', 'T-Pot', 'ElasticStack', 'Kibana', 'SIEM', 'Threat intel'],
      image: '/azure-honeypot-medium.png',
      github: 'https://github.com/AbIsheKVaIdyA',
      demo: 'https://medium.com/@abhishekcv.us',
      posture: 'THREAT INTEL',
      clearance: 'LAB ENV',
      sortOrder: { developer: 7, security: 1 },
    },
    {
      id: 'hipaa-hospital-system',
      title: 'CarePort — HIPAA Hospital System',
      description:
        'HIPAA-aligned hospital platform with six role-separated portals (admin, physician, nursing, front desk, patient, partner hospital), Zero-Trust PHI isolation, AES-256-GCM encryption, and OWASP/Burp security validation.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'RBAC', 'AES-256-GCM', 'OWASP ZAP', 'Burp Suite'],
      image: '/careport-hipaa.png',
      github: 'https://github.com/AbIsheKVaIdyA',
      demo: 'https://github.com/AbIsheKVaIdyA',
      posture: 'COMPLIANCE',
      clearance: 'PROTECTED',
      sortOrder: { developer: 8, security: 2 },
    },
    {
      id: 'linkedin-social',
      title: 'LinkedIn-Style Social Platform',
      description:
        'Social networking with profiles, connections, posts, and messaging — secure auth and scalable architecture.',
      stack: ['React', 'Next.js', 'Spring Boot', 'MongoDB', 'AWS', 'Docker'],
      image: '/linkedin.png',
      github: 'https://github.com/AbIsheKVaIdyA/linkedIn-clone',
      demo: 'https://linkedin-clone-zeta-one.vercel.app/',
      posture: 'AUTH + DATA',
      clearance: 'PUBLIC RELEASE',
      sortOrder: { developer: 3, security: 4 },
    },
    {
      id: 'cloudvault',
      title: 'CloudVault — File Management',
      description:
        'Dropbox-inspired storage: upload, share, folders, and secure authentication with cloud-backed storage.',
      stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AWS S3', 'JWT'],
      image: '/dropbox.png',
      github: 'https://github.com/AbIsheKVaIdyA/dropbox-clone',
      demo: 'https://dropbox-clone-eta.vercel.app/',
      posture: 'STORAGE',
      clearance: 'PUBLIC RELEASE',
      sortOrder: { developer: 4, security: 3 },
    },
    {
      id: 'portfolio-v1',
      title: 'Portfolio (previous gen)',
      description:
        'Earlier portfolio iteration — responsive layout, motion, and component-driven structure.',
      stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: '/old portfolio.png',
      github: 'https://github.com/AbIsheKVaIdyA/portfolio1.0',
      demo: 'https://portfolio-first-eta.vercel.app/',
      posture: 'UI/X',
      clearance: 'ARCHIVE',
      sortOrder: { developer: 5, security: 7 },
    },
  ] satisfies ProjectEntry[],

  activeProjects: [
    {
      id: 'pixelora',
      title: 'Pixelora',
      description:
        'My product studio — client software, restaurant systems, and full-stack builds shipped to production.',
      status: 'Studio' as const,
      stack: ['React', 'Next.js', 'Node.js', 'Supabase', 'Client delivery'],
      link: 'https://www.pixelora.org/',
    },
  ],

  certifications: [
    {
      id: 'comptia-security-plus',
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2025',
      status: 'completed' as const,
      image: '/CompTIA Security+ ce certificate-1.png',
      link: '#',
      clearance: 'L2 — VALIDATED',
      featured: true,
    },
    {
      id: 'isc2-cc',
      name: 'ISC2 Certified in Cybersecurity',
      issuer: 'ISC2',
      year: '2025',
      status: 'completed' as const,
      image: '/digitalcert.jpg',
      link: '#',
      clearance: 'L2 — VALIDATED',
    },
    {
      id: 'tryhackme-pentest',
      name: 'TryHackMe — Penetration Testing',
      issuer: 'TryHackMe',
      year: '2026',
      status: 'in-progress' as const,
      image: null,
      link: 'https://tryhackme.com/',
      clearance: 'IN PROGRESS',
      pipelineNote: 'Currently working through this learning path',
    },
  ] satisfies CertificationEntry[],

  awards: [
    {
      id: 'appreciation-cert',
      title: 'Appreciation Certificate',
      company: 'Tata Consultancy Services',
      year: '2024',
      image: '/Appreciation_Certificate_page-0001.jpg',
      category: 'Recognition',
    },
    {
      id: 'best-team',
      title: 'Best Team Award',
      company: 'Tata Consultancy Services',
      year: '2024',
      image: '/Best_Team_Award_page-0001.jpg',
      category: 'Teamwork',
    },
    {
      id: 'on-the-spot',
      title: 'On the Spot (Team) Award',
      company: 'Tata Consultancy Services',
      year: '2024',
      image: '/On_the_Spot_(Team)_Award_page-0001.jpg',
      category: 'Recognition',
    },
    {
      id: 'star-month',
      title: 'Star of the Month Award',
      company: 'Tata Consultancy Services',
      year: '2024',
      image: '/Star_of_the_Month_Award_page-0001.jpg',
      category: 'Performance',
    },
    {
      id: 'star-team',
      title: 'Star Team Award',
      company: 'Tata Consultancy Services',
      year: '2024',
      image: '/Star_Team_Award_pages-to-jpg-0001.jpg',
      category: 'Team Excellence',
    },
  ],

  sections: {
    skills: {
      eyebrow: '// capability.matrix',
      title: 'Technical skills',
      subtitle: {
        developer:
          'Full-stack delivery across frontend, backend, and cloud — with security depth underneath.',
        security:
          'Security-first capability matrix with offensive tooling, frameworks, and compliance awareness.',
      },
    },
    experience: {
      eyebrow: '// mission_log',
      title: 'Experience',
      subtitle: {
        developer: 'Production delivery and engineering execution across enterprise and university platforms.',
        security: 'Security-minded engineering across enterprise HR systems, university platforms, and labs.',
      },
    },
    projects: {
      eyebrow: '// mission.deployments',
      title: 'Featured deployments',
      subtitle: {
        developer:
          'Product launches and live systems — sorted for full-stack impact and delivery proof.',
        security:
          'Security-relevant deployments — sorted for compliance, threat detection, and hardening proof.',
      },
    },
  },
} as const

export type Profile = typeof profile
