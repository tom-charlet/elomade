import dynamic from 'next/dynamic'

const Politique = dynamic(() => import('../../components/Politique'));

export default async function PolitiquesDeConfidentialite() {

    return <>
        <Politique />
    </>
}

export async function generateMetadata() {

    return {
        title: "Politiques de confidentialité - Elomade",
        robots: {
            index: false,
            follox: false
        }
    }
}
