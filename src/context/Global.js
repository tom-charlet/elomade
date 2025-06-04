'use client'

import { createContext, useContext } from 'react';
import { useIsMobile } from '@/utils/useIsMobile';

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children, data }) => {
    const isMobile = useIsMobile()

    const animations = {
        stagger: {
            hidden: {},
            visible: {
                transition: {
                    staggerChildren: 0.05
                }
            }
        },
        fadeUp: {
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
        },
        fadeDown: {
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
        },
        slide: {
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
        },
        fadeLeft: {
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
        },
        fadeRight: {
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
        },
        hero: {
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
    }


    return <GlobalContext.Provider value={{
        ...data,
        animations,
        isMobile
    }}>
        {children}
    </GlobalContext.Provider>
}

export const useGlobal = () => useContext(GlobalContext);
