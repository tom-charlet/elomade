'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Card = dynamic(() => import('./Card'))

const Grid = ({ items }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 responsive-container gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-12'>
            {items?.map((item, index) => <motion.div
                key={item.id}
                variants={{
                    hidden: {
                        opacity: 0,
                        y: 100
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.04 * index
                        }
                    }
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <Card {...item} grid />
            </motion.div>
            )}
        </div>
    )
}

export default Grid