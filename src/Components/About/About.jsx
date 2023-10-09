import Navbar from "../Navbar/Navbar";
import handshake from "../../assets/handshake.png"
import pin from "../../assets/pin.png"
import service from "../../assets/customer-service.png"
import idea from "../../assets/idea.png"
import calender from "../../assets/calendar.png"
import software from "../../assets/software.png"
import AboutCard from "./AboutCard";

const Cards = [
    {icon:handshake, title:"Friendly Teams", description:"More Than 200 teams"},
    {icon:idea, title:"Brilliant Idea", description:"We Think Out of the Box"},
    {icon:pin, title:"Perfect Venues", description:"We Have perfect venues for your event"},
    {icon:service, title:"24/7 Supports", description:"Any Time anywhere"},
    {icon:calender, title:"Perfect Planing", description:"Any Time You want"},
    {icon:software, title:"Best Management", description:"Best Management"}
]

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto">
            <h1 className=" text-4xl font-bold mt-28 mb-5">Why Choose Us</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-28 gap-5">
                {
                    Cards.map((card,idx)=><AboutCard key={idx} card={card}></AboutCard>)
                }

            </div>
        </div>
        </div>
    );
};

export default About;
