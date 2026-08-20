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
    description: "The website you're looking at.",
    tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
    year: 2025,
    demoUrl: "https://aryaem.vercel.app",
    githubUrl: "https://github.com/AryaEm/ARYA-MAULANA",
    image: "/aryaem.png",
  },
  {
    id: "divelight",
    title: "DiveLight",
    description: "A visual-first Ive gallery, built to explore how far aesthetic and layout can carry user experience.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Framer Motion"],
    year: 2026,
    demoUrl: "https://divelight.vercel.app/",
    image: "/divelight.png",
  },
  {
    id: "lunvera",
    title: "Lunvera",
    description: "Design learning platform focused on real world comparison examples.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    year: 2026,
    demoUrl: "https://lunveraa.vercel.app",
    githubUrl: "https://github.com/aryaEm/lunvera",
    image: "/lunveraa.png",
  },
  {
    id: "cashflo",
    title: "Cashflo",
    description: "Expense tracker app with real time dynamic analytics & charts.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    year: 2026,
    demoUrl: "https://my-cashflo.vercel.app/",
    githubUrl: "https://github.com/AryaEm/Cashflo",
  },
  {
    id: "margin",
    title: "Margin",
    description: "Reading tracker meets mini book club, personal habit and social interaction in one platform.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Framer Motion"],
    year: 2026,
    demoUrl: "https://margin-book.vercel.app/",
    image: "/margin.png",
  },
  {
    id: "moodly",
    title: "Moodly",
    description: "Mood tracking web app integrated with AI sentiment insights.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    year: 2026,
    demoUrl: "https://mood-ly.vercel.app/",
    githubUrl: "https://github.com/AryaEm/moodly",
  },
];