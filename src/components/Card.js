'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const Heading = dynamic(() => import('./Heading'))

const Card = ({ title, image, categories, slug, grid, price }) => {

    return <Link href={slug ? `/creations/${slug}` : "#"} className={`h-full flex flex-col gap-5 group ${grid ? "w-full" : "w-[320px] lg:w-[385px]"}`}>
        <div className='aspect-[14/16] lg:aspect-[13/16] bg-beige-100 rounded-2xl overflow-hidden relative'>
            <Image width={0} height={0} sizes='100vw' alt={image?.alt ?? title ?? ""} src={image?.url ?? "/placeholder.svg"} className='object-cover w-full h-full scale-110 group-hover:scale-100 duration-1000 ease-smooth-out rounded-xl' />
            {image?.caption && <span className='px-0 pb-0 absolute bottom-0 left-0 w-full flex justify-center rounded-b-3xl bg-black/20'>
                <span className='text-[10px] text-center text-white/80 font-light py-px px-1.5'>
                    {image?.caption}
                </span>
            </span>}
        </div>
        <div className='flex items-start justify-between w-full'>
            <div className='flex flex-col gap-1.5'>
                <Heading level="3" className="duration-300 ease-smooth-out group-hover:text-red-700">{title}</Heading>
                {categories?.length > 0 && <Heading level="6" className="opacity-70">
                    {categories.map(item => item?.title).filter(Boolean).join(' - ')}
                </Heading>}
            </div>
            <data className='text-[24px] leading-[140%] text-red-700 font-semibold'><>{price && new Intl.NumberFormat("fr-FR").format(price)} €</></data>
        </div>
    </Link>
}

export default Card