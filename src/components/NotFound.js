'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const MotionHeading = dynamic(() => import('./MotionHeading'))
const MotionButton = dynamic(() => import('./MotionButton'))

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 100,
        x: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

const notFound = () => {
    return <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className='min-h-[calc(100svh-100px)] flex flex-col items-center justify-center pt-[180px] pb-[120px]'>
        <MotionHeading variants={fadeUp} level="1" className="mb-2">Erreur 404</MotionHeading>
        <MotionHeading variants={fadeUp} level="3" className="mb-8">Oups.. Il n&apos;y a rien à voir ici</MotionHeading>
        <MotionButton variants={fadeUp} href="/">Retourner à l&apos;accueil</MotionButton>
    </motion.section>
}

export default notFound