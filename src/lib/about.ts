export const aboutData = {
  name: 'Arya Maulana',
  initials: 'AM',
  role: 'Web Developer',
  location: 'Malang, Indonesia',
  bio: [
    { text: "I'm a developer based in " },
    { text: 'Indonesia', em: true },
    { text: ' who loves turning complex problems into elegant, purposeful interfaces. I think in systems, build with intention, and obsess over the ' },
    { text: "details nobody else notices.", em: true },
  ],
  traits: [
    { icon: 'ti-puzzle', title: 'Problem-first', sub: 'understand before building' },
    { icon: 'ti-terminal', title: 'Clean code', sub: 'readable over clever' },
    { icon: 'ti-palette', title: 'Design-aware', sub: 'pixel precision matters' },
    { icon: 'ti-rocket', title: 'Ship it', sub: 'done beats perfect' },
  ],
  socials: [
    { icon: 'ti-brand-github', label: 'GitHub', href: 'https://github.com/aryaem' },
    { icon: 'ti-brand-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/arya-maulana-86a087285/' },
    { icon: 'ti-brand-instagram', label: 'Instagram', href: 'https://instagram.com/devby.em' },
  ],
  cvUrl: '/CV-AryaMaulana.pdf',
}

export type TimelineItem = {
  year: string
  role: string
  place: string
  tags: string[]
  current: boolean
}

export const experience: TimelineItem[] = [
  {
    year: 'June 2025 — September 2025',
    role: 'Graphic Desain',
    place: 'Akademi Blayu FC',
    tags: ['Figma', 'Canva'],
    current: false,
  },
  {
    year: '2025 — Now',
    role: 'Fresh Graduate',
    place: 'Info loker lek',
    tags: ['Next.js', 'Typescript', 'tailwind', 'Firebase'],
    current: true,
  },
]

export const education: TimelineItem[] = [
  {
    year: '2023 — 2026',
    role: 'Rekaya Perangkat Lunak',
    place: 'SMK Telkom Malang',
    tags: ['Frontend', 'UI/UX'],
    current: false,
  },
  {
    year: '2016 — Now',
    role: 'Teknik Informatika',
    place: 'Politeknik Negeri Malang',
    tags: ['Teknologi Informasi', 'Web Developer'],
    current: true,
  },
]


export const STACK_GROUPS = [
  {
    label: 'FRONTEND',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'BACKEND & DB',
    items: ['Firebase', 'Firestore', 'Node.js'],
  },
  {
    label: 'TOOLS',
    items: ['Git', 'Figma', 'VS Code'],
  },
]

export const MINDSET_CARDS = [
  { icon: 'ti-code', label: 'Clean structure' },
  { icon: 'ti-palette', label: 'Distinctive design' },
  { icon: 'ti-users', label: 'Real user needs' },
  { icon: 'ti-trending-up', label: 'Built to scale' },
]

export const PERSPECTIVE_ITEMS = {
  dev: [
    { icon: 'ti-code', text: 'Clean, readable, scalable code' },
    { icon: 'ti-layers', text: 'Architecture with a direction' },
    { icon: 'ti-refresh', text: 'Reusable components, maintainable systems' },
  ],
  user: [
    { icon: 'ti-hand-click', text: 'Intuitive, no explanation needed' },
    { icon: 'ti-sparkles', text: 'Design that has character, not generic' },
    { icon: 'ti-heart', text: 'Feels good to use in the real world' },
  ],
}