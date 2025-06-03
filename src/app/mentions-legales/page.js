import dynamic from 'next/dynamic'

const Legals = dynamic(() => import('../../components/Legals'));

export default async function MentionsLegales() {

    return <>
        <Legals />
    </>
}

export async function generateMetadata() {

    return {
        title: "Mentions légales - Elomade",
        robots: {
            index: false,
            follox: false
        }
    }
}