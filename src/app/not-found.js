import dynamic from 'next/dynamic'
import Seo from '@/lib/Seo'

const NotFound = dynamic(() => import('../components/NotFound'))

const notFound = () => {
    
    return <NotFound />
}

export default notFound

export async function generateMetadata() {
    const seo = Seo()

    return {
        ...seo,
        title: "Erreur 404 - Elomade",
        robots: {
            index: false,
            follow: false
        }
    }
}