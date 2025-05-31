import dynamic from 'next/dynamic'

const Heading = dynamic(() => import('../components/Heading'))
const Button = dynamic(() => import('../components/Button'))

const notFound = () => {
    return <section className='min-h-[calc(100svh-80px)] flex flex-col items-center justify-center px-6 pt-32 pb-16 md:py-0'>
        <Heading level="1" className="mb-2">Erreur 404</Heading>
        <Heading level="3" className="mb-8">Oups.. Il n&apos;y a rien à voir ici</Heading>
        <Button href="/">Retourner à l&apos;accueil</Button>
    </section>
}

export default notFound