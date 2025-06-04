import dynamic from 'next/dynamic'
import Seo from '@/lib/Seo'

const Products = dynamic(() => import('../../components/Products'));
const Contact = dynamic(() => import('../../components/Contact'));

export default async function ProductsPage() {

    return <>
        <Products title="Les créations" grid />
        <Contact />
    </>
}

export async function generateMetadata() {
    const seo = Seo()

    return {
        ...seo,
        title: "Les créations - Elomade"
    }
}
