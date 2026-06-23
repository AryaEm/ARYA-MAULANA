export type Project = {
  id: string
  num: string
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
  icon?: string
  previewUrl?: string
}

export const projects: Project[] = [
  {
    id: 'project-01',
    num: 'PROJECT_01',
    title: 'Personal Website',
    description:
      'Yes, this is the website you’re currently accessing—a collection of projects I’ve built, problems I’ve solved, and a direct line if you want to work together.',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    liveUrl: 'https://arya-maulana.vercel.app',
    repoUrl: 'https://github.com/AryaEm/ARYA-MAULANA',
    featured: true,
    icon: 'ti-layout-dashboard',
    previewUrl: '/preview/portfolio-website.png',
  },
  {
    id: 'project-02',
    num: 'PROJECT_02',
    title: '-',
    description: '-',
    tags: ['1', '2'],
    liveUrl: '/',
    repoUrl: '/',
    icon: 'ti-robot',
  },
  {
    id: 'project-03',
    num: 'PROJECT_03',
    title: '-',
    description: '-',
    tags: ['1', '2'],
    liveUrl: '/',
    repoUrl: '/',
    icon: 'ti-robot',
  },
  {
    id: 'project-04',
    num: 'PROJECT_04',
    title: '-',
    description: '-',
    tags: ['1', '2', '3'],
    repoUrl: '/',
    // icon: 'ti-api',
    icon: 'ti-robot',
  },
]

export const featuredProject = projects.find((p) => p.featured)!
export const otherProjects = projects.filter((p) => !p.featured)