
import { useContext } from "react";
import Banner from "../Banner/Banner";
import { ServiceContext } from "../../ServiceProvider/ServiceProvider";
import ServiceCard from "../ServiceCard/ServiceCard";





const Home = () => {

    const {service} = useContext(ServiceContext)
    



    return (
        <div className="">
            <Banner></Banner>
            {/* services */} 
            <div className="mt-20 max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center">Our Services</h1>
                <div className="grid grid-cols-2">
                {
                    service.map(data=><ServiceCard key={data.id} data={data}></ServiceCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;