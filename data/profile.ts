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
  inProgress?: boolean
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
    degree: 'M.S. Cybersecurity, Technology and Policy',
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
    education: 'M.S. Cybersecurity — UT Dallas (GPA 3.89, May 2027)',
    certification: 'CompTIA Security+ · ISC2 Certified in Cybersecurity (CC)',
    experience: 'Former Full Stack Developer at Tata Consultancy Services',
    location: 'Dallas, Texas',
    workAuthorization: 'F-1 OPT/CPT Available',
  },

  hero: {
    developer: {
      headline: 'Abhishek Vaidya.',
      subtitle:
        'Full-stack developer building secure, production-grade web applications — React/Next.js frontends, Node.js and Spring Boot APIs, and PostgreSQL data layers.',
      supportingLine:
        'M.S. Cybersecurity candidate at UT Dallas (GPA 3.89, graduating May 2027). Boeing HR platform experience at TCS (5× award recipient). Open to software engineering internships and co-ops.',
    },
    security: {
      headline: 'Abhishek Vaidya.',
      subtitle:
        'Cybersecurity M.S. student with enterprise security experience on Boeing\'s HR platform at TCS — RBAC, API hardening, and secure CI/CD gates.',
      supportingLine:
        'GPA 3.89 at UT Dallas (May 2027). CompTIA Security+ and ISC2 CC. TryHackMe Top 1%. 5× TCS award recipient; HIPAA manuscript in preparation with faculty.',
    },
    stats: [
      {
        label: '40+ REST endpoints',
        detail: 'RBAC enforced across Boeing HR platform at TCS',
      },
      {
        label: '6+ auth gaps closed',
        detail: 'Role checks, scoped payloads, and permission-gated UI',
      },
      {
        label: '120+ tickets closed',
        detail: 'Jira & ServiceNow change packages ($5K–$30K each)',
      },
      { label: '5× TCS award recipient', detail: 'Star of the Month ×2, Best Team ×2, On-the-Spot' },
    ] satisfies StatChip[],
  },

  contact: {
    email: 'abhishekcv.us@gmail.com',
    phone: '+1 (945) 367-2111',
  },

  about: {
    paragraphs: [
      'Full-stack developer who builds secure, production-grade web applications end-to-end.',
      'React/Next.js, Node.js & Spring Boot APIs, PostgreSQL — hardened by default. M.S. Cybersecurity at UT Dallas (GPA 3.89). Founder of Pixelora.',
    ],
    focusAreas: [
      'Full-stack product delivery',
      'React / Next.js & API design',
      'Cloud + CI/CD with security gates',
      'RBAC, RLS & secure system design',
    ],
    certificationPath: {
      completed: ['CompTIA Security+', 'ISC2 Certified in Cybersecurity (CC)'],
      inProgress: ['TryHackMe Penetration Testing'],
    },
    cardTagline: 'TryHackMe Top 1% · CompTIA Security+ · ISC2 CC',
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
        skills: ['PostgreSQL (RLS)', 'MongoDB', 'Redis', 'Supabase', 'Firebase'],
      },
      {
        id: 'devops' as const,
        title: 'DevOps',
        skills: ['Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Git', 'Jira', 'ServiceNow', 'Agile'],
      },
      {
        id: 'security' as const,
        title: 'Security',
        skills: [
          'OWASP Top 10',
          'NIST CSF',
          'Zero Trust',
          'RBAC',
          'HIPAA',
          'Burp Suite',
          'OWASP ZAP',
          'SonarQube',
          'SIEM (Elastic)',
          'Wireshark',
          'Nmap',
          'Penetration testing',
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
      flagshipBadge: 'adopted team-wide by university staff',
      impact: {
        label: 'Inventory platform',
        detail: 'Consolidated fragmented device datasets into one searchable system',
      },
      bullets: [
        {
          text: 'Independently designed and built an inventory management application (Next.js, Supabase/PostgreSQL) consolidating fragmented device datasets into one searchable scanning/tracking platform.',
          tag: 'dev' as const,
        },
        {
          text: 'Implemented authentication and multi-role access control with Supabase, enforced server-side through PostgreSQL Row-Level Security (supervisor-only alert-list exports).',
          tag: 'both' as const,
        },
        {
          text: 'Hardened the application with input validation across all user-facing forms and remediated over-permissive API endpoints application-wide.',
          tag: 'security' as const,
        },
      ],
      skills: ['Next.js', 'Supabase', 'PostgreSQL RLS', 'RBAC', 'Input validation'],
    },
    {
      id: 'tcs-boeing',
      type: 'work' as const,
      title: 'Full Stack Developer',
      company: 'Tata Consultancy Services',
      client: 'The Boeing Company',
      location: 'Maharashtra, India',
      period: 'Feb 2024 – May 2025',
      honor: '5× TCS Award Recipient',
      impact: {
        label: 'SonarQube 90%+ gate',
        detail: 'Security quality gate on every production branch in CI/CD',
      },
      bullets: [
        {
          text: 'Developed features across Boeing\'s core HR application (React, Spring Boot, SQL), implementing RBAC across 40+ REST endpoints — closing 6+ authorization gaps across frontend and backend.',
          tag: 'both' as const,
        },
        {
          text: 'Redesigned legacy API endpoints to return minimal, role-scoped payloads; introduced lazy loading on data-heavy HR tables to reduce data exposure.',
          tag: 'security' as const,
        },
        {
          text: 'Enforced a SonarQube quality gate (90%+ required) in CI/CD for every production branch, remediating vulnerabilities and hotspots before release.',
          tag: 'security' as const,
        },
        {
          text: 'Closed 120+ development and production tickets (Jira, ServiceNow) on change packages valued at $5K–$30K each; earned 2× Star of the Month and an On-the-Spot Award.',
          tag: 'dev' as const,
        },
      ],
      skills: ['React', 'Spring Boot', 'SQL', 'RBAC', 'SonarQube', 'Jira', 'ServiceNow'],
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
          text: 'Completed hands-on labs in network security, IDS/IPS, and vulnerability assessment.',
          tag: 'security' as const,
        },
        {
          text: 'Monitored traffic with Wireshark and Snort, detecting 8 simulated intrusions via packet-level analysis.',
          tag: 'security' as const,
        },
      ],
      skills: ['Network Security', 'IDS/IPS', 'Wireshark', 'Snort', 'Vulnerability Assessment'],
    },
    {
      id: 'utd-ms',
      type: 'education' as const,
      title: 'M.S., Cybersecurity, Technology and Policy',
      company: 'University of Texas at Dallas',
      location: 'Dallas, TX',
      period: 'Aug 2025 – Expected May 2027 · GPA 3.89/4.0',
      inProgress: true,
      bullets: [
        {
          text: 'Coursework: Cyber Security Essentials, Data Security & Privacy, Digital Forensics & Incident Management, Conflict in Cyberspace.',
          tag: 'both' as const,
        },
        {
          text: 'Founder, Pixelora — product studio building and shipping real-world client software.',
          tag: 'both' as const,
        },
      ],
      skills: ['Cybersecurity', 'Digital Forensics', 'Data Security', 'Technology Policy'],
    },
    {
      id: 'vtu-bs',
      type: 'education' as const,
      title: 'B.E., Electronics and Communications',
      company: 'Visvesvaraya Technological University',
      location: 'Karnataka, India',
      period: 'Completed June 2023',
      bullets: [
        {
          text: 'B.E. in Electronics and Communications — systems, protocols, and signal processing.',
          tag: 'both' as const,
        },
      ],
      skills: ['Electronics', 'Communications', 'Signal Processing'],
    },
  ] satisfies ExperienceEntry[],

  projects: [
    {
      id: 'walmart-ecommerce',
      title: 'Secure E-Commerce Platform',
      description:
        'Production-grade commerce platform with catalog, cart, real-time inventory, and secure multi-user checkout — hardened against OWASP Top 10 with JWT auth and RBAC.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'JWT', 'RBAC'],
      image: '/walmart.png',
      github: 'https://github.com/AbIsheKVaIdyA/Walmart-Clone',
      demo: 'https://walmart-clone-jade.vercel.app/',
      posture: 'PAYMENTS',
      clearance: 'PUBLIC RELEASE',
      sortOrder: { developer: 1, security: 5 },
      caseStudy: {
        overview:
          'Production-grade commerce platform with product catalog, shopping cart, real-time inventory, and secure multi-user checkout.',
        problem:
          'Deliver a full e-commerce experience while hardening against OWASP Top 10 risks before launch.',
        solution:
          'React frontend with Node.js API, PostgreSQL/Supabase persistence, JWT authentication, and role-based access control.',
        architecture:
          'SPA with REST API, relational data store, JWT session layer, and RBAC-enforced checkout flows.',
        architectureLayers: ['Browser', 'React', 'Node.js API', 'PostgreSQL', 'Supabase', 'JWT + RBAC'],
        keyFeatures: [
          'Product catalog and shopping cart',
          'Real-time inventory tracking',
          'Secure multi-user checkout',
          'JWT authentication and RBAC',
        ],
        challenges: [
          'Closing authentication and authorization gaps before production launch.',
          'Balancing inventory consistency with concurrent checkout sessions.',
        ],
        securityConsiderations: [
          'OWASP Top 10 hardening (CSRF, injection, broken authentication)',
          'JWT auth and RBAC across checkout flows',
          '16 vulnerabilities identified and closed pre-launch',
        ],
        metrics: [
          '16 vulnerabilities closed pre-launch',
          'OWASP Top 10 controls implemented',
          'Live demo deployed on Vercel',
        ],
        lessonsLearned: [
          'Security review before launch is cheaper than post-incident remediation.',
          'RBAC should be enforced at both API and UI layers from day one.',
        ],
        categories: ['developer', 'fullstack', 'cloud', 'security'],
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
      title: 'Azure Honeypot & Threat Detection Lab',
      description:
        'T-Pot honeypot on Azure generating 200+ SIEM events and 22+ IOCs from SSH brute-force and port-scan campaigns — log correlation, OSINT attribution, and Medium write-up.',
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
          'Live attack traffic capture on Azure',
          'ElasticStack log correlation',
          'IOC extraction and OSINT attribution',
          'Threat-intelligence workflow published on Medium',
        ],
        challenges: [
          'Isolating lab environment from production infrastructure.',
          'Correlating high-volume logs into actionable IOCs with OSINT (WHOIS, geolocation).',
        ],
        securityConsiderations: [
          'Isolated lab environment (LAB ENV)',
          'SSH brute-force and port-scan detection',
          'OSINT-based attacker IP attribution',
        ],
        metrics: [
          '200+ SIEM events captured',
          '22+ unique IOCs identified',
          'Full workflow documented on Medium',
        ],
        lessonsLearned: [
          'Honeypots surface attack patterns textbooks cannot replicate.',
          'OSINT attribution turns raw IPs into actionable threat intelligence.',
        ],
        categories: ['security', 'cloud'],
      },
    },
    {
      id: 'hipaa-hospital-system',
      title: 'HIPAA-Compliant Hospital Management System',
      description:
        'HIPAA-aligned hospital platform on a Zero-Trust, six-portal architecture isolating PHI by role — AES-256-GCM encryption, PostgreSQL RLS, and OWASP/Burp validation. Manuscript in preparation with UT Dallas faculty.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'RBAC', 'AES-256-GCM', 'OWASP ZAP', 'Burp Suite'],
      image: '/careport-hipaa.png',
      github: 'https://github.com/AbIsheKVaIdyA',
      demo: 'https://github.com/AbIsheKVaIdyA',
      posture: 'COMPLIANCE',
      clearance: 'PROTECTED',
      sortOrder: { developer: 8, security: 2 },
      caseStudy: {
        overview:
          'Co-developed a HIPAA-aligned hospital platform in a 4-person team on a Zero-Trust, six-portal architecture isolating PHI by role.',
        problem:
          'Healthcare workflows require strict PHI protection, role separation, and compliance validation across multiple portals.',
        solution:
          'Next.js with Supabase/PostgreSQL, AES-256-GCM application-level encryption, PostgreSQL RLS, and doctor-initiated referral module with time-bound links.',
        architecture:
          'Multi-portal frontend with encrypted data layer, RLS-enforced backend, and security testing pipeline.',
        architectureLayers: [
          'Browser',
          'Next.js',
          'Supabase API',
          'PostgreSQL + RLS',
          'AES-256-GCM',
          'OWASP ZAP / Burp Suite',
        ],
        keyFeatures: [
          'Six-portal Zero-Trust PHI isolation',
          'AES-256-GCM application-level encryption',
          'PostgreSQL Row-Level Security policies',
          '72-hour encrypted referral links',
        ],
        challenges: [
          'Designing complete PostgreSQL schema and hospital management APIs.',
          'Validating RLS enforcement through Postman API fuzzing.',
        ],
        securityConsiderations: [
          'HIPAA-aligned architecture; manuscript in preparation',
          'AES-256-GCM — PHI unreadable if database is compromised',
          'OWASP ZAP, Burp Suite, and Postman fuzzing validation',
          'Doctor-initiated referrals with time-bound encrypted links',
        ],
        metrics: [
          '6-portal Zero-Trust architecture',
          'AES-256-GCM encryption layer',
          'OWASP ZAP + Burp Suite validation',
        ],
        lessonsLearned: [
          'Application-level encryption adds defense even if the database is breached.',
          'RLS policies must be validated with API-level fuzzing, not assumptions.',
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
