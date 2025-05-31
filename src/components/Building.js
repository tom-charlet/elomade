import dynamic from 'next/dynamic'

const Heading = dynamic(() => import('./Heading'))
const Button = dynamic(() => import('./Button'))
const Animation = dynamic(() => import('../components/Animation'))

const Building = () => {
    return <section className='bg-beige-100 min-h-[calc(100svh-80px)] flex items-center justify-center px-6 pt-32 pb-16 md:pt-[120px] md:pb-20'>
        <Animation tag="section" type={["fade", "move"]} direction='up' stagger={0.1} value={{ move: [50, 0] }} transition={{ duration: 1.5 }} className='flex justify-center flex-col gap-6 max-w-[640px]'>
            <Heading level="2">Site en construction</Heading>
            <Heading level="3">Le site <strong className='text-red-700'>elomade.fr</strong> est actuellement en cours de création. <br className='hidden md:block' />Revenez très prochainement pour découvrir des pièces en crochet uniques !</Heading>
            <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-3 mt-2'>
                <div className='flex items-center gap-3 w-full'>
                    <Button href="https://www.tiktok.com/@elomade.it" target="_blank" icon="tiktok" variante="stroke-red" className="basis-full">elomade.it</Button>
                    <Button href="https://www.instagram.com/elomadeit" target="_blank" icon="instagram" variante="stroke-red" className="basis-full">elomadeit</Button>
                </div>
                <Button icon="email" variante="fill-red" href="mailto:contact@elomade.fr" className="basis-full" target="_blank">contact@elomade.fr</Button>
            </div>
        </Animation>
    </section>
}

export default Building