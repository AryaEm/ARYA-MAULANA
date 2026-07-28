import { CaseStudyPreview } from "@/types";

export const featuredCaseStudy: CaseStudyPreview = {
  slug: "lunvera",
  title: "Lunvera",
  role: "Content + Design + Dev",
  year: "2026",
  summary:
    "A visual UI design education platform, learn through interactive before/after comparisons, not theory.",
  stack: ["Next.js", "Tailwind"],
};

export type Project = {
  id: string;
  title: string;
  hook: string;
  description: string;
  tech: string[];
  year: number;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "aryaem",
    title: "Aryaem",
    hook: "Protfoli website",
    description: "The website you're looking at.",
    tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
    year: 2026,
    demoUrl: "https://aryaem.vercel.app",
    githubUrl: "https://github.com/AryaEm/ARYA-MAULANA",
    image: "/aryaem.png",
  },
  {
    id: "lunvera",
    title: "Lunvera",
    hook: "Learn UI design by seeing the difference.",
    description: "Design learning platform focused on real world comparison examples.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    year: 2026,
    demoUrl: "https://lunvera.vercel.app",
  },
  {
    id: "cashflo",
    title: "Cashflo",
    hook: "Track money effortlessly with visual clarity.",
    description: "Expense tracker app with real time dynamic analytics & charts.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    year: 2025,
    demoUrl: "#",
  },
  {
    id: "moodly",
    title: "Moodly",
    hook: "Track your daily emotion and mind flow.",
    description: "Mood tracking web app integrated with AI sentiment insights.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    year: 2025,
    demoUrl: "#",
  },
];