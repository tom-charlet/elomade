import dynamic from 'next/dynamic'
import Image from 'next/image'

const Heading = dynamic(() => import('./Heading'))
const Button = dynamic(() => import('./Button'))

const Hero = () => {
    return <section className='relative lg:pt-28 lg:min-h-svh flex flex-col overflow-hidden bg-beige-300 lg:bg-beige-100'>
        <div className='flex flex-col lg:items-start responsive-container pt-6 pb-16 lg:pb-12 lg:py-[10svh] xl:py-[15svh] z-20'>
            <Heading level="1" className="mb-4 lg:mb-6">Toutes vos envies <br className='hidden lg:block' />sur commande !</Heading>
            <Heading level="3" tag="h2" className='mb-8 font-normal '>Créations en crochet sur mesure,<br className='hidden lg:block' /> réalisées avec amour et passion.</Heading>
            <Button icon="chevron-left" reverse className="md:self-start" href="#les-creations">Découvrir l&apos;univers</Button>
        </div>
        <div className='min-h-[300px] aspect-[16/15] md:aspect-[16/12] lg:apect-auto lg:h-full w-full relative lg:absolute lg:top-0 lg:left-0 -order-1 flex items-end justify-center overflow-hidden bg-beige-100 gradient-hero after:content-[""] after:absolute after:inset-0 after:z-10 z-10 lg:after:hidden'>
            <div className='aspect-[16/10] lg:aspect-[16/8] h-full lg:w-full relative -translate-x-[16vw] md:scale-[1.2] md:-translate-x-[13.5vw] md:-translate-y-[8%] lg:translate-y-[2%] lg:scale-[1.1] lg:translate-x-[4vw] xl:scale-[1.128] xl:translate-x-[6vw] xl:-translate-y-[6%] 2xl:scale-[1.15] 2xl:translate-x-[5vw] 2xl:-translate-y-[7%]'>
                <Image src="/hero.webp" alt="créations en crochet" width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
            </div>
        </div>
    </section>
}

export default Hero