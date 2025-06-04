export const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
}

export const fadeUp = {
    hidden: {
        opacity: 0,
        y: 100,
        x: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

export const fadeDown = {
    hidden: {
        opacity: 0,
        y: -100
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

export const slide = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

export const fadeLeft = {
    hidden: {
        opacity: 0,
        x: 100,
        y: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

export const fadeRight = {
    hidden: {
        opacity: 0,
        x: -100,
        y: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1]
        }
    }
}

export const hero = {
    hidden: {
        opacity: 0,
        x: 50
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            ease: [0.16, 1, 0.2, 1.02]
        }
    }
}