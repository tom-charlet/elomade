'use client'

import { useScroll, useTransform } from "motion/react"

export default function useParallax(ref, offset, value) {
    const { scrollYProgress } = useScroll({ target: ref, offset: offset ?? ["start start", "end start"] })
    const y = useTransform(scrollYProgress, [0, 1], value ?? ["0%", "15%"])
    return y
}