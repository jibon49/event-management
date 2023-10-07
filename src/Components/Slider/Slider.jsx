
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../assets/banner.jpg'
import banner2 from '../../assets/tech1.jpg'
import banner3 from '../../assets/tech2.jpg'

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1} // Set the number of slides per view based on your design
            autoplay={{ delay: 3000 }} // Set autoplay options
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src={banner1} alt="Slide 1" /></SwiperSlide>
            <SwiperSlide><img src={banner2} alt="Slide 2" /></SwiperSlide>
            <SwiperSlide><img src={banner3} alt="Slide 3" /></SwiperSlide>
        </Swiper>
    );
};

export default Slider;
