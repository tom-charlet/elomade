'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'

const Heading = dynamic(() => import('./Heading'))

const Card = ({ title, images, categories, slug, grid }) => {

    return <div>
        <Link href={slug ? `/creations/${slug}` : ""} className={`h-full flex flex-col gap-5 ${grid ? "w-full" : "w-[320px] lg:w-[385px]"}`}>
            <span className='aspect-[14/16] lg:aspect-[13/16] bg-beige-300 rounded-2xl overflow-hidden relative'>
                {/* <span className='absolute inset-0 rounded-xl bg-red-600 [clip-path:inset(10%_10%_10%_10%_round_1rem)]' /> */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <mask id="mask">
                        <rect width="100" height="100" fill="white" />
                        <rect x="auto" y="auto" width="auto" height="auto" rx="2" ry="2" fill="black" className='translate-x-[calc(100%-95%)] translate-y-[calc(100%-95%)] w-[calc(100%-10%)] h-[calc(100%-10%)]'/>
                    </mask>
                    <rect width="100" height="100" fill="auto" mask="url(#mask)" className='fill-red-700' />
                </svg>
                <Image width={0} height={0} sizes='100vw' alt={images?.[0]?.alt ?? title ?? ""} src={images?.[0]?.url ?? "/placeholder.svg"} className='object-cover w-full h-full' />
            </span>
            <div className='flex flex-col gap-1.5'>
                <Heading level="3">{title}</Heading>
                {categories?.length > 0 && <Heading level="6" className="opacity-70">{categories?.map((item, index) => {
                    return item ? `${index > 0 ? ` - ${item.title}` : item.title}` : null
                })}</Heading>}
            </div>
        </Link>
    </div>
}

export default Card