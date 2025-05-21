'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

const Heading = dynamic(() => import('./Heading'))

const cardVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 100, opacity: 0 }
}

const Card = ({ title, images, categories, slug, grid }) => {
    const router = useRouter()

    const handleClick = () => {
        if (slug) router.push(`/creations/${slug}`)
    }

    return <motion.div
        className={`h-full flex flex-col gap-4 ${grid ? "w-full" : "w-[320px] lg:w-[385px]"}`}
        animate={cardVariants}
        variants={cardVariants}
    >
        <button onClick={handleClick} className='cursor-pointer aspect-[14/16] lg:aspect-[13/16] bg-beige-300 rounded-2xl overflow-hidden'>
            <Image width={0} height={0} sizes='100vw' alt={images?.[0]?.alt ?? title ?? ""} src={images?.[0]?.url ?? "/placeholder.svg"} className='object-cover w-full h-full' />
        </button>
        <div className='flex flex-col gap-1.5'>
            <Heading level="3">{title}</Heading>
            {categories?.length > 0 && <Heading level="6" className="opacity-70">{categories?.map((item, index) => {
                return item ? `${index > 0 ? ` - ${item.title}` : item.title}` : null
            })}</Heading>}
        </div>
    </motion.div>
}

export default Card