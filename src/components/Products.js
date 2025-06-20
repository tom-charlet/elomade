'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { useGlobal } from '../context/Global'

const Heading = dynamic(() => import('./Heading'))
const Slider = dynamic(() => import('./Slider'))
const Button = dynamic(() => import('./Button'))
const Card = dynamic(() => import('./Card'))
const Grid = dynamic(() => import('./Grid'))

const Products = ({ title, grid, slug }) => {
    const [filter, setFilter] = useState(0)
    const [allCategories, setAllCategories] = useState([])
    const { products, categories } = useGlobal()

    const Filter = (item) => {
        if (slug && item.slug == slug) return false
        if (filter > 0 && !item.categories?.find(e => e.id == filter)) return false
        else return item
    }

    useEffect(() => {
        if (categories?.length > 0) setAllCategories([{ id: 0, title: "Toutes les créations" }, ...categories])
    }, [categories])

    return <section id="les-creations" className={`pb-20 pt-16 lg:py-[120px] flex flex-col ${grid ? "gap-2 lg:gap-5 pb-20 pt-[160px] lg:mt-20" : "gap-10 lg:gap-16"} relative`}>
        <div className={'flex flex-col gap-6'}>
            {title && <div className='flex items-center justify-between responsive-container'>
                <Heading level="2">{title}</Heading>
                {!grid && <Button variante="stroke-red" icon="chevron-right" reverse className="hidden md:flex" href="/creations">En voir plus</Button>}
            </div>}
        </div>
        {grid ? <>
            <Categories items={allCategories} onChange={e => setFilter(e)} active={filter} />
            <Grid items={products?.filter(Filter)} />
        </> : <>
            <Slider animate className='w-full !px-6 md:!px-10 lg:!px-16 xl:!px-28 2xl:!px-40' breakpoints={{ 0: { spaceBetween: 16 }, 1024: { spaceBetween: 24 } }}>
                {products?.filter(Filter)?.map((item, index) => <Card key={index} {...item} />)}
            </Slider>
            <div className='responsive-container md:hidden mt-10'>
                <Button variante="stroke-red" icon="chevron-right" reverse href="/creations">En voir plus</Button>
            </div>
        </>}
    </section>
}

export default Products

const Categories = ({ items, active, onChange }) => {
    const { isMobile } = useGlobal()

    const handleFilter = (e) => {
        if (typeof onChange == "function") onChange(e)
        if (isMobile) window.scroll({ top: 80, left: 0, behavior: "instant" })
    }

    return <div className='sticky md:static top-0 left-0 bg-beige-100 z-40 mb-5 lg:mb-3'>
        <Slider animate left className='w-full !px-2 md:!px-6 lg:!px-[44px] xl:!px-[92px] 2xl:!px-[140px]'>
            {items?.map((item, index) => <NavItem key={index} index={index} active={active == index} onClick={() => handleFilter(item.id)}>{item.title}</NavItem>)}
        </Slider>
    </div>
}

const NavItem = ({ children, active, ...props }) => <button {...props} className={`font-semibold text-[16px] md:text-[18px] px-4 py-5 lg:p-5 cursor-pointer duration-800 ease-smooth-in-out ${active ? "text-red-700" : "hover:text-red-700 text-red-900/50"}`}>{children}</button>