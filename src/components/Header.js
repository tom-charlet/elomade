'use client'

import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useGlobal } from '@/context/Global'
import { motion } from 'framer-motion'

const Button = dynamic(() => import('./Button'))
const MotionLink = dynamic(() => import('./MotionLink'))

const Header = () => {
    const { animation } = useGlobal()

    return <header className='absolute top-0 left-0 w-full z-40'>
        <motion.nav variants={animation("stagger")} initial="hidden" whileInView="visible" viewport={{ once: true }} className='responsive-container pt-8 lg:pt-0 lg:h-28 flex items-center justify-center lg:justify-between'>
            <MotionLink variants={animation("fadeDown")} href="/">
                <Image src="/logo.svg" sizes='100vw' alt="Elomade" width={0} height={0} className='h-10 w-auto' />
            </MotionLink>
            <motion.ul variants={animation("fadeDown")} className='items-center gap-10 hidden lg:flex'>
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