import dynamic from 'next/dynamic'

const NotFound = dynamic(() => import('../components/NotFound'))

const notFound = () => {

    return <NotFound />
}

export default notFound

export async function generateMetadata() {

    return {
        title: "Erreur 404 - Elomade",
        robots: {
            index: false,
            follox: false
        }
    }
}