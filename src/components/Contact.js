'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useGlobal } from '../context/Global'

const MotionHeading = dynamic(() => import('../components/MotionHeading'))
const Button = dynamic(() => import('../components/Button'))

const Contact = () => {
    const { animation, isMobile } = useGlobal()

    const fadeUp = animation("fadeUp")
    const fadeLeft = animation("fadeLeft")

    return <section id="me-contacter" className='bg-red-800 py-16 lg:py-[120px] overflow-hidden'>
        <div className='responsive-container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-32 text-beige-300'>
            <motion.div variants={animation("stagger")} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col items-start'>
                <MotionHeading variants={animation("fadeUp")} level="1" className="mb-6">Me contacter</MotionHeading>
                <motion.p variants={animation("fadeUp")} className='mb-10 md:text-balance'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.</motion.p>
                <motion.div variants={animation("fadeUp")} className='flex flex-col md:flex-row gap-3 w-full md:w-auto'>
                    <Button href="https://www.tiktok.com/@elomadecrochet" target="_blank" icon="tiktok" variante="fill-beige" className="basis-full md:basis-auto md:hidden">elomadecrochet</Button>
                    <Button href="https://www.instagram.com/elomadecrochet" target="_blank" icon="instagram" variante="fill-beige" className="basis-full md:basis-auto md:hidden">elomadecrochet</Button>
                    <Button href="https://www.tiktok.com/@elomadecrochet" target="_blank" icon="tiktok" variante="fill-beige" className="basis-full md:basis-auto hidden md:flex" />
                    <Button href="https://www.instagram.com/elomadecrochet" target="_blank" icon="instagram" variante="fill-beige" className="basis-full md:basis-auto hidden md:flex" />
                    <Button icon="email" variante="stroke-beige" target="_blank" href="mailto:contact@elomade.fr" className="md:ml-1.5">contact@elomade.fr</Button>
                </motion.div>
            </motion.div>
            <motion.div variants={isMobile ? fadeUp : fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: true }} className='aspect-[16/12] sm:aspect-[16/11] w-full bg-beige-300 rounded-2xl overflow-hidden'>
                <span className="w-full h-full scale-[1.12]">
                    <Image src="/produits/le-col.webp" alt="Contact" width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                </span>
            </motion.div>
        </div>
    </section>
}

export default Contact