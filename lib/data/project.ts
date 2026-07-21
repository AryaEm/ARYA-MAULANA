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
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    liveUrl: 'https://arya-maulana.vercel.app',
    repoUrl: 'https://github.com/AryaEm/ARYA-MAULANA',
    icon: 'ti-layout-dashboard',
    previewUrl: '/preview/portfolio-website.png',
    featured: false,
  },
  {
    id: 'project-02',
    num: 'PROJECT_02',
    title: 'Moodly',
    description: 'Mood journal harian, Pengguna pilih mood hari ini, tambah catatan singkat, dan lihat riwayat dalam bentuk visual.',
    tags: ['Next.js', 'Tailwind', 'Firebase'],
    liveUrl: 'https://mood-ly.vercel.app/',
    repoUrl: 'https://github.com/AryaEm/moodly',
    icon: 'ti-robot',
    previewUrl: '/preview/moodly.png',
    featured: false,
  },
  {
    id: 'project-03',
    num: 'PROJECT_03',
    title: 'Cashflo',
    description: 'Cashflo adalah alat digital yang dirancang untuk membantu Anda memantau  pemasukan dan pengeluaran keuangan.',
    tags: ['Next.js', 'Tailwind', 'Firebase'],
    liveUrl: 'https://my-cashflo.vercel.app/',
    repoUrl: 'https://github.com/AryaEm/Cashflo',
    icon: 'ti-robot',
    featured: false,
  },
  {
    id: 'project-04',
    num: 'PROJECT_04',
    title: 'Margin',
    description: 'Website Reading tracker + club buku mini, web ini buat catat buku yang sedang/sudah dibaca, beri rating & catatan. Bisa buat "club" privat bareng teman untuk baca bareng dan diskusi di thread.',
    tags: ['Next.js', 'Tailwind', 'Firebase'],
    liveUrl: 'https://margin-book.vercel.app',
    repoUrl: 'https://github.com/aryaEm/margin',
    previewUrl: '/preview/margin.png',
    featured: false,
    icon: 'ti-robot',
  },
  {
    id: 'project-05',
    num: 'PROJECT_05',
    title: 'Lunvera',
    description: 'Platform edukasi desain website untuk pemula yang ingin memahami dasar-dasar UI design. Website ini membantu pengguna belajar melalui perbandingan desain, penjelasan visual, dan tips praktis agar mampu membuat tampilan website yang lebih baik.',
    tags: ['Next.js', 'Tailwind'],
    liveUrl: 'https://lunveraa.vercel.app/',
    repoUrl: 'https://github.com/aryaEm/lunvera',
    previewUrl: '/preview/lunvera.png',
    featured: true,
    icon: 'ti-robot',
  },
]

export const featuredProject = projects.find((p) => p.featured)!
export const otherProjects = projects.filter((p) => !p.featured)