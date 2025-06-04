
export function Categories() {
    return [
        { id: 1, title: "Prêt à porter" },
        { id: 2, title: "Accessoires" },
        { id: 3, title: "Maison" },
    ]
}

export function Products() {
    return [
        {
            title: "Le Gilet",
            slug: "le-gilet",
            categories: [1],
            available: true,
            price: 70,
            text: `Ce gilet en crochet est réalisé entièrement à la main, avec soin et précision. Sa coupe confortable et ses finitions soignées en font une pièce facile à porter au quotidien. Il se superpose aisément à toutes les tenues pour apporter une touche artisanale.`,
            images: [
                { url: "/produits/le-gilet-vert-blanc.webp", alt: "Le Gilet vert et blanc" },
                { url: "/produits/le-gilet-vert-blanc-2.webp", alt: "Le Gilet vert et blanc - vue 2" },
                { url: "/produits/le-gilet-vert.webp", alt: "Le Gilet vert" },
                { url: "/produits/le-gilet-bleu-blanc.webp", alt: "Le Gilet bleu et blanc" },
                { url: "/produits/le-gilet-bleu-blanc-2.webp", alt: "Le Gilet bleu et blanc - vue 2" },
                { url: "/produits/le-gilet-rose.webp", alt: "Le Gilet rose" },
            ],
            seo: {}
        },
        {
            title: "Le Big pouf",
            slug: "le-big-pouf",
            categories: [3],
            available: false,
            price: 100,
            minPrice: null,
            maxPrice: null,
            text: `Pièce emblématique de la marque Elomade, ce grand pouf en crochet allie confort, style et savoir-faire artisanal. Doux au toucher et généreux en volume, il trouve facilement sa place dans un intérieur chaleureux, en assise d'appoint, repose-pieds ou simple objet déco. Une pièce forte, pensée pour durer.`,
            images: null,
            seo: {}
        },
        {
            title: "Mon Chouchou",
            slug: "mon-chouchou",
            categories: [1, 2],
            available: true,
            price: 13,
            minPrice: null,
            maxPrice: null,
            text: `Le chouchou en crochet apporte une touche originale et texturée à toutes les coiffures. Volumineux sans être lourd, il s'adapte aussi bien aux cheveux sur un chignon, qu'un poignet. Un accessoire à la fois pratique et décoratif, qui mêle confort, style et savoir-faire artisanal.`,
            images: [
                { url: "/produits/mon-chouchou-2.webp", alt: "Mon Chouchou - vue 2" },
                { url: "/produits/mon-chouchou.webp", alt: "Mon Chouchou" }
            ],
            seo: {}
        },
        {
            title: "Le Clodine",
            slug: "le-clodine",
            categories: [1, 2],
            available: true,
            price: 20,
            minPrice: null,
            maxPrice: null,
            text: `Accessoire délicat et intemporel, Le Claudine est un col amovible crocheté à la main avec précision. Il se noue simplement autour du cou pour transformer un pull, une robe ou un t-shirt en une pièce habillée et singulière. Léger, facile à porter, il ajoute une touche de caractère tout en restant adorable.`,
            images: [
                { url: "/produits/le-col.webp", alt: "Le Clodine" }
            ],
            seo: {}
        },
        {
            title: "Le Top Rosa",
            slug: "le-top-rosa",
            categories: [1],
            available: true,
            price: 35,
            minPrice: null,
            maxPrice: null,
            text: `Avec sa coupe courte et ajustée, le top Rosa est une pièce élégante et minimaliste, entièrement crochetée à la main. Son détail signature : une ou deux fleurs en relief qui ferment délicatement le devant, pour une touche de romantisme. Léger, confortable et facile à porter, il se marie aussi bien avec un jean qu'une jupe taille haute.`,
            images: [
                { url: "/produits/le-top-rosa.webp", alt: "Le Top Rosa" },
                { url: "/produits/le-top-rosa-2.webp", alt: "Le Top Rosa - vue 2" }
            ],
            seo: {}
        },
        {
            title: "La Jupette",
            slug: "la-jupette",
            categories: [1],
            available: true,
            price: 65,
            minPrice: null,
            maxPrice: null,
            text: `La Jupette est une pièce légère et structurée, entièrement crochetée à la main selon un patron original Elomade. Sa forme évasée et ses jeux de points ajourés lui donnent du mouvement et de la douceur, tout en conservant une belle tenue. Pensée pour l'été, elle se porte taille haute et se combine facilement avec un top ajusté ou un gilet court ou sur un maillot de bain.`,
            images: [
            ],
            seo: {}
        },
    ]
}