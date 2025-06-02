'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const Heading = dynamic(() => import('./Heading'))

const Card = ({ title, images, categories, slug, grid }) => {

    return <Link href={slug ? `/creations/${slug}` : "#"} className={`h-full flex flex-col gap-5 group ${grid ? "w-full" : "w-[320px] lg:w-[385px]"}`}>
        <div className='aspect-[14/16] lg:aspect-[13/16] bg-beige-100 rounded-2xl overflow-hidden'>
            <Image width={0} height={0} sizes='100vw' alt={images?.[0]?.alt ?? title ?? ""} src={images?.[0]?.url ?? "/placeholder.svg"} className='object-cover w-full h-full scale-110 group-hover:scale-100 duration-1000 ease-smooth-out rounded-xl' />
        </div>
        <div className='flex flex-col gap-1.5'>
            <Heading level="3" className="duration-300 ease-smooth-out group-hover:text-red-700">{title}</Heading>
            {categories?.length > 0 && <Heading level="6" className="opacity-70">
                {categories.map(item => item?.title).filter(Boolean).join(' - ')}
            </Heading>}
        </div>
    </Link>
}

export default Card