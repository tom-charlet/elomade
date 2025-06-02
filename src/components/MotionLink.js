'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = ({ children, ...props }) => {
    const MotionLink = motion(Link)

    return <MotionLink {...props}>{children}</MotionLink>
}

export default MotionLink