'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGlobal } from '../context/Global'
import Image from 'next/image'

const Heading = dynamic(() => import('./Heading'))
const Slider = dynamic(() => import('./Slider'))

const Products = ({ slug }) => {
    const [filter, setFilter] = useState(0)
    const [allCategories, setAllCategories] = useState([])
    const { products, categories } = useGlobal()

    const Filter = (item) => {
        if (slug && item.slug == slug) return null
        if (filter > 0 && !item.categories?.find(e => e.id == filter)) return null
        else return item
    }

    useEffect(() => {
        if (categories?.length > 0) setAllCategories([{ id: 0, title: "Toutes les créations" }, ...categories])
    }, [categories])

    return <section id="les-creations" className='py-16 lg:py-[120px] flex flex-col gap-3'>
        <div className='flex flex-col gap-6'>
            <Heading level="2" className="responsive-container">{slug ? "Les autres créations" : "Les créations"}</Heading>
            <Slider className='w-full !px-2 md:!px-6 lg:!px-[44px] xl:!px-[92px] 2xl:!px-[140px]'>
                {allCategories?.map((item, index) => <NavItem key={index} active={filter == item.id} onClick={() => setFilter(item.id)}>{item.title}</NavItem>)}
            </Slider>
        </div>
        <Slider className='w-full !px-6 md:!px-10 lg:!px-16 xl:!px-28 2xl:!px-40' breakpoints={{ 0: { spaceBetween: 16 }, 1024: { spaceBetween: 20 } }}>
            {products?.filter(Filter)?.map((item, index) => <Card key={index} {...item} />)}
        </Slider>
    </section>
}

export default Products

const NavItem = ({ children, active, ...props }) => {
    return <button {...props} className={`font-medium text-[18px] p-4 lg:p-5 cursor-pointer ${active ? "" : "opacity-50"}`}>
        {children}
    </button>
}

const Card = ({ title, images, categories, slug }) => {
    const router = useRouter()

    const handleClick = () => {
        if (slug) router.push(`/creations/${slug}`)
    }

    return <div className='h-full flex flex-col w-[320px] lg:w-[385px] gap-4'>
        <button onClick={handleClick} className='cursor-pointer aspect-[12/16] bg-beige-300 rounded-2xl overflow-hidden'>
            <Image width={0} height={0} sizes='100vw' alt={images?.[0]?.alt ?? title ?? ""} src={images?.[0]?.url ?? "/placeholder.svg"} className='object-cover w-full h-full' />
        </button>
        <div className='flex flex-col gap-1.5'>
            <Heading level="3">{title}</Heading>
            {categories?.length > 0 && <Heading level="6" className="opacity-70">{categories?.map((item, index) => {
                return item ? `${index > 0 ? ` - ${item.title}` : item.title}` : null
            })}</Heading>}
        </div>
    </div>
}