'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/bundle';
import Data from '../lib/Products';

const Heading = dynamic(() => import('./Heading'))

const Products = () => {
    const [active, setActive] = useState("")
    const r = (Math.random() + 1).toString(36).substring(7)
    const products = Data()

    return <section className='py-[120px] flex flex-col gap-8'>
        <div className='flex flex-col responsive-container gap-8'>
            <Heading level="2">Les créations</Heading>
            <ul className='flex items-center -m-5'>
                <NavItem value="" active={active} setActive={setActive}>Toutes les créations</NavItem>
                <NavItem value="1" active={active} setActive={setActive}>Prêt à porter</NavItem>
                <NavItem value="2" active={active} setActive={setActive}>Accessoires</NavItem>
                <NavItem value="3" active={active} setActive={setActive}>Maison</NavItem>
            </ul>
        </div>
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={24}
            modules={[FreeMode]}
            className='w-full !px-6 md:!px-10 lg:!px-16 xl:!px-28 2xl:!px-60'
        >
            {products?.map((item, index) => <SwiperSlide key={index} className='!w-auto'><Card {...item} /></SwiperSlide>)}
        </Swiper>
    </section>
}

export default Products

const NavItem = ({ children, active, setActive, value }) => {
    return <li>
        <button onClick={() => setActive(value)} className={`font-medium text-[18px] p-5 cursor-pointer ${active == value ? "" : "opacity-50"}`}>
            {children}
        </button>
    </li>
}

const Card = ({ title, images, tags }) => {
    return <div className='flex flex-col w-[385px] gap-4'>
        <span className='aspect-[12/16] bg-beige-300 rounded-2xl'>

        </span>
        <div className='flex flex-col gap-1.5'>
            <Heading level="3">{title}</Heading>
            <Heading level="6" className="opacity-70">{tags}</Heading>
        </div>
    </div>
}