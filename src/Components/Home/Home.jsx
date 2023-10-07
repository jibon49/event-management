
import { useContext } from "react";
import Banner from "../Banner/Banner";
import { ServiceContext } from "../../ServiceProvider/ServiceProvider";
import ServiceCard from "../ServiceCard/ServiceCard";
import SuccessEvents from "../SuccessEvents/SuccessEvents";
import Intro from "../Intro/Intro";





const Home = () => {

    const { service } = useContext(ServiceContext)




    return (
        <div className="bg-slate-200">
            <Banner></Banner>
            {/* services */}
            <div className="mt-20 max-w-6xl mx-auto">

                <Intro></Intro>
                <h1 className="text-3xl font-bold text-center mb-24">Our Services</h1>
                <div className="grid grid-cols-3 gap-1">
                    {
                        service.map(data => <ServiceCard key={data.id} data={data}></ServiceCard>)
                    }
                </div>
                <SuccessEvents></SuccessEvents>
            </div>
        </div>
    );
};

export default Home;