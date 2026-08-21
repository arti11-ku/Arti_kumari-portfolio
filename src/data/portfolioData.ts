import { Project, EducationItem, Certification, Achievement, SkillCategory } from '../types';

export const personalInfo = {
  name: "Arti Kumari",
  alternateName: "Arti Kumari",
  headline: "Computer Science Engineering Student | Python & AI/ML Enthusiast",
  subHeadline: "Building with Python, Web Technologies & Generative AI",
  email: "arti09834@gmail.com",
  phone: "+91 9752795755",
  linkedin: "https://www.linkedin.com/in/arti-kumari-99029b273",
  github: "https://github.com/arti11-ku",
  location: "Bhilai, Chhattisgarh, India",
  college: "Shri Shankaracharya Technical Campus, Bhilai",
  graduationYear: "2023 - 2027",
  cgpa: "8+ CGPA",
  avatarUrl: "https://i.ibb.co/Ng9z2XPw/Arti.jpg",
  summary:
    "Aspiring Computer Science engineer currently pursuing a Bachelor of Technology (B.Tech), maintaining a CGPA 8+. Equipped with a strong grasp of programming fundamentals and core technical concepts, along with a deep interest in exploring domains such as Data Science and AI. Actively builds and shares technical work through platforms like GitHub and LinkedIn, reflecting a commitment to continuous growth and industry awareness. Highly driven, organized, and eager to apply technical knowledge in real-world scenarios while contributing effectively to team-based projects and innovative solutions."
};

export const stats = [
  { label: "B.Tech CGPA", value: "8+ CGPA", detail: "Shri Shankaracharya Technical Campus" },
  { label: "Academic Cycle", value: "2023–2027", detail: "Computer Science & Engineering" },
  { label: "SIH 2025", value: "Finalist", detail: "Smart India Hackathon 2025" },
  { label: "Google Cloud", value: "20+ Badges", detail: "Cloud & Generative AI Badges" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    categoryKey: "programming",
    skills: [
      {
        name: "Python",
        description: "Core programming fundamentals, scripting, automation, and algorithmic problem-solving",
        iconName: "Code2"
      },
      {
        name: "SQL (MySQL)",
        description: "Relational database querying, schema structuring, data filtering, and relational management",
        iconName: "Database"
      }
    ]
  },
  {
    title: "Web Technologies",
    categoryKey: "web",
    skills: [
      {
        name: "HTML",
        description: "Semantic web page structure, accessible layouts, and clean DOM hierarchy",
        iconName: "FileCode"
      },
      {
        name: "CSS",
        description: "Responsive styling, modern UI layouts, flexbox, grid, and adaptive aesthetics",
        iconName: "Palette"
      },
      {
        name: "JavaScript",
        description: "Interactive DOM behavior, asynchronous logic, event handling, and dynamic UI integration",
        iconName: "Sparkles"
      }
    ]
  },
  {
    title: "Tools & Platforms",
    categoryKey: "tools",
    skills: [
      {
        name: "GitHub",
        description: "Version control, collaborative repository management, tracking changes, and project sharing",
        iconName: "GitBranch"
      },
      {
        name: "Visual Studio Code",
        description: "Primary development environment, multi-language debugging, and workflow optimization",
        iconName: "Terminal"
      }
    ]
  },
  {
    title: "AI Tools & Automation",
    categoryKey: "ai",
    skills: [
      {
        name: "AI Automation Tools",
        description: "Proficient in utilizing AI tools for productivity, automation, workflow acceleration, and experimentation",
        iconName: "Bot"
      },
      {
        name: "Data Science & GenAI",
        description: "Active continuous learning in data analysis, machine learning foundations, and Generative AI workflows",
        iconName: "Cpu"
      }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "scholarship-sahayata",
    title: "Scholarship Sahayata",
    subtitle: "AI-Powered DBT Awareness & Support System",
    hackathonBadge: "Smart India Hackathon (SIH) 2025 Finalist Project",
    summary:
      "Developed a digital platform to improve student awareness of DBT-enabled Aadhaar-seeded bank accounts and simplify scholarship assistance.",
    description:
      "Scholarship Sahayata was engineered to bridge critical informational and process gaps in scholarship disbursement. Direct Benefit Transfer (DBT) requires active Aadhaar seeding with bank accounts, which frequently causes application bottlenecks for students. The platform provides intelligent guidance through automated AI interaction, step-by-step form assistance in multiple languages, and real-time status monitoring dashboards for both students and education administrators.",
    keyFeatures: [
      "Integrated AI Chatbot for 24/7 student guidance and query resolution",
      "AI-based Form Assistance for error-free scholarship application submissions",
      "Multilingual Accessibility to empower students across diverse language backgrounds",
      "Automated Notification Engine for critical deadline alerts and disbursement updates",
      "Government & Administrator Dashboards for institutional visibility and oversight",
      "DBT Awareness & Aadhaar-Seeding verification assistance workflows"
    ],
    techStack: ["Python", "AI Integration", "Web Technologies (HTML, CSS, JS)", "Database"],
    imagePlaceholderId: "scholarship-sahayata-preview",
    placeholderTitle: "UPLOAD SCHOLARSHIP SAHAYATA SCREENSHOT",
    aspectRatio: "16:10",
    githubUrl: "https://github.com/Electron103/SCHOLARSHIP-SAHAYATA-SIH"
  }
];

export const educationList: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution: "Shri Shankaracharya Technical Campus",
    location: "Bhilai, Chhattisgarh",
    duration: "2023 - 2027",
    scoreLabel: "Current CGPA",
    score: "8+",
    description:
      "Specializing in core computer science disciplines including programming fundamentals, database systems, software design, and applied artificial intelligence."
  },
  {
    degree: "All India Senior School Certificate Examination (AISSCE) - Class XII",
    institution: "Shakuntala Vidyalaya",
    location: "Ram Nagar, Bhilai",
    duration: "Completed",
    scoreLabel: "Score",
    score: "88.4%",
    description:
      "Rigorous pre-university academic foundation with strong quantitative and analytical rigor."
  },
  {
    degree: "All India Secondary School Examination (AISSE) - Class X",
    institution: "Shakuntala Vidyalaya",
    location: "Ram Nagar, Bhilai",
    duration: "Completed",
    scoreLabel: "Score",
    score: "89%",
    description:
      "Excellence in core STEM academics, problem-solving, and scholastic foundations."
  }
];

export const certifications: Certification[] = [
  {
    id: "iit-bhilai-uav",
    title: "Bootcamp on UAV Navigation, Control & its Applications",
    issuer: "IIT Bhilai & MeitY (Govt. of India)",
    badgeCount: "Cert. No: BMCP/IITBH/026/23",
    status: "completed",
    category: "software",
    credentialUrl: "https://drive.google.com/file/d/1ytLreZ599ESDXYkqPSC6ggcV61FGzvOk/view?usp=drive_link",
    hideImage: true,
    highlights: [
      "Sponsored by MeitY, Govt. of India & Organized by IIT Bhilai at SSTC (Feb 13-17, 2026)",
      "Hands-on UAV navigation principles, flight dynamics, and embedded control systems",
      "CBHRDUAS MeitY project certification under Dr. Avishek Adhikary & Dr. Soumajit Pramanik"
    ]
  },
  {
    id: "secr-railways-training",
    title: "Vocational Industrial Training — South East Central Railway",
    issuer: "South East Central Railway (Bilaspur Division)",
    badgeCount: "8 Key Telecom & Rail Systems",
    status: "completed",
    category: "software",
    credentialUrl: "https://drive.google.com/file/d/1sGcEyP4mFRVsRCgz5hyXno5Kc4tv2cW9/view?usp=drive_link",
    hideImage: true,
    highlights: [
      "Completed 4th-Sem vocational training at Bilaspur Division (21/07/2025 to 09/08/2025)",
      "Hands-on training in UTS, PRS, IPIS, Telephone Exchange, Railnet, OFC, Battery & IPS",
      "Certified by Sr. Div. Signal & Tele., Engg.(CO), SECR (Dated 12.08.2025)"
    ]
  },
  {
    id: "google-cloud-genai",
    title: "20+ Skill Badges in Google Cloud & Generative AI",
    issuer: "Google Cloud",
    badgeCount: "20+ Skill Badges",
    status: "completed",
    category: "cloud",
    credentialUrl: "https://drive.google.com/file/d/15pfd3CjHj0gRDUc2Y2TSZ4HntgUoakb6/view?usp=drive_link",
    hideImage: true,
    highlights: [
      "Hands-on labs across Google Cloud Platform services",
      "Generative AI foundations and prompt engineering design",
      "Cloud architecture and scalable deployment practices"
    ]
  },
  {
    id: "oracle-cloud",
    title: "Oracle Cloud Infrastructure — Foundations",
    issuer: "Oracle",
    status: "completed",
    category: "cloud",
    credentialUrl: "https://drive.google.com/file/d/1eh01eBDzqb4zPvFVoGAJ36xmlW2Jsuad/view?usp=drive_link",
    hideImage: true,
    highlights: [
      "Oracle Cloud Infrastructure (OCI) architecture fundamentals",
      "Core cloud computing models, IAM, and security principles"
    ]
  },
  {
    id: "nptel-software-design",
    title: "Software Conceptual Design",
    issuer: "NPTEL (Ministry of Education)",
    status: "completed",
    category: "software",
    credentialUrl: "https://drive.google.com/file/d/1jJ2lEuuEIDXxTIvsU2vTyoilxAaB-cti/view?usp=drive_link",
    hideImage: true,
    highlights: [
      "Software design methodologies and structured system modeling",
      "Architectural principles for robust, maintainable engineering"
    ]
  },
  {
    id: "pw-skills-datascience-genai",
    title: "Data Science with Generative AI",
    issuer: "PW Skills",
    status: "pursuing",
    category: "learning",
    imagePlaceholderId: "pw-skills-cert",
    placeholderTitle: "IN PROGRESS",
    highlights: [
      "Comprehensive data analysis pipelines and Python data science",
      "Generative AI workflows and applied machine learning models"
    ]
  }
];

export const achievements: Achievement[] = [
  {
    id: "sih-2025",
    title: "Finalist — Smart India Hackathon (SIH) 2025",
    role: "National Finalist (Software Edition)",
    year: "2025",
    category: "National Hackathon",
    badge: "🏆 Grand Finale Dec 8-9, 2025",
    credentialUrl: "https://drive.google.com/file/d/1W85L3WA8EjqvjerQaXhJJbSVGVYwh5cU/view?usp=drive_link",
    hideImage: true,
    description:
      "Awarded official Certificate of Participation by Ministry of Education, AICTE, and MoE's Innovation Cell for competing in the Grand Finale of Smart India Hackathon 2025 with the AI-driven Scholarship Sahayata platform."
  },
  {
    id: "uav-bootcamp-2026",
    title: "UAV Navigation, Control & Applications Bootcamp",
    role: "Certified Participant",
    year: "2026",
    category: "MeitY & IIT Bhilai",
    badge: "🚁 IIT Bhilai & MeitY (Feb 2026)",
    credentialUrl: "https://drive.google.com/file/d/1ytLreZ599ESDXYkqPSC6ggcV61FGzvOk/view?usp=drive_link",
    hideImage: true,
    description:
      "Successfully completed rigorous training on UAV navigation, autonomous flight dynamics, and embedded systems under the Ministry of Electronics & IT (MeitY) and IIT Bhilai."
  },
  {
    id: "railways-training-2025",
    title: "Vocational Industrial Training — South East Central Railway",
    role: "Vocational Trainee (Signal & Telecommunication)",
    year: "2025",
    category: "Industrial Training",
    badge: "🚆 SECR Bilaspur (Aug 2025)",
    credentialUrl: "https://drive.google.com/file/d/1sGcEyP4mFRVsRCgz5hyXno5Kc4tv2cW9/view?usp=drive_link",
    hideImage: true,
    description:
      "Completed hands-on industrial training across 8 core railway technologies: UTS, PRS, IPIS, Telephone Exchange, Railnet, OFC, Battery Maintenance, and Integrated Power Supplies."
  },
  {
    id: "devfest-2025",
    title: "Participant, DevFest 2025",
    role: "Attendee & Tech Community Member",
    year: "2025",
    category: "Developer Conference",
    badge: "🎤 DevFest 2025",
    credentialUrl: "https://drive.google.com/file/d/1iDKW99BocGOGRwH_Z9hkRYxGz1Uui7Tx/view?usp=drive_link",
    hideImage: true,
    description:
      "Engaged in technical keynotes, industry developer sessions, and ecosystem workshops on modern engineering, AI, and developer tools."
  }
];

export const softSkills = [
  {
    title: "Effective Communication",
    description: "Clear articulation of technical ideas, collaborative documentation, and active listening in engineering teams.",
    icon: "MessageSquare"
  },
  {
    title: "Problem-Solving Ability",
    description: "Logical decomposition of complex requirements into structured, actionable, and testable code solutions.",
    icon: "Lightbulb"
  },
  {
    title: "Adaptability & Flexibility",
    description: "Rapidly mastering emerging developer tools, libraries, and changing technical specifications with curiosity.",
    icon: "Zap"
  },
  {
    title: "Time Management",
    description: "Balancing academic rigor (8+ CGPA), hackathon milestones, continuous certifications, and project deliveries.",
    icon: "Clock"
  },
  {
    title: "Team Collaboration",
    description: "Proven track record of constructive teamwork in hackathons like SIH 2025 and industrial vocational training.",
    icon: "Users"
  }
];
