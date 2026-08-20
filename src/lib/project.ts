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
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    year: 2025,
    demoUrl: "https://aryaem.vercel.app",
    githubUrl: "https://github.com/AryaEm/ARYA-MAULANA",
    image: "/aryaem.png",
  },
  {
    id: "lunvera",
    title: "Lunvera",
    description: "Most design tutorials tell you the rules and expect you to trust them. Lunvera doesn't — it puts a mediocre layout right next to a distinctive one, same content, same purpose, so you can actually see why one works and the other doesn't. Built it because that's how the difference finally clicked for me.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    year: 2026,
    demoUrl: "https://lunveraa.vercel.app",
    githubUrl: "https://github.com/aryaEm/lunvera",
    image: "/lunveraa.png",
  },
  {
    id: "margin",
    title: "Margin",
    description: "For people who finish a book and immediately need someone to talk to about it. Log what you're reading, rate and review as you go, then start a private club with friends to actually discuss chapters together instead of just posting a star rating and moving on.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Framer Motion"],
    year: 2026,
    demoUrl: "https://margin-book.vercel.app/",
    image: "/margin.png",
  },
  {
    id: "cashflo",
    title: "Cashflo",
    description: "Track income and expenses, watch your balance update live, and see the charts call out your weekday coffee runs vs weekend splurges.",
    tech: ["Next.js 15", "Tailwind CSS", "Firebase", "TypeScript"],
    year: 2026,
    demoUrl: "https://my-cashflo.vercel.app/",
    githubUrl: "https://github.com/AryaEm/Cashflo",
  },
  {
    id: "divelight",
    title: "DiveLight",
    description: "An IVE fan gallery that got way more design attention than it probably needed.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript", "Framer Motion"],
    year: 2026,
    demoUrl: "https://divelight.vercel.app/",
    image: "/divelight.png",
  },
  {
    id: "moodly",
    title: "Moodly",
    description: "A quiet place to check in with how you're actually feeling.",
    tech: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    year: 2026,
    demoUrl: "https://mood-ly.vercel.app/",
    githubUrl: "https://github.com/AryaEm/moodly",
  },
  {
    id: "fotokitablur",
    title: "Foto Kita Blurrr",
    description: "Orang lain pake python buat ngoding serius, gw pake MediaPipe buat ngeblur muka gara-gara ikut tren TikTok awokaokwoakw.",
     tech: ["Next.js", "Tailwind CSS", "TypeScript", "MediaPipe"],
    year: 2026,
    demoUrl: "https://fotookitablurr.vercel.app/",
    githubUrl: "https://github.com/AryaEm/gesture-blur-cam",
    image: "/blurrr.png",
  },
];