export interface ScreenshotItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  customImageUrl?: string;
  screenType: 
    | 'login-role'
    | 'issue-reporting'
    | 'ngo-dashboard'
    | 'demand-supply-map'
    | 'proof-verification'
    | 'donor-impact'
    | 'volunteer-roster'
    | 'ai-allocation-assistant';
}

export const defaultScreenshots: ScreenshotItem[] = [
  {
    id: 'ngo-dashboard',
    title: 'NGO Operational Dashboard Overview',
    category: 'Resource Tracking & Metrics',
    description: 'Central operational monitoring dashboard displaying live task metrics, active volunteer counts, 930 resource units, task progress bars, and resource category distributions.',
    tags: ['Resource Tracking', 'Task Management', 'Allocation Status'],
    screenType: 'ngo-dashboard'
  },
  {
    id: 'ai-allocation-assistant',
    title: 'AI Allocation Assistant & Task Management',
    category: 'Priority-Based Allocation',
    description: 'Gemini-assisted intelligent matching engine for dynamic resource and volunteer allocation based on urgent priorities and real-time operational requirements.',
    tags: ['Priority-Based Allocation', 'Task Management', 'Requirement-Based'],
    screenType: 'ai-allocation-assistant'
  },
  {
    id: 'demand-supply-map',
    title: 'Resource Demand vs Supply Map',
    category: 'Resource Allocation & Tracking',
    description: 'Interactive geospatial visualization across 30 locations in India tracking resource shortages (Critical, Moderate) and surplus allocations by category.',
    tags: ['Resource Allocation', 'Allocation Monitoring', 'Geospatial Tracking'],
    screenType: 'demand-supply-map'
  },
  {
    id: 'volunteer-roster',
    title: 'Volunteer Roster & Skill-Based Assignment',
    category: 'Availability-Based Management',
    description: 'Volunteer directory categorizing availability (Full Time, Evenings, Weekends) and skills (First Aid, Logistics, Nursing, Teaching, Driving) for targeted task assignments.',
    tags: ['Availability-Based Management', 'Resource Allocation', 'Task Management'],
    screenType: 'volunteer-roster'
  },
  {
    id: 'proof-verification',
    title: 'Proof Verification & AI Auditing',
    category: 'Allocation Monitoring',
    description: 'Transparent proof verification pipeline reviewing field task execution with automated AI confidence verification scores (e.g. 94% Verified, Suspicious flags).',
    tags: ['Allocation Monitoring', 'Operational Efficiency', 'Proof Verification'],
    screenType: 'proof-verification'
  },
  {
    id: 'donor-impact',
    title: 'Impact Analytics & Category Distribution',
    category: 'Operational Efficiency',
    description: 'Comprehensive impact tracking showing 1,240+ people benefited, 18 districts served, 4,500+ meals provided, and resource utilization across health, food, and education.',
    tags: ['Operational Efficiency', 'Resource Tracking', 'Impact Analytics'],
    screenType: 'donor-impact'
  },
  {
    id: 'issue-reporting',
    title: 'Issue Reporting & Geolocation Mapping',
    category: 'Requirement-Based Allocation',
    description: 'Field incident and resource requirement reporting interface with interactive OpenStreetMap location tagging, delay tracking, and evidence attachments.',
    tags: ['Requirement-Based Allocation', 'Incident Reporting', 'Geolocation'],
    screenType: 'issue-reporting'
  },
  {
    id: 'login-role',
    title: 'Multi-Role Portal & Role-Based Access',
    category: 'System Architecture & Access',
    description: 'Unified authentication gateway tailored for organizational stakeholders with granular role permissions: Reporter, NGO Admin, Admin, Volunteer, and Donor.',
    tags: ['Role-Based Access', 'System Security', 'Multi-Stakeholder'],
    screenType: 'login-role'
  }
];

export const DEMO_VIDEO_URL = "https://drive.google.com/file/d/1Z4TSG23jg6gsLteCOB5FOBfBwGtuqu54/view";
export const RESOURCE_CONNECT_GITHUB_URL = "https://github.com/arti11-ku/Resource-Connect";

export const RESUME_KEY_AREAS = [
  {
    title: "Resource allocation",
    description: "Structured distribution of organizational assets and personnel to active field drives",
    iconName: "Share2"
  },
  {
    title: "Resource tracking",
    description: "Real-time visibility into inventory quantities, statuses, and location coordinates",
    iconName: "Activity"
  },
  {
    title: "Task management",
    description: "End-to-end task creation, priority assignment, delegation, and completion auditing",
    iconName: "CheckSquare"
  },
  {
    title: "Allocation monitoring",
    description: "Live visual status monitoring to prevent underutilization and resolve bottlenecks",
    iconName: "BarChart3"
  },
  {
    title: "Availability-based management",
    description: "Matching requests against live schedules, volunteer hours, and asset availability",
    iconName: "Clock"
  },
  {
    title: "Requirement-based allocation",
    description: "Fulfilling precise specifications for emergency relief, supplies, and specialized skills",
    iconName: "Sliders"
  },
  {
    title: "Priority-based allocation",
    description: "Automated ranking that routes critical resources first to high-urgency requirements",
    iconName: "Flame"
  },
  {
    title: "Operational efficiency",
    description: "Optimizing organizational capacity utilization and reducing idle downtime",
    iconName: "TrendingUp"
  }
];
