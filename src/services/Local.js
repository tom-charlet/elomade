import { Products, Categories } from "@/lib/Data"

export const getProduct = (slug) => {
    const products = Products()
    const categories = Categories()

    if (slug && products?.length > 0) {
        let product = products?.find(e => e?.slug == slug)

        if (product) return {
            ...product,
            categories: product.categories?.map(id => {
                return categories?.find(e => e.id == id) ?? null
            }) ?? []
        }
    }
    else return null
}