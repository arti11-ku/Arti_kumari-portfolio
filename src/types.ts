export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  hackathonBadge?: string;
  summary: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  imagePlaceholderId: string;
  placeholderTitle: string;
  aspectRatio?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  scoreLabel: string;
  score: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badgeCount?: string;
  status?: 'completed' | 'pursuing';
  category: 'cloud' | 'ai' | 'software' | 'learning';
  imagePlaceholderId?: string;
  placeholderTitle?: string;
  highlights?: string[];
  credentialUrl?: string;
  hideImage?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  role: string;
  year: string;
  category: string;
  description: string;
  imagePlaceholderId?: string;
  placeholderTitle?: string;
  badge: string;
  credentialUrl?: string;
  hideImage?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'programming' | 'web' | 'tools' | 'ai';
  skills: {
    name: string;
    description: string;
    iconName: string;
  }[];
}
