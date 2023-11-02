import React, {useEffect} from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import s from './SwiperSlider.module.css';

export default function SwiperSlider({sliderImages}) {
  const swiper = useSwiper();
  return (
    //  Slider main container
    <div className={`${s.container}`}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        // slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        // scrollbar={{draggable: true}}
        // onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => {}}>
        {/* Slides */}
        {sliderImages.map((slide) => (
          <SwiperSlide key={slide.id} className={`${s.slide} swiper-slide`}>
            <div className={s.imgContainer}>{slide.img}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
