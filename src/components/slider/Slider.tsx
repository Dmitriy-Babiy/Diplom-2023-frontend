import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SERVER_URL } from '../../axios';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';

interface ISliderProps {
    images: Array<string>;
}

export default function Slider(props: ISliderProps) {
    return (
        <Swiper
            loop
            modules={[Scrollbar, Autoplay]}
            slidesPerView={1}
            scrollbar={{ draggable: true }}
            autoplay={{ delay: 3000 }}
        >
            {props.images.map((image) => (
                <SwiperSlide key={image}>
                    <img className='h-[350px] w-[450px] object-cover' src={SERVER_URL + image} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
