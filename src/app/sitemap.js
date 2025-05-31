// import { Data as Products } from '../lib/Products';

export default async function sitemap() {
    // const products = await Products();

    return [
        {
            url: process.env.NEXT_PUBLIC_URL,
            priority: 1,
        },
        // {
        //     url: process.env.NEXT_PUBLIC_URL + "/page",
        //     changeFrequency: 'yearly',
        //     priority: 0.8,
        // },
        // ...posts.map(item => {
        //     return {
        //         url: process.env.NEXT_PUBLIC_URL + '/posts/' + item.slug,
        //         lastModified: item.updatedAt
        //     }
        // })
        // {
        //     url: process.env.NEXT_PUBLIC_URL + "/mentions-legales",
        //     changeFrequency: 'yearly',
        //     priority: 0.2,
        // },
        // {
        //     url: process.env.NEXT_PUBLIC_URL + "/politique-de-confidentialite",
        //     changeFrequency: 'yearly',
        //     priority: 0.2,
        // }
    ]
}
