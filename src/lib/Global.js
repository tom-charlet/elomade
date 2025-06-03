import { Products, Categories } from './Data';

export async function Data() {
    const products = Products()
    const categories = Categories()

    return {
        products: products?.map((product, id) => {
            return {
                id: id + 1,
                ...product,
                categories: product.categories?.map(id => {
                    return categories?.find(e => e.id == id) ?? null
                }) ?? []
            }
        }),
        categories
    }
}
