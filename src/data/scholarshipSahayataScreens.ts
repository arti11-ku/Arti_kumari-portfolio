export interface ScholarshipScreen {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  storageKey: string;
  aspectRatio: string;
}

export const SCHOLARSHIP_DEMO_VIDEO_URL = "https://youtu.be/hfu9uNqyPn4?si=2WwQ_-AaMtpdUaJA";
export const SCHOLARSHIP_YOUTUBE_EMBED_ID = "hfu9uNqyPn4";
export const SCHOLARSHIP_GITHUB_URL = "https://github.com/Electron103/SCHOLARSHIP-SAHAYATA-SIH";

export const SCHOLARSHIP_SCREENS: ScholarshipScreen[] = [
  {
    id: "scholarship-welcome",
    title: "1. Welcome & Student Onboarding",
    subtitle: "Unlock Your Future — Portal Landing & Registration",
    badge: "Student Onboarding",
    description: "Introductory portal welcoming scholarship seekers with dedicated guidance, step-by-step registration, and simplified educational funding navigation.",
    storageKey: "scholarship_screen_0",
    aspectRatio: "16:9"
  },
  {
    id: "scholarship-status-check",
    title: "2. DBT & Aadhaar Status Verification",
    subtitle: "Ready for Takeoff! — Real-Time NPCI Aadhaar Seeding Check",
    badge: "DBT Verification Engine",
    description: "Instant Aadhaar status lookup engine enabling students to enter their 12-digit UID and verify active Direct Benefit Transfer (DBT) bank seeding.",
    storageKey: "scholarship_screen_1",
    aspectRatio: "16:9"
  },
  {
    id: "scholarship-action-needed",
    title: "3. Action Needed & Seeding Resolution",
    subtitle: "Proactive Bottleneck Alert & Bank Account Resolution",
    badge: "Disbursement Safeguard",
    description: "Smart alert system identifying unseeded accounts and guiding students step-by-step on how to fix bank linking to prevent scholarship delays.",
    storageKey: "scholarship_screen_2",
    aspectRatio: "16:9"
  }
];
