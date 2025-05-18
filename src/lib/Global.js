import { Products, Categories } from './Data';

export async function Data() {
    const products = Products()
    const categories = Categories()

    return {
        products: products?.map(product => {
            return {
                ...product,
                categories: product.categories?.map(id => {
                    return categories?.find(e => e.id == id) ?? null
                }) ?? []
            }
        }),
        categories
    }
}
