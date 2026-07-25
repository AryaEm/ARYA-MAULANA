export type CaseStudyBlock = {
  num: string
  title: string
  body: string
}

export type Project = {
  id: string
  num: string
  title: string
  tagline: string
  tags: string[]
  role: string
  impact: string
  impactColor?: 'green' | 'pink'
  liveUrl?: string
  repoUrl?: string
  previewUrl?: string
  icon?: string
  blocks: CaseStudyBlock[]
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    num: 'PROJECT_01',
    title: 'This site.',
    tagline: 'The portfolio you\'re looking at, puzzle/challenge theme, masonry layout, and a snake game that collects skill names.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    role: 'Design + Dev',
    impact: 'Identity-first design',
    impactColor: 'pink',
    liveUrl: 'https://arya-maulana.vercel.app',
    repoUrl: 'https://github.com/AryaEm/ARYA-MAULANA',
    previewUrl: '/preview/portfolio-website.png',
    icon: 'ti-layout-dashboard',
    blocks: [
      {
        num: '01 / problem',
        title: 'Most portfolios look the same.',
        body: 'Hero image, about me, projects, contact. The structure is so familiar it becomes invisible. I wanted something that immediately communicates how I think, not just what I\'ve built.',
      },
      {
        num: '02 / solution',
        title: 'A portfolio that is itself a project.',
        body: 'Puzzle theme, masonry bento layout, conditional rendering with no page reloads. A snake game that collects skill names. Every design decision is intentional and explains itself.',
      },
      {
        num: '03 / what I learned',
        title: 'Positioning is a design decision.',
        body: 'What you show and how you show it is your pitch. The portfolio is the first project any client sees, it has to do the job of a cover letter without feeling like one.',
      },
    ],
  },
  {
    id: 'cashflo',
    num: 'PROJECT_02',
    title: 'Cashflo',
    tagline: 'A personal finance tracker, log income and expenses, get a clear financial picture at a glance.',
    tags: ['Next.js', 'Tailwind', 'Firebase'],
    role: 'Design + Dev',
    impact: 'Used daily since launch',
    impactColor: 'green',
    liveUrl: 'https://my-cashflo.vercel.app/',
    repoUrl: 'https://github.com/AryaEm/Cashflo',
    icon: 'ti-cash',
    blocks: [
      {
        num: '01 / problem',
        title: 'Most people don\'t know where their money goes.',
        body: 'Spending awareness is the first step to financial control, but most people track nothing. Existing apps are either too complex or too minimal to stick with.',
      },
      {
        num: '02 / solution',
        title: 'Clean dashboard, real numbers.',
        body: 'Log transactions quickly, see a running summary. Designed to be informative without being overwhelming, the dashboard shows what matters without noise.',
      },
      {
        num: '03 / technical',
        title: 'Numeric logic + scalable structure.',
        body: 'First project where I took data calculation logic seriously, grouping, summing, and displaying financial data cleanly. Built with room to grow into a full product.',
      },
    ],
  },
  {
    id: 'margin',
    num: 'PROJECT_03',
    title: 'Margin',
    tagline: 'Reading tracker meets mini book club, personal habit and social interaction in one platform.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
    role: 'Design + Dev',
    impact: '70% complete',
    impactColor: 'pink',
    liveUrl: 'https://margin-book.vercel.app',
    repoUrl: 'https://github.com/aryaEm/margin',
    previewUrl: '/preview/margin.png',
    icon: 'ti-book',
    blocks: [
      {
        num: '01 / problem',
        title: 'Reading tools are too personal or too social.',
        body: 'Existing trackers are isolated, good for logging, bad for sharing. Book clubs exist separately, with no integration into personal tracking habits.',
      },
      {
        num: '02 / solution',
        title: 'Both, in one place.',
        body: 'Track books, rate, add notes, then join a private club and discuss in threads. Personal habit + social layer, not forced to choose between them.',
      },
      {
        num: '03 / technical',
        title: 'Most complex data model I\'ve built.',
        body: 'Relational entities: users, books, clubs, threads. Used denormalized Firestore with batched writes for atomicity. Deepest architectural thinking in any of my projects so far.',
      },
    ],
  },
  {
    id: 'lunvera',
    num: 'PROJECT_04',
    title: 'Lunvera',
    tagline: 'A visual UI design education platform, learn through interactive before/after comparisons, not theory.',
    tags: ['Next.js', 'Tailwind'],
    role: 'Content + Design + Dev',
    impact: '6 topics · live platform',
    impactColor: 'green',
    liveUrl: 'https://lunveraa.vercel.app/',
    repoUrl: 'https://github.com/aryaEm/lunvera',
    previewUrl: '/preview/lunvera.png',
    icon: 'ti-palette',
    blocks: [
      {
        num: '01 / problem',
        title: 'Design education is too abstract.',
        body: 'Most resources explain design with rules and theory. Beginners need to see the difference, not read about it. "Use good typography" means nothing without a comparison.',
      },
      {
        num: '02 / solution',
        title: 'Show, don\'t tell.',
        body: 'Interactive slider comparisons, drag between generic and improved design side by side. Cover color, typography, layout, spacing, visual hierarchy, and beginner tips.',
      },
      {
        num: '03 / what I learned',
        title: 'Content IS the product.',
        body: 'First project where content architecture mattered as much as code. Had to think like a product designer, information hierarchy, learning flow, and progressive disclosure.',
      },
    ],
  },
  {
    id: 'moodly',
    num: 'PROJECT_05',
    title: 'Moodly',
    tagline: 'A daily mood journal built for low-friction reflection, pick a mood, add a note, see your history visually.',
    tags: ['Next.js', 'Tailwind', 'Firebase'],
    role: 'Design + Dev',
    impact: 'Live · publicly accessible',
    impactColor: 'green',
    liveUrl: 'https://mood-ly.vercel.app/',
    repoUrl: 'https://github.com/AryaEm/moodly',
    previewUrl: '/preview/moodly.png',
    icon: 'ti-mood-smile',
    blocks: [
      {
        num: '01 / problem',
        title: 'People want to reflect — but don\'t.',
        body: 'Most people want self-reflection, but existing tools are too heavy. Journaling feels like homework. The friction kills the habit before it starts.',
      },
      {
        num: '02 / solution',
        title: 'Make it take 10 seconds.',
        body: 'Pick a mood, add a short note, done. Zero friction — fast enough to do every day, meaningful enough to be worth it. History shown visually so patterns emerge naturally.',
      },
      {
        num: '03 / technical',
        title: 'Clean data for future analytics.',
        body: 'Used Firebase Firestore with a structured schema to support future analytics features. Real-time sync keeps the UI snappy without manual refreshes.',
      },
    ],
  },
]