export type ViewMode = 'developer' | 'security'

/** Shared availability copy for metadata and on-page panels */
export const AVAILABILITY_MESSAGE =
  'Open to Software Engineering and Cybersecurity internships and co-ops for Summer and Fall 2026 and Spring 2027 (F-1 CPT/OPT)'

// Project URL constants removed - all URLs now inline in projects array for clarity

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
  mediumArticle?: string
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
      resumeDeveloper: '/resumes/Abhishek_Vaidya_SWE_Resume.pdf',
      resumeSecurity: '/resumes/Abhishek_Vaidya_Security_Resume.pdf',
      medium: 'https://medium.com/@abhishekcv.us',
    },
  },

  recruiter: {
    headline: 'Open to opportunities',
    availability: [
      'Software Engineering Internship (Summer/Fall 2026, Spring 2027)',
      'Cybersecurity Internship (Summer/Fall 2026, Spring 2027)',
      'Co-op (Summer/Fall 2026, Spring 2027)',
    ],
    education: 'M.S. Cybersecurity, UT Dallas (GPA 3.89, May 2027)',
    certification: 'CompTIA Security+, ISC2 CC',
    experience: 'Former Full Stack Developer at TCS (Boeing)',
    location: 'Dallas, Texas',
    workAuthorization: 'F-1 CPT/OPT Available',
  },

  hero: {
    developer: {
      headline: 'Abhishek Vaidya',
      subtitle:
        'Full-stack engineer with AppSec focus. Open to Software Engineering and Cybersecurity internships and co-ops for Summer and Fall 2026 and Spring 2027.',
      supportingLine:
        'Dallas, TX · F-1 CPT/OPT available',
      certs: 'CompTIA Security+ · ISC2 CC · TryHackMe Top 1%',
    },
    security: {
      headline: 'Abhishek Vaidya',
      subtitle:
        'Full-stack engineer with AppSec focus. Open to Software Engineering and Cybersecurity internships and co-ops for Summer and Fall 2026 and Spring 2027.',
      supportingLine:
        'Dallas, TX · F-1 CPT/OPT available',
      certs: 'CompTIA Security+ · ISC2 CC · TryHackMe Top 1%',
    },
    stats: [] satisfies StatChip[],
  },

  contact: {
    email: 'abhishekcv.us@gmail.com',
    phone: '+1 (945) 367-2111',
  },

  about: {
    paragraphs: [
      'I build production software that stays secure by default. Full-stack work with React/Next.js and Spring Boot/Node, plus the auth, RBAC, and CI/CD checks that keep things safe when real users hit them.',
      'At TCS I worked on Boeing\'s company-wide HR platform. I closed 6+ authorization gaps across 40+ REST endpoints, tightened APIs so they only return what each role should see, and owned a SonarQube security quality gate (90%+) on every production branch. Closed 120+ tickets on change packages valued at $5K to $30K. 5x TCS award recipient.',
      'At UT Dallas I\'m a Student Assistant Developer (Next.js/Supabase, adopted team-wide) and an M.S. Cybersecurity student (GPA 3.89, May 2027). CompTIA Security+, ISC2 CC, TryHackMe Top 1%. Through Pixelora I ship client software and my own products like Moviefy and RoamTribe.',
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
    cardTagline: 'CompTIA Security+ · ISC2 CC · TryHackMe Top 1% Global',
  },

  skills: {
    categories: [
      {
        id: 'engineering' as const,
        title: 'Engineering',
        skills: [
          'React',
          'Next.js',
          'TypeScript',
          'Node.js',
          'Spring Boot',
          'PostgreSQL',
          'AWS',
          'Docker',
          'CI/CD',
          'Git',
          'Supabase',
          'REST APIs',
        ],
      },
      {
        id: 'security' as const,
        title: 'Security',
        skills: [
          'RBAC',
          'OWASP Top 10',
          'SonarQube',
          'Burp Suite',
          'OWASP ZAP',
          'SIEM',
          'Wireshark',
          'Nmap',
          'Zero Trust',
          'HIPAA',
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
      location: 'Texas, on-site',
      period: 'Nov 2025 - Present',
      featured: true,
      flagshipBadge: 'adopted team-wide by university staff · live at inventory-six-chi-82.vercel.app',
      impact: {
        label: 'Inventory platform',
        detail: 'Consolidated fragmented device datasets into one searchable system',
      },
      bullets: [
        {
          text: 'Built Next.js/Supabase inventory platform consolidating fragmented device data; adopted team-wide by university staff.',
          tag: 'both' as const,
        },
        {
          text: 'Implemented multi-role auth with PostgreSQL Row-Level Security (supervisor-only exports).',
          tag: 'both' as const,
        },
        {
          text: 'Hardened app with input validation and fixed over-permissive API endpoints.',
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
      period: 'Jan 2025 - Present',
      featured: true,
      bullets: [
        {
          text: 'Shipped Moviefy, an AI movie-discovery app on Next.js/Supabase with Gemini recommendations; cut page load by about 5s through API optimization and lazy loading.',
          tag: 'both' as const,
        },
        {
          text: 'Built and still run a live restaurant management system for a real client (VD Cafe): menu ordering, table management, and payments, used by customers in production (React, Node.js, MongoDB).',
          tag: 'both' as const,
        },
        {
          text: 'Building RoamTribe, an AI travel product with personalized itineraries and a solo-travel community for women, while delivering multiple client websites end-to-end as sole developer.',
          tag: 'both' as const,
        },
      ],
      skills: ['Next.js', 'TypeScript', 'Supabase', 'React', 'Node.js', 'MongoDB', 'Gemini AI', 'Product Development'],
    },
    {
      id: 'tcs-boeing',
      type: 'work' as const,
      title: 'Full Stack Developer',
      company: 'Tata Consultancy Services',
      client: 'Boeing',
      location: 'Mumbai, Maharashtra, India',
      period: 'Feb 2024 - May 2025',
      honor: '5x TCS Award Recipient',
      impact: {
        label: 'SonarQube 90%+ gate',
        detail: 'Security quality gate on every production branch in CI/CD',
      },
      bullets: [
        {
          text: 'Implemented RBAC across 40+ REST endpoints, closed 6+ authorization gaps (React, Spring Boot, SQL).',
          tag: 'both' as const,
        },
        {
          text: 'Owned SonarQube security gate (90%+) in CI/CD for every production branch.',
          tag: 'security' as const,
        },
        {
          text: 'Closed 120+ tickets on $5K-$30K change packages; 2x Star of the Month, On-the-Spot award (5x TCS awards total).',
          tag: 'both' as const,
        },
      ],
      skills: ['React', 'Spring Boot', 'SQL', 'RBAC', 'SonarQube', 'Jira', 'ServiceNow'],
    },
    {
      id: 'eduskills-palo-alto',
      type: 'work' as const,
      title: 'Cybersecurity Intern',
      company: 'EduSkills Foundation (Palo Alto Networks Partner)',
      location: 'Remote',
      period: 'Mar 2022 - May 2022',
      bullets: [
        {
          text: 'Completed hands-on labs in network security, IDS/IPS, and vulnerability assessment with Palo Alto Networks tools.',
          tag: 'security' as const,
        },
        {
          text: 'Detected 8 simulated intrusions using Wireshark, Snort, and Nmap packet analysis.',
          tag: 'security' as const,
        },
      ],
      skills: ['Network Security', 'IDS/IPS', 'Wireshark', 'Snort', 'Nmap', 'Vulnerability Assessment'],
    },
    {
      id: 'utd-ms',
      type: 'education' as const,
      title: 'M.S., Cybersecurity, Technology and Policy',
      company: 'University of Texas at Dallas',
      location: 'Dallas, TX',
      period: 'Aug 2025 - May 2027 · GPA 3.89/4.0',
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
      period: 'Jun 2019 - Jun 2023',
      bullets: [
        {
          text: 'B.E. in Electronics and Communications.',
          tag: 'both' as const,
        },
      ],
      skills: ['Electronics', 'Communications', 'Signal Processing'],
    },
  ] satisfies ExperienceEntry[],

  projects: [
    {
      id: 'hipaa-hospital-system',
      title: 'HIPAA-Compliant Hospital Management System',
      description:
        'Zero-Trust six-portal architecture isolating PHI by role. AES-256-GCM encryption, PostgreSQL RLS. Manuscript in preparation with UT Dallas faculty.',
      stack: ['Next.js', 'Supabase', 'PostgreSQL', 'TypeScript', 'AES-256-GCM'],
      image: '/careport-hipaa.png',
      github: 'https://github.com/AbIsheKVaIdyA/HIPPA',
      demo: 'https://hipaa-app.vercel.app/',
      demoLabel: 'Live',
      posture: 'COMPLIANCE',
      clearance: 'PROTECTED',
      sortOrder: { developer: 1, security: 1 },
    },
    {
      id: 'azure-honeypot-lab',
      title: 'Azure Honeypot & Threat Detection Lab',
      description:
        'T-Pot on Azure; 200+ SIEM events; 22+ unique IOCs from SSH brute-force and port-scan campaigns.',
      stack: ['Microsoft Azure', 'T-Pot', 'ElasticStack', 'Kibana', 'SIEM'],
      image: '/azure-honeypot-medium.png',
      demo: 'https://medium.com/@abhishekcv.us/building-a-cloud-hosted-honeypot-with-t-pot-on-microsoft-azure-a-hands-on-cybersecurity-project-8af5fd57ed4a',
      demoLabel: 'Write-up',
      posture: 'THREAT INTEL',
      clearance: 'LAB ENV',
      sortOrder: { developer: 2, security: 2 },
    },
    {
      id: 'walmart-ecommerce',
      title: 'Secure E-Commerce Platform',
      description:
        'Production e-commerce with catalog, cart, real-time inventory. Closed 16 OWASP Top 10 issues pre-launch.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Supabase', 'JWT', 'RBAC'],
      image: '/walmart.png',
      github: 'https://github.com/AbIsheKVaIdyA/Walmart-Clone',
      demo: 'https://walmart-clone-jade.vercel.app/',
      demoLabel: 'Live',
      mediumArticle: 'https://medium.com/@abhishekcv.us/secure-walmart-style-e-commerce-platform-full-stack-cybersecurity-implementation-de6330f33566',
      posture: 'PAYMENTS',
      clearance: 'PUBLIC RELEASE',
      sortOrder: { developer: 3, security: 3 },
    },
    {
      id: 'moviefy',
      title: 'Moviefy (Pixelora)',
      description:
        'AI movie discovery with Gemini recommendations, playlists, sharing. Cut page load ~5s via optimization.',
      stack: ['Next.js 14', 'Supabase', 'Gemini AI', 'Zustand'],
      image: '/moviefy-hero.png',
      github: 'https://github.com/AbIsheKVaIdyA/moviefy',
      demo: 'https://moviefy-gules.vercel.app/',
      demoLabel: 'Live',
      posture: 'AI + RECS',
      clearance: 'PUBLIC RELEASE',
      sortOrder: { developer: 4, security: 4 },
    },
  ] satisfies ProjectEntry[],

  activeProjects: [
    {
      id: 'pixelora',
      title: 'Pixelora',
      description:
        'My product studio. Client software, restaurant systems, and full-stack builds shipped to production.',
      link: 'https://www.pixelora.org/',
    },
  ],

  certifications: [
    {
      id: 'comptia-security-plus',
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: 'Nov 2025 - Nov 2028',
      status: 'completed' as const,
      image: '/CompTIA Security+ ce certificate-1.png',
      link: '#',
      clearance: 'CERTIFIED',
      featured: true,
    },
    {
      id: 'isc2-cc',
      name: 'ISC2 Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      year: 'Dec 2025 - Dec 2028',
      status: 'completed' as const,
      image: '/digitalcert.jpg',
      link: '#',
      clearance: 'CERTIFIED',
    },
    {
      id: 'tryhackme-top-1',
      name: 'TryHackMe Top 1% Global',
      issuer: 'TryHackMe',
      year: '2025',
      status: 'completed' as const,
      image: null,
      link: 'https://tryhackme.com/',
      clearance: 'TOP 1%',
      featured: true,
    },
  ] satisfies CertificationEntry[],

  awards: [
    {
      id: 'star-month-oct',
      title: 'Star of the Month (Oct 2024)',
      company: 'Tata Consultancy Services',
      year: 'Oct 2024',
      image: '/Star_of_the_Month_Award_page-0001.jpg',
      category: 'Individual Performance',
    },
    {
      id: 'star-month-feb',
      title: 'Star of the Month (Feb 2025)',
      company: 'Tata Consultancy Services',
      year: 'Feb 2025',
      image: '/Star_of_the_Month_Award_2_pages-to-jpg-0001.jpg',
      category: 'Individual Performance',
    },
    {
      id: 'on-the-spot',
      title: 'On the Spot (Team) Dec 2024',
      company: 'Tata Consultancy Services',
      year: 'Dec 2024',
      image: '/On_the_Spot_(Team)_Award_page-0001.jpg',
      category: 'Emergency Production Support',
    },
    {
      id: 'star-team',
      title: 'Star Team Award Oct 2024',
      company: 'Tata Consultancy Services',
      year: 'Oct 2024',
      image: '/Star_Team_Award_pages-to-jpg-0001.jpg',
      category: 'Team Excellence',
    },
    {
      id: 'best-team',
      title: 'Best Team Award Jun 2024',
      company: 'Tata Consultancy Services',
      year: 'Jun 2024',
      image: '/Best_Team_Award_page-0001.jpg',
      category: 'Teamwork',
    },
  ],

  sections: {
    skills: {
      eyebrow: '// capability.matrix',
      title: 'Technical skills',
      subtitle: {
        developer: 'Frontend, backend, and cloud, with security depth underneath.',
        security: 'Offensive tooling, frameworks, and compliance-aware engineering.',
      },
    },
    experience: {
      eyebrow: '// mission_log',
      title: 'Experience',
      subtitle: {
        developer: 'Enterprise and university platforms with production delivery proof.',
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
