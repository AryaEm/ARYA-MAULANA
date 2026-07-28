export type TabId = "home" | "about" | "projects" | "contact";

export interface NavItem {
  id: TabId;
  label: string;
  index: string; // e.g. "01"
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: "Github" | "Linkedin" | "Instagram";
}

export interface Strength {
  label: string;
  level: number; // 0-100
}

export interface CaseStudyPreview {
  slug: string;
  title: string;
  role: string;
  year: string;
  summary: string;
  stack: string[];
}