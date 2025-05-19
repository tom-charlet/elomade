import dynamic from 'next/dynamic'

const Products = dynamic(() => import('../../components/Products'));
const Contact = dynamic(() => import('../../components/Contact'));

export default async function ProductsPage() {

    return <>
        <Products title="Les créations" grid />
        <Contact />
    </>
}

export async function generateMetadata() {

    return {
        title: "Les créations - Elomade"
    }
}
