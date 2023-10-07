import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../../App.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const SuccessEvents = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('/successJson.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])


    return (
        <div className="mt-14">
            <h1 className="text-center text-3xl font-bold my-32">Successful Events by <span className="text-blue-500">TechByte</span></h1>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                        events.map(event => (
                            <SwiperSlide key={event.id}>
                                <div className="hero bg-white text-left">
                                    <div className="hero-content flex-col lg:flex-row">
                                        <img src={event.image} className=" rounded-lg shadow-2xl" />
                                        <div>
                                            <h1 className="text-2xl font-bold">{event.title}</h1>
                                            <p className="py-6 text-[#777777]">{event.description}.</p>
                                            <div className="flex items-center gap-2">
                                                <LiaMapMarkedAltSolid className="text-blue-500 text-2xl"></LiaMapMarkedAltSolid>
                                            <p className="text-[#777777]">{event.location}</p>
                                            </div>
                                            <div className="flex items-center gap-2 mt-5">
                                                <SlCalender className="text-blue-500 text-xl"></SlCalender>
                                            <p className="text-[#777777]">{event.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
         
        </div>
    );
};

export default SuccessEvents;