import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const ServiceDetails = () => {

    const services = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id)
    const service = services.find(service => service.id === idInt)


    const { image, banner ,description, name, banner_title} = service

    console.log(id)

    return (

        <div>
            <Navbar></Navbar>
            <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-3xl p-32">
                        <h1 className="mb-5 text-5xl font-bold text-white">{banner_title}</h1>
                        <p className="mb-5">Elevate Your Tech and Gaming Events with Expert Management</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className="lg:mt-14 lg:ml-36 md:max-w-7xl mb-5 p-4">
                <div className="hero hero-overlay h-96 lg:h-[700px] items-end justify-start rounded-xl static" style={{ backgroundImage: `url(${image})` }}>
                </div>
                <h1 className="text-4xl font-bold mt-10 mb-4">{name}</h1>
                <p className="text-xl text-justify">{description}</p>
            </div>
            <button className="btn btn-primary mx-auto flex">Get Started</button>
        </div>
    );
};

export default ServiceDetails;