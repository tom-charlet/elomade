
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
            title: "Bonnet Ajouré",
            slug: "bonnet-ajoure",
            categories: [2],
            available: true,
            price: 20,
            minPrice: null,
            maxPrice: null,
            text: `Ce bonnet ajouré en crochet est réalisé entièrement à la main. Ses mailles ouvertes et sa forme souple en font un accessoire agréable à porter au quotidien ou pour compléter une tenue. Inspiré des années 70, il apporte une touche rétro tout en restant intemporel. Il peut être décliné avec la couleur et le motif de votre choix, selon vos envies.`,
            images: [
                { url: "/produits/bonnet-ajoure-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bonnet-ajoure-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bonnet-ajoure-3.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bonnet-ajoure-4.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bonnet-ajoure-5.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bonnet-ajoure-6.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
            seo: {}
        },
        {
            title: "Bandana",
            slug: "bandana",
            categories: [2],
            available: true,
            price: 18,
            minPrice: null,
            maxPrice: null,
            text: `Ce bandana en crochet est réalisé entièrement à la main, avec des mailles fines au style dentelle. Pensé comme un accessoire polyvalent, il se porte aussi bien dans les cheveux qu’autour de la taille pour compléter une tenue. Il est disponible dans la couleur de votre choix, selon vos envies.`,
            images: [
                { url: "/produits/bandana-3.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bandana-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bandana-1.webp", caption: "Photo : @iiunaaa" },
            ],
            seo: {}
        },
        {
            title: "Rose à nouer",
            slug: "rose-a-nouer",
            categories: [2],
            available: true,
            price: 10,
            minPrice: null,
            maxPrice: null,
            text: `Cette rose en crochet est réalisée entièrement à la main. Pensée comme un accessoire modulable, elle se porte aussi bien autour du cou, au poignet, à la ceinture ou intégrée à une tenue. Elle peut être déclinée dans toutes les couleurs, selon vos envies.`,
            images: [
                { url: "/produits/rose-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/rose-3.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/rose-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
        },
        {
            title: "Gilet Granny",
            slug: "gilet-granny",
            categories: [1],
            available: true,
            price: 125,
            minPrice: null,
            maxPrice: null,
            text: `Ce gilet en crochet est réalisé entièrement à la main à partir de granny squares assemblés. Sa coupe ample et sa maille généreuse en font une pièce confortable et enveloppante, idéale pour le quotidien. Il peut être décliné en plusieurs associations de couleurs ou en version unie, selon vos envies.`,
            images: [
                { url: "/produits/granny-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/granny-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/granny-3.webp" },
                { url: "/produits/granny-4.webp" },
            ],
            seo: {}
        },
        {
            title: "Pull Dreamy",
            slug: "pull-dreamy",
            categories: [1],
            available: true,
            price: 65,
            minPrice: null,
            maxPrice: null,
            text: `Ce pull en crochet est réalisé entièrement à la main. Sa coupe confortable et ses manches courtes en font une pièce agréable à porter au quotidien, quelle que soit la saison. Il peut être décliné en plusieurs associations de couleurs ou en version unie, selon vos envies.`,
            images: [
                { url: "/produits/dreamy-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/dreamy-3.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/dreamy-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
        },
        {
            title: "Foulard à nouer",
            slug: "foulard-a-nouer",
            categories: [2],
            available: true,
            price: 25,
            minPrice: null,
            maxPrice: null,
            text: `Ce foulard en crochet est réalisé entièrement à la main. Sa forme et sa texture en font un accessoire idéal à nouer sur les épaules pour finaliser une tenue, ou même dans les cheveux. Il se marie particulièrement bien avec un pull ou une chemise, et peut être réalisé uni ou dans plusieurs couleurs, selon vos envies.`,
            images: [
                { url: "/produits/foulard-a-nouer-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/foulard-a-nouer-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
            seo: {}
        },
        {
            title: "Foulard Simple",
            slug: "foulard-simple",
            categories: [2],
            available: true,
            price: 20,
            minPrice: null,
            maxPrice: null,
            text: `Ce foulard en crochet est réalisé entièrement à la main. Sa texture douce et légère en fait un accessoire élégant et agréable à porter, que ce soit dans les cheveux, sur les épaules ou autour du cou. Il est disponible dans la couleur de votre choix, selon vos envies.`,
            images: [
                { url: "/produits/foulard-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/foulard-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/foulard-3.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
            seo: {}
        },
        {
            title: "Foulard Fan",
            slug: "flouard-fan",
            categories: [2],
            available: true,
            price: 45,
            minPrice: null,
            maxPrice: null,
            text: `Ce foulard en crochet est réalisé entièrement à la main, avec des mailles fines au style dentelle. Élégant et léger, il se porte autour du cou, sur les épaules ou dans les cheveux pour compléter une tenue. Il est disponible dans la couleur de votre choix, selon vos envies.`,
            images: [
                { url: "/produits/foulard-fan-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/foulard-fan-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/foulard-fan-3.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
            seo: {}
        },
        {
            title: "Béguin",
            slug: "beguin",
            categories: [2],
            available: true,
            price: 25,
            minPrice: null,
            maxPrice: null,
            text: `Ce béguin en crochet est réalisé entièrement à la main. Sa forme délicate et sa finition à nouer au cou en font un accessoire mignon et au charme vintage, idéal pour compléter une tenue. Il est disponible dans la couleur de votre choix, selon vos envies.`,
            images: [
                { url: "/produits/beguin-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/beguin-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
            seo: {}
        },
        {
            title: "Bonnet oreilles de chat",
            slug: "bonnet-oreilles-de-chat",
            categories: [2],
            available: true,
            price: 30,
            minPrice: null,
            maxPrice: null,
            text: `Ce bonnet en crochet est réalisé entièrement à la main. Sa forme, avec les oreilles de chat directement créées dans la maille, en fait un accessoire confortable et original. Il peut être réalisé uni ou dans plusieurs couleurs, selon vos envies.`,
            images: [
                { url: "/produits/bonnet-oreilles-de-chat-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/bonnet-oreilles-de-chat-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
            ],
            seo: {}
        },
        {
            title: "Beanies",
            slug: "beanies",
            categories: [2],
            available: true,
            price: 30,
            minPrice: null,
            maxPrice: null,
            text: `Ces bonnets unisexe, faits main en crochet, sont faciles à assortir et apportent une touche colorée à toutes vos tenues. Les jeux de rayures et d’associations de couleurs rendent chaque modèle unique. Il peut être décliné en plusieurs associations de couleurs ou en version unie, selon vos envies.`,
            images: [
                { url: "/produits/beanie-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/beanie-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/beanie-3.webp" }
            ],
            seo: {}
        },
        {
            title: "Short",
            slug: "short",
            categories: [1],
            available: true,
            price: 55,
            minPrice: null,
            maxPrice: null,
            text: `Ce short en crochet est réalisé entièrement à la main. Sa coupe confortable est pensée avec un revers modulable, permettant de le porter en taille haute ou de le replier pour un effet taille mi-basse. Il est disponible en version rayée ou uni, selon vos envies.`,
            images: [
                { url: "/produits/short-1.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/short-2.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/short-3.webp", caption: "Photo : @iiunaaa, Modèle : @leanepipart" },
                { url: "/produits/short-4.webp" },
            ],
            seo: {}
        },
        {
            title: "Poncho",
            slug: "poncho",
            categories: [1],
            available: true,
            price: 55,
            minPrice: null,
            maxPrice: null,
            text: `Ce poncho en crochet est réalisé entièrement à la main. Sa maille fine et délicate en fait un accessoire léger et élégant, idéal pour compléter toutes les tenues. Il peut être décliné en plusieurs associations de couleurs ou en version unie, selon vos envies.`,
            images: [
                { url: "/produits/poncho-1.webp" },
                { url: "/produits/poncho-2.webp" },
                { url: "/produits/poncho-3.webp" },
            ],
            seo: {}
        },
        {
            title: "Le Gilet",
            slug: "le-gilet",
            categories: [1],
            available: true,
            price: 90,
            minPrice: null,
            maxPrice: null,
            text: `Ce gilet en crochet est réalisé entièrement à la main, avec soin et précision. Sa coupe confortable et ses finitions soignées en font une pièce facile à porter au quotidien. Il se superpose aisément à toutes les tenues pour apporter une touche artisanale.\n\n- Matières synthétiques : 90,00 €\n- Matières nobles : 110,00 €
            `,
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
            title: "La Jupette",
            slug: "la-jupette",
            categories: [1],
            available: true,
            price: 65,
            minPrice: null,
            maxPrice: null,
            text: `La Jupette est une pièce légère et structurée, entièrement crochetée à la main selon un patron original Elomade. Sa forme évasée et ses jeux de points ajourés lui donnent du mouvement et de la douceur, tout en conservant une belle tenue. Pensée pour l'été, elle se porte taille haute et se combine facilement avec un top ajusté ou un gilet court ou sur un maillot de bain.`,
            images: [
                { url: "/produits/la-jupette.webp", alt: "La Jupette" }
            ],
            seo: {}
        },
        {
            title: "Le Big pouf",
            slug: "le-big-pouf",
            categories: [3],
            available: false,
            price: 150,
            minPrice: null,
            maxPrice: null,
            text: `Pièce emblématique de la marque Elomade, ce grand pouf en crochet allie confort, style et savoir-faire artisanal. Doux au toucher et généreux en volume, il trouve facilement sa place dans un intérieur chaleureux, en assise d'appoint, repose-pieds ou simple objet déco. Une pièce forte, pensée pour durer.`,
            images: [
                { url: "/produits/le-big-pouf.webp", alt: "Le Big pouf" },
                { url: "/produits/le-big-pouf-2.webp", alt: "Le Big pouf - vue 2" },
            ],
            seo: {}
        },
        {
            title: "Mon Chouchou",
            slug: "mon-chouchou",
            categories: [2],
            available: true,
            price: 15,
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
            title: "Le Claudine",
            slug: "le-claudine",
            categories: [2],
            available: true,
            price: 30,
            minPrice: null,
            maxPrice: null,
            text: `Accessoire délicat et intemporel, Le Claudine est un col amovible crocheté à la main avec précision. Il se noue simplement autour du cou pour transformer un pull, une robe ou un t-shirt en une pièce habillée et singulière. Léger, facile à porter, il ajoute une touche de caractère tout en restant adorable.`,
            images: [
                { url: "/produits/le-col.webp", alt: "Le Claudine" }
            ],
            seo: {}
        },
        {
            title: "Le Top Rosa",
            slug: "le-top-rosa",
            categories: [1],
            available: true,
            price: 45,
            minPrice: null,
            maxPrice: null,
            text: `Avec sa coupe courte et ajustée, le top Rosa est une pièce élégante et minimaliste, entièrement crochetée à la main. Son détail signature : une ou deux fleurs en relief qui ferment délicatement le devant, pour une touche de romantisme. Léger, confortable et facile à porter, il se marie aussi bien avec un jean qu'une jupe taille haute.`,
            images: [
                { url: "/produits/le-top-rosa.webp", alt: "Le Top Rosa" },
                { url: "/produits/le-top-rosa-2.webp", alt: "Le Top Rosa - vue 2" }
            ],
            seo: {}
        },
    ]
}