
export default function Seo() {
    return {
        robots: {
            index: true,
            follow: true,
        },
        title: 'Crochet fait main à Rouen - Elomade',
        description: 'Elomade, une marque de crochet artisanal qui remet la maille au goût du jour. Pièces uniques, durables et inspirées de la mode actuelle.',
        keywords: [
            'crochet fait main',
            'mode durable',
            'pièces en crochet',
            'créations artisanales Rouen',
            'vêtements crochet',
            'mode éthique',
            'marque de crochet',
            'crochet moderne',
            'Elomade',
            'Eloise Dron',
            'made in france'
        ],
        url: "https://elomade.fr/share.png",
        authors: [{ name: 'EloÏse Dron' }],
        openGraph: {
            title: 'Elomade - Crochet fait main à Rouen',
            description: 'Elomade, une marque de crochet artisanal qui remet la maille au goût du jour. Pièces uniques, durables et inspirées de la mode actuelle.',
            url: 'https://elomade.fr',
            siteName: 'Elomade',
            images: [
                {
                    url: 'https://elomade.fr/share.png',
                    width: 1200,
                    height: 630,
                    alt: 'Visuel Elomade - Crochet fait main',
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Elomade - Crochet fait main à Rouen',
            description: 'Elomade, une marque de crochet artisanal qui remet la maille au goût du jour. Pièces uniques, durables et inspirées de la mode actuelle.',
            images: ['https://elomade.fr/share.png'],
        },
        icons: {
            icon: '/favicon.ico',
        },
    }
}