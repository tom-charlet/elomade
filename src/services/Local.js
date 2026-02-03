import { Products, Categories } from "@/lib/Data"

export const getProduct = (slug) => {
    const products = Products()
    const categories = Categories()

    if (slug && products?.length > 0) {
        let product = products?.find(e => e?.slug == slug)

        if (product) return {
            ...product,
            images: product?.images?.map((item, index) => {
                return {
                    ...item,
                    alt: item.alt ?? `${product.title} ${index + 1}`
                }
            }),
            categories: product.categories?.map(id => {
                return categories?.find(e => e.id == id) ?? null
            }) ?? []
        }
    }
    else return null
}