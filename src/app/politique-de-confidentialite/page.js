import dynamic from 'next/dynamic'
import Seo from '@/lib/Seo'

const Politique = dynamic(() => import('../../components/Politique'));

export default async function PolitiquesDeConfidentialite() {

    return <>
        <Politique />
    </>
}

export async function generateMetadata() {
    const seo = Seo()

    return {
        ...seo,
        title: "Politiques de confidentialité - Elomade",
        robots: {
            index: false,
            follow: false
        }
    }
}
