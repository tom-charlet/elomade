import dynamic from 'next/dynamic'
import Seo from '@/lib/Seo'

const Legals = dynamic(() => import('../../components/Legals'));

export default async function MentionsLegales() {

    return <>
        <Legals />
    </>
}

export async function generateMetadata() {
    const seo = Seo()

    return {
        ...seo,
        title: "Mentions légales - Elomade",
        robots: {
            index: false,
            follow: false
        }
    }
}