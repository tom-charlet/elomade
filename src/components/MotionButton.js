'use client'

import { motion } from 'framer-motion'
import Button from './Button'

const MotionButton = ({ children, ...props }) => {
    const MotionButton = motion(Button)

    return <MotionButton {...props}>{children}</MotionButton>
}

export default MotionButton