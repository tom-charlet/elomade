
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
            title: "Le Big Pouf",
            slug: "le-big-pouf",
            categories: [2, 3],
            price: null,
            minPrice: 40,
            maxPrice: 60,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            images: [
                { url: "/hero.webp", alt: "Le big pouf" },
                { url: "/hero.webp", alt: "Le big pouf" },
                { url: null, alt: "Le big pouf" }
            ],
            seo: {
                title: "Le big pouf"
            }
        },
        {
            title: "Le Big Pouf 2",
            slug: "le-big-pouf-2",
            categories: [1, 3],
            price: null,
            minPrice: 40,
            maxPrice: null,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            images: [
                { url: "/hero.webp", alt: "Le big pouf" },
            ],
            seo: {
                title: "Le big pouf 2"
            }
        },
        {
            title: null,
            slug: null,
            categories: null,
            price: null,
            minPrice: null,
            maxPrice: null,
            text: null,
            images: null
        },
        {
            title: "Le Big Pouf 3",
            slug: "le-big-pouf-3",
            categories: [1, 3],
            price: 40,
            minPrice: null,
            maxPrice: null,
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            images: [
                { url: "/hero.webp", alt: "Le big pouf" },
            ],
            seo: {
                title: "Le big pouf 3"
            }
        },
    ]
}