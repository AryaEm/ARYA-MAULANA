export type Channel = {
  id: string
  label: string
  value: string
  icon: string
  href?: string
}

export const channels: Channel[] = [
  {
    id: 'email',
    label: 'EMAIL',
    value: 'ary4maulanaa@gmail.com',
    icon: 'ti-mail',
  },
  {
    id: 'linkedin',
    label: 'LINKEDIN',
    value: 'in/arya-maulana',
    icon: 'ti-brand-linkedin',
    href: 'https://linkedin.com/in/arya-maulana-86a087285',
  },
  {
    id: 'github',
    label: 'GITHUB',
    value: '@aryaem',
    icon: 'ti-brand-github',
    href: 'https://github.com/aryaem',
  },
]

export const contactMeta = {
  location: 'Indonesia',
  responseTime: 'under 24h',
}