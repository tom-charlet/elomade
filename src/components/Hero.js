import dynamic from 'next/dynamic'
import Image from 'next/image'

const Heading = dynamic(() => import('./Heading'))
const Button = dynamic(() => import('./Button'))

const Hero = () => {
    return <section className='relative pt-28 min-h-svh flex overflow-hidden'>
        <div className='flex flex-col items-start responsive-container pt-6 pb-12 md:py-[10svh] xl:py-[15svh]'>
            <Heading level="1" className="mb-6">Toutes vos envies <br />sur commande !</Heading>
            <Heading level="3" tag="h2" className='mb-8'>Créations en crochet sur mesure,<br />réalisées avec amour et passion.</Heading>
            <Button>Découvrir l&apos;univers</Button>
        </div>
        <div className='absolute top-0 left-0 w-full min-h-full -z-10 flex items-bottom justify-start h-full md:h-[calc(100%+8%)]'>
            <Image src="/hero.webp" alt="créations en crochet" width={0} height={0} sizes='100vw' className='w-full h-full object-cover md:scale-140 xl:scale-[1.15] md:-translate-y-[5%] xl:-translate-y-[12%] md:translate-x-[20%] xl:translate-x-[6%] ' />
        </div>
    </section>
}

export default Hero