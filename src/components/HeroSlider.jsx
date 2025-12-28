
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import sliderData from '../assets/data/heroSlider.json'; 


const HeroSlider = () => {
    if (!sliderData || sliderData.length === 0) {
        return <div className="text-center text-red-500 p-8">Error: Slider data not loaded or is empty.</div>;
    }

    return (
        <div 
            className="rounded-xl overflow-hidden shadow-2xl shadow-violet-300/60"
            data-aos="fade-down"
        >
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation 
                pagination={{ clickable: true }} 
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }} 
                className="h-[450px] lg:h-[550px]"
            >
                {sliderData.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div 
                            className="w-full h-full relative"
                        >
                            <img 
                                src={slide.image} 
                                alt={slide.title} 
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center"></div> 
                            
                            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-8">
                                <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-snug tracking-wider drop-shadow-lg" data-aos="fade-up" data-aos-duration="1000">
                                    {slide.title}
                                </h2>
                                <p className="text-lg md:text-xl font-medium mb-8 max-w-3xl drop-shadow-md" data-aos="fade-up" data-aos-delay="200">
                                    {slide.subtitle}
                                </p>
                                <Link 
                                    to={slide.buttonLink || '/'}
                                    className="px-8 py-3 bg-violet-600 text-white font-bold rounded-lg text-lg hover:bg-violet-700 transition duration-300 shadow-xl shadow-violet-400/30"
                                    data-aos="zoom-in" data-aos-delay="400"
                                >
                                    {slide.buttonText || 'Learn More'} 
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;