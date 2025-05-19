'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useGlobal } from '../context/Global'
import Image from 'next/image'

const Heading = dynamic(() => import('./Heading'))
const Slider = dynamic(() => import('./Slider'))
const Button = dynamic(() => import('./Button'))

const Products = ({ title, grid, slug }) => {
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

    return <section id="les-creations" className={`pb-20 pt-16 lg:py-[120px] flex flex-col ${grid ? "gap-5 lg:pt-16 mt-[112px]" : "gap-10 lg:gap-16"} relative`}>
        <div className={'flex flex-col gap-6'}>
            {title && <div className='flex items-center justify-between responsive-container'>
                <Heading level="2">{title}</Heading>
                {!grid && <Button variante="stroke-red" icon="chevron-right" reverse className="hidden md:flex" href="/creations">En voir plus</Button>}
            </div>}
        </div>
        {grid && <div className='sticky top-0 left-0 bg-beige-100 z-40'>
            <Slider className='w-full !px-2 md:!px-6 lg:!px-[44px] xl:!px-[92px] 2xl:!px-[140px]'>
                {allCategories?.map((item, index) => <NavItem key={index} active={filter == item.id} onClick={() => setFilter(item.id)}>{item.title}</NavItem>)}
            </Slider>
        </div>}
        {grid ? <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 responsive-container gap-x-4  gap-y-8 lg:gap-x-6 lg:gap-y-12'>
            {products?.filter(Filter)?.map((item, index) => <Card key={index} {...item} grid />)}
        </div> : <Slider className='w-full !px-6 md:!px-10 lg:!px-16 xl:!px-28 2xl:!px-40' breakpoints={{ 0: { spaceBetween: 16 }, 1024: { spaceBetween: 20 } }}>
            {products?.filter(Filter)?.map((item, index) => <Card key={index} {...item} />)}
        </Slider>}
        {!grid && <div className='responsive-container md:hidden'>
            <Button variante="stroke-red" icon="chevron-right" reverse href="/creations">En voir plus</Button>
        </div>}
    </section>
}

export default Products

const NavItem = ({ children, active, grid, ...props }) => {
    return <button {...props} className={`font-medium text-[16px] md:text-[18px] px-4 py-5 lg:p-5 cursor-pointer ${active ? "" : "opacity-50"}`}>
        {children}
    </button>
}

const Card = ({ title, images, categories, slug, grid }) => {
    const router = useRouter()

    const handleClick = () => {
        if (slug) router.push(`/creations/${slug}`)
    }

    return <div className={`h-full flex flex-col gap-4 ${grid ? "w-full" : "w-[320px] lg:w-[385px]"}`}>
        <button onClick={handleClick} className='cursor-pointer aspect-[14/16] lg:aspect-[13/16] bg-beige-300 rounded-2xl overflow-hidden'>
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