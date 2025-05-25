'use client'

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/utils/useIsMobile";

const Animation = ({ children, className, tag, type, direction, value, transition, once, amount, stagger, classChild, tagChild, parallax }) => {
    const ref = useRef(null)
    const types = typeof (type) == "string" ? [type] : type instanceof Array ? type : []
    const transitionStyle = {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        ...(transition ?? {})
    }

    const isMobile = useIsMobile()

    const animation = {
        initial: {},
        animate: { transition: transitionStyle },
    }

    const staggerAnimation = {
        initial: {},
        animate: { transition: { ...transitionStyle, staggerChildren: stagger ?? null } }
    }

    if (types?.length) types.map(item => {
        if (item == 'fade') {
            let state = value?.fade ?? [0, 1]

            animation.initial.opacity = state[0]
            animation.animate.opacity = state[1]
        }
        else if (item == 'move') {
            let state = value?.move ?? (direction == "up" || direction == "left" ? ["20%", "0%"] : ["-20%", "0%"])

            if (direction == 'up' || direction == 'down') {
                animation.initial.translateY = state[0]
                animation.animate.translateY = state[1]
            }
            else if (direction == 'left' || direction == 'right') {
                animation.initial.translateX = state[0]
                animation.animate.translateX = state[1]
            }
        }
        else if (item == 'scale') {
            let state = value?.scale ?? [0.5, 1]

            animation.initial.scale = state[0]
            animation.animate.scale = state[1]
        }
    })

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : (parallax?.value ?? ["-100px", "100px"]))

    const Container = motion.create(tag ?? "div")
    const Child = motion.create(tagChild ?? "span")

    return <Container
        ref={ref}
        initial="initial"
        whileInView="animate"
        className={className}
        variants={stagger ? staggerAnimation : animation}
        viewport={{ once: once, amount: amount }}
        style={parallax ? { y } : null}
    >
        {stagger && children ? children.map((item, index) => <Child key={index} variants={animation} className={classChild}>{item}</Child>) : children}
    </Container>
}

export default Animation