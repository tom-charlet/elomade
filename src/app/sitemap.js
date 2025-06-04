import { Products } from '../lib/Data';

export default async function sitemap() {
    const products = Products();

    return [
        {
            url: "https://elomade.fr",
            priority: 1,
        },
        {
            url: "https://elomade.fr/creations",
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        ...products.map(item => {
            return {
                url: 'https://elomade.fr/creations/' + item.slug,
                lastModified: "2025-06-04",
                priority: 0.5
            }
        }),
        {
            url: "https://elomade.fr/mentions-legales",
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        {
            url: "https://elomade.fr/politique-de-confidentialite",
            changeFrequency: 'yearly',
            priority: 0.2,
        }
    ]
}
