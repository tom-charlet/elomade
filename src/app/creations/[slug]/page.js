import dynamic from 'next/dynamic'
import { getProduct } from '../../../services/Local'
import { notFound } from 'next/navigation';
import Seo from '@/lib/Seo'

const Product = dynamic(() => import('../../../components/Product'));
const Contact = dynamic(() => import('../../../components/Contact'));
const Products = dynamic(() => import('../../../components/Products'));

export default async function ProductPage({ params }) {
    const { slug } = await params
    const data = getProduct(slug)

    if (!data) notFound()

    return <>
        <Product {...data} />
        <Products slug={slug} title="Les autres créations" />
        <Contact />
    </>
}

export async function generateMetadata({ params }) {
    const seo = Seo()
    const { slug } = await params
    const product = getProduct(slug)

    return {
        ...seo,
        title: product.title + " - Elomade",
    }
}
