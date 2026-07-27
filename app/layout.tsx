import type { Metadata } from 'next'
import '@/app/globals.css'

const BASE_URL = 'https://aryaem.vercel.app/'

export const metadata: Metadata = {
  title: {
    default: '>_Arya Maulana',
    template: '%s | Arya Maulana',
  },
  description:
    'Portfolio of Arya Maulana (aryaem) — Web Developer from Malang, Indonesia. Building purposeful web interfaces with Next.js, TypeScript, and Tailwind.',

  keywords: [
    'Arya Maulana',
    'arya maulana',
    'aryamaulana',
    'AryaMaulana',
    'aryaem',
    'aryaem_',
    'aryaaem',
    'aryaaem_',
    'aryaa.em',

    'aryaem portfolio',
    'aryaem web developer',
    'aryaem indonesia',
    'AryaEm GitHub',
    'arya maulana developer',
    'arya maulana portfolio',

    'frontend developer malang',
    'web developer indonesia',
    'web developer malang',
    'arya maulana next.js',

    'next js portfolio example',
    'modern web developer portfolio',
  ],

  alternates: {
    canonical: BASE_URL,
  },

  authors: [{ name: 'Arya Maulana', url: BASE_URL }],
  creator: 'Arya Maulana',

  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Arya Maulana, Web Developer',
    description:
      'Portfolio of Arya Maulana (aryaem), Web Developer from Malang, Indonesia.',
    siteName: 'Arya Maulana Portfolio',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Arya Maulana, Web Developer',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Arya Maulana, Web Developer',
    description:
      'Portfolio of Arya Maulana (aryaem) — Web Developer from Malang, Indonesia.',
    images: [`${BASE_URL}/og-image.png`],
    creator: '@aryaem',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Arya Maulana',
              alternateName: ['aryaem', 'aryaaem', 'aryaa.em', 'arya', 'Arya', 'AryaEm'],
              url: BASE_URL,
              jobTitle: 'Web Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance',
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Malang',
                addressCountry: 'ID',
              },
              sameAs: [
                'https://github.com/AryaEm',
                'https://linkedin.com/in/arya-maulana-86a087285',
                'https://instagram.com/aryaa.em',
                'https://instagram.com/devby.em',
              ],
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}