'use client'

import { useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

const Slider = ({ children, pagination, ...props }) => {
    const paginationRef = useRef(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        setReady(true);
    }, []);

    return <div className='relative w-full'>
        <Swiper
            slidesPerView={"auto"}
            modules={[FreeMode, Pagination]}
            freeMode={true}
            {...props}
            grabCursor={true}
            pagination={pagination && ready ? {
                el: paginationRef.current,
                bulletClass: "bullet",
                bulletActiveClass: 'bullet-active',
                bulletElement: 'div',
                clickable: true,
                type: "bullets"
            } : false}
        >
            {children?.map((item, index) => <SwiperSlide key={index} className='!w-auto'>{item}</SwiperSlide>)}

        </Swiper>
        {pagination && <div className='absolute bottom-6 left-1/2 -translate-x-1/2 w-full flex z-40'>
            <div ref={paginationRef} className='custom-pagination w-full justify-center items-center z-20 flex gap-2'></div>
        </div>}
    </div>
}

export default Slider