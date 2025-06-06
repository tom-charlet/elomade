'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useGlobal } from '@/context/Global'
import { motion } from 'framer-motion'
import { fadeDown, stagger } from '@/utils/variants'

const Button = dynamic(() => import('./Button'))

const Header = () => {
    const { animations } = useGlobal()

    if (!animations) return null
    else return <header className='absolute top-0 left-0 w-full z-40'>
        <motion.nav variants={stagger} initial="hidden" animate="visible" className='responsive-container pt-8 lg:pt-0 lg:h-28 flex items-center justify-center lg:justify-between'>
            <motion.div variants={fadeDown}>
                <Link href="/">
                    <Image src="/logo-elomade.svg" sizes='100vw' alt="Elomade" width={0} height={0} className='h-10 w-auto' />
                </Link>
            </motion.div>
            <motion.ul variants={fadeDown} className='items-center gap-10 hidden lg:flex'>
                <li>
                    <Link href="/creations" className='font-semibold hover:text-red-700 duration-400 ease-smooth-out'>Les créations</Link>
                </li>
                <li>
                    <Button href="#me-contacter">Me contacter</Button>
                </li>
            </motion.ul>
        </motion.nav>
    </header>
}

export default Header