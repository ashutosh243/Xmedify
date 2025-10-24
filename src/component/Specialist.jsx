import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import docter from '../assets/docterr.png';
import docter2 from '../assets/docter2.png';


const Specialist = () => {
    return (<>
        <div className="container w-[80vw] m-auto h-[600px] ">
            <h2 className='font-bold text-2xl text-center m-10'>Our Medical Specialist</h2>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[#2AA7FF] to-sky-200 h-[500px] w-[350px] flex items-end justify-center rounded-t-full shadow-lg'>
                        <img className='h-[350px] ' src={docter} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[#2AA7FF] to-sky-200 h-[500px] w-[350px] flex items-end justify-center rounded-t-full shadow-lg'>
                        <img className='h-[350px]' src={docter2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[#2AA7FF] to-sky-200 h-[500px] w-[350px] flex items-end justify-center rounded-t-full shadow-lg'>
                        <img className='h-[350px] ' src={docter} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[#2AA7FF] to-sky-200 h-[500px] w-[350px] flex items-end justify-center rounded-t-full shadow-lg'>
                        <img className='h-[350px]' src={docter2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[#2AA7FF] to-sky-200 h-[500px] w-[350px] flex items-end justify-center rounded-t-full shadow-lg'>
                        <img className='h-[350px] ' src={docter} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-gradient-to-t from-[#2AA7FF] to-sky-200 h-[500px] w-[350px] flex items-end justify-center rounded-t-full shadow-lg'>
                        <img className='h-[350px]' src={docter2} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

    </>);
}

export default Specialist