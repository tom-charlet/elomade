'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css/bundle';
import { motion } from 'framer-motion'
import { stagger, fadeLeft, slide } from '@/utils/variants'

const Slider = ({ children, pagination, animate, left, ...props }) => {
    const paginationRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    return <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className='relative w-full'>
        <Swiper
            {...props}
            slidesPerView={"auto"}
            modules={[FreeMode, Pagination, Mousewheel]}
            mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
            }}
            pagination={pagination && ready ? {
                el: paginationRef.current,
                bulletClass: "bullet",
                bulletActiveClass: 'bullet-active',
                bulletElement: 'div',
                clickable: true,
                type: "bullets"
            } : false}
        >
            {children?.map((item, index) => <SwiperSlide key={index} className='!w-auto'>
                <motion.div variants={animate ? (left ? fadeLeft : slide) : null} className='!h-full'>{item}</motion.div>
            </SwiperSlide>)}
        </Swiper>
        {pagination && <div className='absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex z-40'>
            <div ref={paginationRef} className='custom-pagination w-full justify-center items-center z-20 flex gap-2'></div>
        </div>}
    </motion.div>
}

export default Slider