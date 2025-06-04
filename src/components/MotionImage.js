'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const MotionImage = ({ ...props }) => {
    const MotionImage = motion(Image)

    return <MotionImage {...props} />
}

export default MotionImage