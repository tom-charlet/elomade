'use client'

import dynamic from 'next/dynamic'
import { useGlobal } from '@/context/Global'
import { motion } from 'framer-motion'

const MotionHeading = dynamic(() => import('./MotionHeading'))
const MotionButton = dynamic(() => import('./MotionButton'))

const notFound = () => {
    const { animation } = useGlobal()

    return <motion.section variants={animation("stagger")} initial="hidden" whileInView="visible" viewport={{ once: true }} className='min-h-[calc(100svh-100px)] flex flex-col items-center justify-center pt-[180px] pb-[120px]'>
        <MotionHeading variants={animation("fadeUp")} level="1" className="mb-2">Erreur 404</MotionHeading>
        <MotionHeading variants={animation("fadeUp")} level="3" className="mb-8">Oups.. Il n&apos;y a rien à voir ici</MotionHeading>
        <MotionButton variants={animation("fadeUp")} href="/">Retourner à l&apos;accueil</MotionButton>
    </motion.section>
}

export default notFound