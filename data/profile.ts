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
  architectureLayers: string[]
  keyFeatures: string[]
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
    headline: 'Open to opportunities',
    availability: [
      'Software Engineering Internship',
      'Cybersecurity Internship',
      'Co-op',
    ],
    education: 'M.S. Cyber Security — University of Texas at Dallas',
    certification: 'CompTIA Security+ · ISC2 Certified in Cybersecurity (CC)',
    experience: 'Former Full Stack Developer at Tata Consultancy Services',
    location: 'Dallas, Texas',
    workAuthorization: 'F-1 OPT/CPT Available',
  },

  hero: {
    developer: {
      headline: 'Abhishek Vaidya.',
      subtitle:
        'Full Stack Developer specializing in React, Next.js, TypeScript, Java, cloud infrastructure, and AI-powered applications.',
    },
    security: {
      headline: 'Abhishek Vaidya.',
      subtitle:
        'I build and harden production software — from React/Next.js and Spring Boot APIs to cloud deployments with security gates baked in.',
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
      "Full-stack engineer and M.S. Cybersecurity candidate at UT Dallas.",
      'Production apps end-to-end — React/Next.js, APIs, Docker CI/CD, and security gates baked into delivery.',
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
    cardTagline: 'Secure software with engineering discipline and a defense mindset.',
  },

  skills: {
    categories: [
      {
        id: 'frontend' as const,
        title: 'Frontend',
        skills: ['React', 'Next.js 14', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'REST & GraphQL'],
      },
      {
        id: 'backend' as const,
        title: 'Backend',
        skills: ['Node.js', 'Express', 'Spring Boot', 'JWT', 'REST APIs', 'GraphQL', 'Microservices'],
      },
      {
        id: 'programming' as const,
        title: 'Programming Languages',
        skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
      },
      {
        id: 'cloud' as const,
        title: 'Cloud',
        skills: ['AWS', 'Azure', 'Vercel'],
      },
      {
        id: 'databases' as const,
        title: 'Databases',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
      },
      {
        id: 'devops' as const,
        title: 'DevOps',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Git', 'Jira', 'Agile'],
      },
      {
        id: 'security' as const,
        title: 'Security',
        skills: [
          'OWASP Top 10',
          'Secure coding',
          'RBAC',
          'Burp Suite',
          'OWASP ZAP',
          'Penetration testing',
          'HIPAA alignment',
        ],
      },
      {
        id: 'ai' as const,
        title: 'AI / ML',
        skills: ['Google Gemini AI', 'AI-powered recommendations', 'SSR optimization'],
      },
    ],
    viewLayout: {
      developer: {
        primary: 'dev-categories' as const,
        secondaryLabel: 'Also experienced in security',
      },
      security: {
        primary: 'security' as const,
        secondaryLabel: 'Also experienced in engineering',
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
      caseStudy: {
        overview:
          'Full-stack e-commerce with catalog, cart, Stripe payments, and real-time inventory.',
        problem:
          'Build a scalable storefront with secure checkout and live stock sync across sessions.',
        solution:
          'React frontend with Express API, PostgreSQL persistence, Redis caching, and Stripe integration.',
        architecture:
          'Layered SPA with REST API, relational data store, cache layer, and third-party payment gateway.',
        architectureLayers: ['Browser', 'React', 'Express API', 'PostgreSQL', 'Redis', 'Stripe API'],
        keyFeatures: [
          'Product catalog and search',
          'Shopping cart and checkout',
          'Stripe payment processing',
          'Real-time inventory sync',
        ],
        challenges: [
          'Keeping inventory consistent across concurrent checkout sessions.',
          'Structuring API boundaries between catalog, cart, and payment flows.',
        ],
        securityConsiderations: [
          'Secure Stripe checkout flow',
          'Input validation on API endpoints',
          'Session and authentication hygiene',
        ],
        metrics: ['Real-time inventory sync', 'Secure Stripe checkout flow', '6-stack technologies'],
        lessonsLearned: [
          'Cache layers reduce load on high-traffic catalog reads.',
          'Payment flows need isolated, testable service boundaries.',
        ],
        categories: ['developer', 'fullstack', 'cloud'],
      },
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
      caseStudy: {
        overview:
          'University-wide learning dashboard — courses, gamified progress, community channels, and podcasts.',
        problem:
          'UT Dallas needed a scalable platform with role-based access and security validation before release.',
        solution:
          'Next.js 14 app with Clerk RBAC, Firebase backend, and Docker CI/CD with Burp Suite gates.',
        architecture:
          'SSR frontend with managed auth, document store, and automated security scanning in the pipeline.',
        architectureLayers: ['Browser', 'Next.js 14', 'Clerk Auth', 'Firebase', 'Docker CI/CD', 'Burp Suite'],
        keyFeatures: [
          'Multi-role RBAC (students, faculty, admins)',
          'Gamified course progress',
          'Community channels and podcasts',
          'Automated security scans in CI/CD',
        ],
        challenges: [
          'Designing RBAC across three distinct user personas.',
          'Integrating security tooling without slowing deployment velocity.',
        ],
        securityConsiderations: [
          'Clerk authentication and session management',
          'RBAC with least-privilege access',
          'Burp Suite scans catching 16 vulnerabilities pre-release',
          '35% fewer deployment incidents via security gates',
        ],
        metrics: [
          '70% faster content publishing',
          '60% faster page/API loads',
          '16 vulnerabilities caught pre-release',
          '35% fewer deployment incidents',
        ],
        lessonsLearned: [
          'Security gates in CI/CD catch issues before they reach production.',
          'Role separation early prevents costly access-control refactors.',
        ],
        categories: ['developer', 'security', 'fullstack', 'cloud'],
      },
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
      caseStudy: {
        overview:
          'Azure-hosted T-Pot honeypot capturing real attack traffic for threat intelligence analysis.',
        problem:
          'Need observable attack surface data — SSH brute-force, port scans, and IOC extraction.',
        solution:
          'Deployed T-Pot on Azure VM with ElasticStack and Kibana for SIEM visualization.',
        architecture:
          'Public-facing honeypot feeding logs into ElasticStack with Kibana dashboards for analysis.',
        architectureLayers: ['Attackers', 'T-Pot Honeypot', 'Azure VM', 'ElasticStack', 'Kibana SIEM'],
        keyFeatures: [
          'Live attack traffic capture',
          'SIEM event aggregation',
          'IOC extraction and analysis',
          'Kibana threat dashboards',
        ],
        challenges: [
          'Isolating lab environment from production infrastructure.',
          'Parsing high-volume attack logs into actionable IOCs.',
        ],
        securityConsiderations: [
          'Isolated lab environment (LAB ENV)',
          'Threat intel posture monitoring',
          'SSH brute-force and port scan detection',
        ],
        metrics: ['200+ SIEM events captured', '22+ IOCs identified', 'Deployed on Microsoft Azure'],
        lessonsLearned: [
          'Honeypots surface attack patterns textbooks cannot replicate.',
          'SIEM tooling turns raw logs into actionable threat intelligence.',
        ],
        categories: ['security', 'cloud'],
      },
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
      caseStudy: {
        overview:
          'HIPAA-aligned hospital platform with six role-separated portals and Zero-Trust PHI isolation.',
        problem:
          'Healthcare workflows require strict PHI protection, role separation, and compliance validation.',
        solution:
          'Next.js app with Supabase/PostgreSQL, AES-256-GCM encryption, and OWASP/Burp validation.',
        architecture:
          'Multi-portal frontend with managed backend, encrypted data layer, and security testing pipeline.',
        architectureLayers: [
          'Browser',
          'Next.js',
          'Supabase API',
          'PostgreSQL',
          'AES-256-GCM',
          'OWASP ZAP / Burp Suite',
        ],
        keyFeatures: [
          'Six role-separated portals',
          'Zero-Trust PHI isolation',
          'AES-256-GCM encryption at rest',
          'Partner hospital data exchange',
        ],
        challenges: [
          'Mapping six distinct roles to least-privilege access patterns.',
          'Validating HIPAA alignment across all data flows.',
        ],
        securityConsiderations: [
          'HIPAA compliance alignment',
          'AES-256-GCM encryption',
          'OWASP ZAP and Burp Suite validation',
          'Zero-Trust PHI isolation',
        ],
        metrics: [
          '6 role-separated portals',
          'AES-256-GCM encryption',
          'OWASP + Burp security validation',
        ],
        lessonsLearned: [
          'Healthcare security requires role design before feature development.',
          'Automated security scanning validates compliance assumptions early.',
        ],
        categories: ['security', 'fullstack', 'cloud'],
      },
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
      caseStudy: {
        overview:
          'Social networking platform with profiles, connections, posts, and real-time messaging.',
        problem:
          'Deliver scalable social features with secure authentication and reliable data persistence.',
        solution:
          'React/Next.js frontend with Spring Boot API, MongoDB storage, and AWS deployment.',
        architecture:
          'SPA with Java backend, document database, and cloud-hosted containerized services.',
        architectureLayers: ['Browser', 'React / Next.js', 'Spring Boot API', 'MongoDB', 'AWS', 'Docker'],
        keyFeatures: [
          'User profiles and connections',
          'Post feed and interactions',
          'Direct messaging',
          'Dockerized deployment',
        ],
        challenges: [
          'Balancing real-time messaging with scalable API design.',
          'Managing auth sessions across frontend and backend boundaries.',
        ],
        securityConsiderations: [
          'Secure authentication and session management',
          'Input validation on API endpoints',
          'Auth + data posture controls',
        ],
        metrics: ['Dockerized AWS deployment', 'Spring Boot + MongoDB stack', 'Live demo on Vercel'],
        lessonsLearned: [
          'Clear API contracts between SPA and backend reduce integration bugs.',
          'Containerization simplifies environment parity across dev and prod.',
        ],
        categories: ['developer', 'fullstack', 'cloud'],
      },
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
      caseStudy: {
        overview:
          'Cloud file management — upload, share, folders, and JWT-authenticated access with S3 storage.',
        problem:
          'Build Dropbox-style storage with secure file access and cloud-backed persistence.',
        solution:
          'React frontend with Express API, MongoDB metadata, AWS S3 blobs, and JWT authentication.',
        architecture:
          'Web client with REST API, document metadata store, object storage, and token-based auth.',
        architectureLayers: ['Browser', 'React', 'Express API', 'MongoDB', 'AWS S3', 'JWT Auth'],
        keyFeatures: [
          'File upload and download',
          'Folder organization',
          'Secure file sharing',
          'Cloud-backed S3 storage',
        ],
        challenges: [
          'Separating file metadata from blob storage efficiently.',
          'Enforcing access control on shared file links.',
        ],
        securityConsiderations: [
          'JWT authentication',
          'Secure file access controls',
          'Storage posture with encrypted transit',
        ],
        metrics: ['AWS S3 cloud storage', 'JWT authentication', 'Live demo deployed'],
        lessonsLearned: [
          'Object storage + metadata DB is the right split for file systems.',
          'JWT scopes should map directly to file/folder permissions.',
        ],
        categories: ['developer', 'fullstack', 'cloud'],
      },
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
      caseStudy: {
        overview:
          'Earlier portfolio iteration showcasing responsive layout, motion design, and component architecture.',
        problem:
          'Create a personal site demonstrating frontend craft and modern React patterns.',
        solution:
          'React/Next.js with TypeScript, Tailwind CSS, and Framer Motion animations.',
        architecture:
          'Static/SSR Next.js site with component-driven structure deployed on Vercel.',
        architectureLayers: ['Browser', 'Next.js', 'React Components', 'Tailwind CSS', 'Vercel'],
        keyFeatures: [
          'Responsive multi-section layout',
          'Framer Motion animations',
          'Component-driven architecture',
          'TypeScript throughout',
        ],
        challenges: [
          'Balancing animation richness with performance budgets.',
          'Structuring reusable component patterns.',
        ],
        securityConsiderations: [
          'Static site — minimal attack surface',
          'No sensitive data exposure',
        ],
        metrics: ['5-technology stack', 'Deployed on Vercel', 'Fully responsive'],
        lessonsLearned: [
          'Component architecture pays off when iterating on layout.',
          'Motion should enhance hierarchy, not distract from content.',
        ],
        categories: ['developer', 'fullstack'],
      },
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
        developer: 'Frontend, backend, and cloud — with security depth underneath.',
        security: 'Offensive tooling, frameworks, and compliance-aware engineering.',
      },
    },
    experience: {
      eyebrow: '// mission_log',
      title: 'Experience',
      subtitle: {
        developer: 'Enterprise and university platforms — production delivery proof.',
        security: 'Security-minded engineering across HR systems, university platforms, and labs.',
      },
    },
    projects: {
      eyebrow: '// mission.deployments',
      title: 'Featured deployments',
      subtitle: {
        developer: 'Live systems sorted for full-stack impact and delivery proof.',
        security: 'Deployments sorted for compliance, threat detection, and hardening proof.',
      },
    },
  },
} as const

export type Profile = typeof profile
