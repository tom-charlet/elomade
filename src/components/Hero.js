'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { stagger, fadeUp } from '@/utils/variants'
import { useRef } from "react"
import { motion, LazyMotion, domAnimation, m, cubicBezier } from "motion/react"
import useParallax from "../utils/Parallax"

const Heading = dynamic(() => import('./Heading'))
const Button = dynamic(() => import('./Button'))

const Hero = () => {
    const ref = useRef(null)
    const y = useParallax(ref)

    return <section ref={ref} className='overflow-hidden'>
        <div className='relative lg:pt-28 min-h-svh flex flex-col items-center justify-end lg:items-start lg:justify-start overflow-hidden bg-beige-300'>
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className='flex flex-col lg:items-start responsive-container pt-6 pb-16 lg:pb-12 lg:py-[10svh] xl:py-[15svh] z-20 text-beige-100'>
                <motion.div variants={fadeUp}>
                    <Heading level="1" className="mb-4 lg:mb-6 lg:text-[52px] lg:max-w-[560px] text-balance">Création de vêtements et d’accessoires en crochet faits main</Heading>
                </motion.div>
                <motion.div variants={fadeUp}>
                    <h2 className='mb-12 font-normal text-[18px] lg:max-w-[450px] text-balance'>Découvrez des pièces <strong className='font-semibold'>uniques et durables</strong>,<br className='hidden lg:block' /> mettant à l’honneur la <strong className='font-semibold'>seconde main</strong> <br className='hidden lg:block' />et le <strong className='font-semibold'>savoir-faire artisanal</strong>.</h2>
                </motion.div>
                <motion.div variants={fadeUp}>
                    <Button variants={fadeUp} icon="chevron-right" reverse className="md:self-start" href="#les-creations" variante="stroke-beige">Découvrir l&apos;univers</Button>
                </motion.div>
            </motion.div>
            <div className='absolute bg-beige-300 grid items-center justify-center after:content-[""] after:absolute after:inset-0 after:z-10 after:lg:hidden after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.4)_100%)] h-full w-full'>
                <LazyMotion features={domAnimation}>
                    <m.div
                        style={{ y: y ?? null }}
                        initial={{ x: "50px", opacity: 0.96 }}
                        animate={{ x: "0px", opacity: 1 }}
                        transition={{ duration: 2, ease: cubicBezier(0, 0.55, 0.45, 1) }}
                        className='relative h-full w-full aspect-16/8 max-w-full max-h-full grid'>
                        <Image
                            fill
                            src="/hero-2.webp"
                            alt="hero"
                            priority
                            className="w-full h-full object-cover scale-130 translate-x-[25%] md:translate-x-[20%] lg:translate-x-[10%] -translate-y-[5%] lg:translate-y-[5%]"
                        />
                    </m.div>
                </LazyMotion>
            </div>
            {/* <div className='min-h-[300px] aspect-[16/15] md:aspect-[16/12] lg:apect-auto lg:h-full w-full relative lg:absolute lg:top-0 lg:left-0 -order-1 flex items-end justify-center overflow-hidden gradient-hero after:content-[""] after:absolute after:inset-0 after:z-10 z-10 lg:after:hidden'>
                <div className='aspect-[16/10] lg:aspect-[16/8] h-full lg:w-full relative -translate-x-[16vw] md:scale-[1.2] md:-translate-x-[13.5vw] md:-translate-y-[8%] lg:translate-y-[2%] lg:scale-[1.1] lg:translate-x-[4vw] xl:scale-[1.128] xl:translate-x-[6vw] xl:-translate-y-[6%] 2xl:scale-[1.15] 2xl:translate-x-[5vw] 2xl:-translate-y-[7%]'>
                    <motion.div variants={hero} initial="hidden" whileInView="visible" viewport={{ once: true }} className='w-full h-full'>
                        <Image src="/hero.webp" alt="créations en crochet" width={0} height={0} sizes='100vw' className='w-full h-full object-cover' />
                    </motion.div>
                </div>
            </div> */}
        </div>
    </section >
}

export default Hero