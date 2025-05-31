import dynamic from 'next/dynamic'

const Building = dynamic(() => import('../components/Building'))

export default function Home() {
  return <Building />
}

export async function generateMetadata() {
  return {
    robots: {
      index: true,
      follow: true,
    },
    title: 'Elomade - Crochet artisanales à Rouen',
    description: 'Découvrez Elomade, une marque de crochet artisanal qui remet la maille au goût du jour. Pièces uniques, durables et inspirées de la mode actuelle.',
    keywords: [
      'crochet fait main',
      'mode durable',
      'pièces en crochet',
      'créations artisanales Rouen',
      'slow fashion',
      'vêtements crochet',
      'mode éthique',
      'marque de crochet',
      'crochet moderne',
      'Elomade',
    ],
    authors: [{ name: 'Elomade' }],
    openGraph: {
      title: 'Elomade - Crochet artisanales à Rouen',
      description: 'Découvrez Elomade, une marque de crochet artisanal qui remet la maille au goût du jour. Pièces uniques, durables et inspirées de la mode actuelle.',
      url: 'https://elomade.fr',
      siteName: 'Elomade',
      images: [
        {
          url: 'https://elomade.fr/hero.webp',
          width: 1200,
          height: 630,
          alt: 'Visuel Elomade - Crochet artisanales',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Elomade - Crochet artisanales à Rouen',
      description: 'Découvrez Elomade, une marque de crochet artisanal qui remet la maille au goût du jour. Pièces uniques, durables et inspirées de la mode actuelle.',
      images: ['https://elomade.fr/hero.webp'],
    },
    icons: {
      icon: '/favicon.ico',
    },
  }
}