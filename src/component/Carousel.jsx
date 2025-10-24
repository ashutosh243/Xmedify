import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';



const Carousel = () => {
    return (<>
        <div className="container w-[80vw] m-auto h-[400px] mb-10 ">
            <h2 className='font-bold text-2xl text-center m-5'>Our Medical Specialist</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
    
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className=' flex items-end justify-center shadow-lg'>
                        <img className='h-[350px] ' src={carousel1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-end justify-center shadow-lg'>
                        <img className='h-[350px]' src={carousel2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-end justify-center shadow-lg'>
                        <img className='h-[350px]' src={carousel3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-end justify-center shadow-lg'>
                        <img className='h-[350px]' src={carousel2} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    </>);
}

export default Carousel;