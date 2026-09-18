export type ViewMode = 'developer' | 'security'

/** Shared availability copy for metadata and on-page panels */
export const AVAILABILITY_MESSAGE =
  'Available for Software Engineering and Security internships & co-ops (Summer/Fall 2026 · Spring 2027)'

// Project URL constants — edit here when repos or demos change
export const HONEYPOT_ARTICLE_URL =
  'https://medium.com/@abhishekcv.us/building-a-cloud-hosted-honeypot-with-t-pot-on-microsoft-azure-a-hands-on-cybersecurity-project-8af5fd57ed4a'

export const MOVIEFY_LIVE_URL = 'https://moviefy-gules.vercel.app/'
export const MOVIEFY_REPO_URL = 'https://github.com/AbIsheKVaIdyA/moviefy'

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
  github?: string
  demo?: string
  demoLabel?: string
  privateRepo?: boolean
  posture: string
  clearance: string
  sortOrder: Record<ViewMode, number>
  caseStudy?: ProjectCaseStudy
}

export const profile = {
  identity: {
    name: 'Abhishek Chayadri Vaidya',
    displayName: 'Abhishek Vaidya',
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
      'Software Engineering Internship (Summer/Fall 2026 · Spring 2027)',
      'Cybersecurity Internship (Summer/Fall 2026 · Spring 2027)',
      'Co-op (Summer/Fall 2026 · Spring 2027)',
    ],
    education: 'M.S. Cybersecurity — UT Dallas (GPA 3.89, May 2027)',
    certification: 'CompTIA Security+ · ISC2 Certified in Cybersecurity (CC)',
    experience: 'Former Full Stack Developer at Tata Consultancy Services',
    location: 'Dallas, Texas',
    workAuthorization: 'F-1 OPT/CPT Available',
  },

  hero: {
    developer: {
      headline: 'Abhishek Vaidya',
      subtitle:
        'Full-stack engineer who ships secure production software. TypeScript, React/Next.js, Java/Spring Boot, PostgreSQL.',
      supportingLine:
        'M.S. Cybersecurity, UT Dallas (GPA 3.89, May 2027). Enterprise experience on Boeing\'s HR platform at TCS (5x award recipient). Seeking software engineering and cybersecurity internships / co-ops (CPT).',
    },
    security: {
      headline: 'Abhishek Vaidya',
      subtitle:
        'Cybersecurity M.S. student (GPA 3.89) with enterprise security experience on Boeing\'s HR platform at TCS: RBAC, API hardening, secure CI/CD gates.',
      supportingLine:
        '5x TCS award recipient. TryHackMe Top 1%. HIPAA manuscript in preparation with UT Dallas faculty. CompTIA Security+ · ISC2 CC.',
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
      { label: '5x TCS award recipient', detail: 'Star of the Month x2, Best Team x2, On-the-Spot' },
    ] satisfies StatChip[],
  },

  contact: {
    email: 'abhishekcv.us@gmail.com',
    phone: '+1 (945) 367-2111',
  },

  about: {
    paragraphs: [
      'Full-stack engineer (TypeScript, React/Next.js, Java/Spring Boot, PostgreSQL) who ships secure production software.',
      'M.S. Cybersecurity, UT Dallas (GPA 3.89, May 2027). Enterprise experience on Boeing\'s HR platform at TCS (5x award recipient). Founder of Pixelora.',
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
        id: 'programming' as const,
        title: 'Languages',
        skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
      },
      {
        id: 'frontend' as const,
        title: 'Frontend',
        skills: ['React', 'Next.js 14', 'Tailwind CSS', 'shadcn/ui', 'Zustand', 'Framer Motion', 'Zod', 'REST & GraphQL'],
      },
      {
        id: 'backend' as const,
        title: 'Backend & Data',
        skills: ['Node.js', 'Express', 'Spring Boot', 'JWT', 'Supabase', 'Firebase', 'PostgreSQL (RLS)', 'MongoDB', 'Redis'],
      },
      {
        id: 'cloud' as const,
        title: 'Cloud & DevOps',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Vercel', 'Git', 'Agile'],
      },
      {
        id: 'security' as const,
        title: 'Security',
        skills: [
          'OWASP Top 10',
          'NIST CSF',
          'Secure Coding',
          'RBAC',
          'Zero Trust',
          'HIPAA',
          'Burp Suite',
          'OWASP ZAP',
          'SonarQube',
          'SIEM (Elastic)',
          'Wireshark',
          'Nmap',
          'Threat Detection',
          'Vulnerability Assessment',
        ],
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
      id: 'pixelora-founder',
      type: 'work' as const,
      title: 'Founder & Lead Developer',
      company: 'Pixelora',
      location: 'pixelora.org',
      period: '2025 – Present',
      featured: true,
      bullets: [
        {
          text: 'Building RoamTribe (AI travel) and Moviefy (AI movie discovery) on Next.js/Supabase; ship client products as sole developer.',
          tag: 'dev' as const,
        },
        {
          text: 'Delivered a production restaurant management system (ordering, tables, payments) and multiple client sites (Next.js, TypeScript, Tailwind, Framer Motion).',
          tag: 'dev' as const,
        },
      ],
      skills: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Product Development'],
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
        label: 'SonarQube 90%+ gate',
        detail: 'Security quality gate on every production branch in CI/CD',
      },
      bullets: [
        {
          text: 'Closed 6+ authorization vulnerabilities by implementing RBAC across 40+ REST endpoints (React, Spring Boot, SQL) — role checks, role-filtered API responses, permission-gated UI.',
          tag: 'both' as const,
        },
        {
          text: 'Owned SonarQube security quality gate (90%+ threshold) in CI/CD for every production branch; remediated vulnerabilities and hotspots before release.',
          tag: 'security' as const,
        },
        {
          text: 'Cut data exposure and improved performance with role-scoped API payloads and lazy-loaded HR tables.',
          tag: 'security' as const,
        },
        {
          text: 'Raised code quality across a 10+ person team via reusable components and secure coding standards in review.',
          tag: 'dev' as const,
        },
        {
          text: 'Closed 120+ Jira/ServiceNow tickets on $5K–$30K change packages; 2x Star of the Month and On-the-Spot Award.',
          tag: 'both' as const,
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
        'Catalog, cart, real-time inventory, and secure checkout; closed 16 OWASP Top 10 issues pre-launch (JWT, RBAC, CSRF/injection hardening).',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'JWT', 'RBAC'],
      image: '/walmart.png',
      github: 'https://github.com/AbIsheKVaIdyA/Secure-E-Commerce-Platform',
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
      github: 'https://github.com/AbIsheKVaIdyA/VirtualLabFinal',
      demo: 'https://virtual-lab-xi.vercel.app/',
      demoLabel: 'Live',
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
          'Hardened auth flow and input validation against OWASP Top 10',
          '35% fewer deployment incidents via security gates',
        ],
        metrics: [
          '70% faster content publishing',
          '60% faster page/API loads',
          'Hardened auth flow and input validation against OWASP Top 10',
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
        'T-Pot on Azure; 200+ SIEM events; 22+ unique IOCs from SSH brute-force and port-scan campaigns via log analysis and OSINT (WHOIS, geolocation).',
      stack: ['Microsoft Azure', 'T-Pot', 'ElasticStack', 'Kibana', 'SIEM', 'OSINT'],
      image: '/azure-honeypot-medium.png',
      demo: HONEYPOT_ARTICLE_URL,
      demoLabel: 'Write-up',
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
        'Zero-Trust six-portal architecture isolating PHI by role; manuscript in preparation with UT Dallas faculty. Owned PostgreSQL schema, core APIs, AES-256-GCM app-level encryption; time-bound (72h) encrypted referral links; validated with ZAP/Burp/Postman.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'RBAC', 'AES-256-GCM', 'OWASP ZAP', 'Burp Suite'],
      image: '/careport-hipaa.png',
      github: 'https://github.com/AbIsheKVaIdyA/HIPPA',
      demo: 'https://hipaa-app.vercel.app/',
      demoLabel: 'Live',
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
      github: 'https://github.com/AbIsheKVaIdyA/CloudVault-File-Management',
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
      id: 'moviefy',
      title: 'Moviefy (Pixelora)',
      description:
        'Gemini-powered recommendations, playlists, and sharing; cut page load ~5s via API optimization and lazy loading; SSR + Zustand + RLS.',
      stack: ['Next.js 14', 'Supabase', 'Gemini AI', 'Zustand'],
      image: '/moviefy-hero.png',
      github: MOVIEFY_REPO_URL,
      demo: MOVIEFY_LIVE_URL,
      demoLabel: 'Live',
      posture: 'AI + RECS',
      clearance: 'PUBLIC RELEASE',
      sortOrder: { developer: 5, security: 8 },
      caseStudy: {
        overview:
          'Movie discovery app with behavior-based Gemini recommendations, trial modes, playlists, and social sharing.',
        problem:
          'Users waste time scrolling across streaming catalogs without a fast, personalized pick.',
        solution:
          'Next.js 14 with Gemini AI personalization, Supabase persistence with RLS, and Zustand client state.',
        architecture:
          'SSR frontend with dynamic routing, Supabase API layer, Gemini recommendation service, and RLS-enforced data access.',
        architectureLayers: ['Browser', 'Next.js 14', 'Zustand', 'Supabase', 'Gemini AI', 'RLS'],
        keyFeatures: [
          'Google Gemini AI for behavior-based personalized recommendations',
          'Trial modes, playlist creation, and social sharing',
          'Optimized API calls and lazy loading (~5s faster page loads)',
          'Modular SSR architecture with dynamic routing and Supabase RLS',
        ],
        challenges: [
          'Balancing Gemini API latency with responsive UI through caching and lazy loading.',
          'Designing RLS policies that support playlists and shared taste profiles.',
        ],
        securityConsiderations: [
          'Supabase Row-Level Security on user playlists and taste data',
          'Input validation on recommendation and sharing flows',
          'Secure session handling for authenticated features',
        ],
        metrics: [
          '~5s faster page loads via API optimization and lazy loading',
          'High Lighthouse performance scores',
          'SSR + dynamic routing with Supabase RLS',
        ],
        lessonsLearned: [
          'Lazy loading and request batching matter as much as model quality for perceived speed.',
          'RLS should be designed alongside feature schemas, not bolted on later.',
        ],
        categories: ['developer', 'fullstack', 'cloud', 'ai'],
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
