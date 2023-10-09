
import { useContext, useEffect } from "react";
import Banner from "../Banner/Banner";
import { ServiceContext } from "../../ServiceProvider/ServiceProvider";
import ServiceCard from "../ServiceCard/ServiceCard";
import SuccessEvents from "../SuccessEvents/SuccessEvents";
import Intro from "../Intro/Intro";
import Aos from "aos";
import 'aos/dist/aos.css'





const Home = () => {

    const { service } = useContext(ServiceContext)

    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])



    return (
        <div className="bg-slate-200">
            <div data-aos="fade-down">
                <Banner></Banner>
            </div>
            {/* services */}
            <div data-aos="fade-up" className="mt-20 max-w-6xl mx-auto">

                <Intro></Intro>
                <div data-aos="animation_name"></div>
                <h1 data-aos="fade-up" className="text-3xl font-bold text-center mb-24">Our Services</h1>
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {
                        service.map(data => <ServiceCard key={data.id} data={data}></ServiceCard>)
                    }
                </div>
                <div data-aos="fade-up">
                <SuccessEvents></SuccessEvents>
                </div>
            </div>
        </div>
    );
};

export default Home;