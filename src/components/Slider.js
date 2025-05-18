'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css/bundle';

const Slider = ({ children, ...props }) => {
    return <Swiper
        slidesPerView={"auto"}
        modules={[FreeMode]}
        freeMode={true}
        {...props}
        grabCursor={true}
    >
        {children?.map((item, index) => <SwiperSlide key={index} className='!w-auto'>{item}</SwiperSlide>)}
    </Swiper>
}

export default Slider