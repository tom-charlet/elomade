'use client'

import { motion } from 'framer-motion'
import Heading from './Heading'

const MotionHeading = ({ children, variantes, ...props }) => {
    const MotionHeading = motion(Heading)

    return <MotionHeading variantes={variantes} {...props}>{children}</MotionHeading>
}

export default MotionHeading