'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { stagger, fadeUp } from '@/utils/variants'

const Heading = dynamic(() => import('./Heading'))
const Button = dynamic(() => import('./Button'))

const notFound = () => {
    return <motion.section variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className='min-h-[calc(100svh-100px)] flex flex-col items-center justify-center pt-[180px] pb-[120px]'>
        <motion.div variants={fadeUp}>
            <Heading variants={fadeUp} level="1" className="mb-2">Erreur 404</Heading>
        </motion.div>
        <motion.div variants={fadeUp}>
            <Heading variants={fadeUp} level="3" className="mb-8">Oups.. Il n&apos;y a rien à voir ici</Heading>
        </motion.div>
        <motion.div variants={fadeUp}>
            <Button variants={fadeUp} href="/">Retourner à l&apos;accueil</Button>
        </motion.div>
    </motion.section>
}

export default notFound