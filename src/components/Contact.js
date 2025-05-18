import dynamic from 'next/dynamic'
import Image from 'next/image'

const Heading = dynamic(() => import('../components/Heading'))
const Button = dynamic(() => import('../components/Button'))

const Contact = () => {
    return <section id="me-contacter" className='bg-red-800 py-16 lg:py-[120px]'>
        <div className='responsive-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 text-beige-300'>
            <div className='flex flex-col items-start'>
                <Heading level="2" className="mb-6">Me contacter</Heading>
                <p className='mb-10 text-balance'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</p>
                <div className='flex flex-col md:flex-row md:items-center gap-6'>
                    <div className='flex items-center gap-3'>
                        <Button href="https://www.tiktok.com/@elomade.it" target="_blank" icon="tiktok" variante="fill-beige" />
                        <Button href="https://www.instagram.com/elomadeit" target="_blank" icon="instagram" variante="fill-beige" />
                    </div>
                    <Button icon="email" variante="stroke-beige">elomade@elomade.fr</Button>
                </div>
            </div>
            <span className='aspect-[14/16] sm:aspect-[16/10] w-full bg-beige-300 rounded-2xl overflow-hidden'>
                <Image src="/hero.webp" alt="Contact" width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
            </span>
        </div>
    </section>
}

export default Contact