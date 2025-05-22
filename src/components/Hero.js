'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion, scale, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from '../utils/useIsMobile';

const Heading = dynamic(() => import('./Heading'))
const Button = dynamic(() => import('./Button'))

const containerVariants = {
    hidden: { opacity: 0, scale: 1.02 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.1,
            ease: [0.16, 1, 0.3, 1]
        },
    },
}

const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.6,
            ease: [0.33, 1, 0.68, 1],
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
        delay: 0.5
    },
}

const Hero = () => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const isMobile = useIsMobile()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: isMobile ? ["end start", "start start"] : ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], isMobile ? ["-50px", "0px"] : ["-150px", "150px"])
    const opacity = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 1] : [1, 1])

    return <section className='overflow-hidden'>
        <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ opacity }}
            className='relative lg:pt-28 lg:min-h-svh flex flex-col overflow-hidden bg-beige-300'>
            <div className='flex flex-col lg:items-start responsive-container pt-6 pb-16 lg:pb-12 lg:py-[10svh] xl:py-[15svh] z-20'>
                <motion.div variants={childVariants}>
                    <Heading level="1" className="mb-4 lg:mb-6">Toutes vos envies <br className='hidden lg:block' />sur commande !</Heading>
                </motion.div>
                <motion.div variants={childVariants}>
                    <Heading level="3" tag="h2" className='mb-8 font-normal '>Créations en crochet sur mesure,<br className='hidden lg:block' /> réalisées avec amour et passion.</Heading>
                </motion.div>
                <motion.div variants={childVariants}>
                    <Button icon="chevron-right" reverse className="md:self-start" href="#les-creations">Découvrir l&apos;univers</Button>
                </motion.div>
            </div>
            <div className='min-h-[300px] aspect-[16/15] md:aspect-[16/12] lg:apect-auto lg:h-full w-full relative lg:absolute lg:top-0 lg:left-0 -order-1 flex items-end justify-center overflow-hidden gradient-hero after:content-[""] after:absolute after:inset-0 after:z-10 z-10 lg:after:hidden'>
                <motion.div
                    ref={ref}
                    style={{ y }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={imageVariants}
                    className='aspect-[16/10] lg:aspect-[16/8] h-full lg:w-full relative -translate-x-[16vw] md:scale-[1.2] md:-translate-x-[13.5vw] md:-translate-y-[8%] lg:translate-y-[2%] lg:scale-[1.1] lg:translate-x-[4vw] xl:scale-[1.128] xl:translate-x-[6vw] xl:-translate-y-[6%] 2xl:scale-[1.15] 2xl:translate-x-[5vw] 2xl:-translate-y-[7%]'>
                    <Image src="/hero.webp" alt="créations en crochet" width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                </motion.div>
            </div>
        </motion.div>
    </section>
}

export default Hero