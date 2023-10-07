import { RiCustomerService2Line } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import { FaUserCheck} from "react-icons/fa";

const Intro = () => {
    return (
        <div className="mb-24">
            <div className="mb-24 max-w-2xl mx-auto text-center">
                <h1 className="text-3xl text-[#777777] font-bold text-center mb-5">Welcome to <span className="text-blue-500">TechByte</span></h1>
                <p className="text-xl">
                    From Cutting-Edge Tech Summits to High-Octane Gaming Expos,
                    We Provide Comprehensive Event Management Services Tailored to Your Tech and Gaming Enthusiast Community!
                </p>
                
            </div>
            <div className="mt-10 grid grid-cols-3 gap-10">

                {/* great service */}
                    <div>
                        <div className="flex items-center text-center text-xl font-bold gap-2 mb-4">
                            <RiCustomerService2Line className="text-orange-500 text-3xl"></RiCustomerService2Line>
                            <p>Great Services</p>
                        </div>
                        <p className="text-lg text-justify text-[#777777]">
                            At TechByte,we provide excellence in every detail. Our dedicated team ensures your event is flawless, from planning to execution. Experience the difference with TechByte.
                        </p>
                    </div>

                    {/* expert */}
                    <div>
                        <div className="flex items-center text-center text-xl font-bold gap-2 mb-4">
                            <FaUserCheck className="text-orange-500 text-3xl"></FaUserCheck>
                            <p>Proficient Experts</p>
                        </div>
                        <p className="text-lg text-justify text-[#777777]">
                        Our team comprises highly skilled members with deep expertise in event management, ensuring flawless execution and memorable experiences
                        </p>
                    </div>

                    {/* creative */}
                    <div>
                        <div className="flex items-center text-center text-xl font-bold gap-2 mb-4">
                            <FcIdea className="text-orange-500 text-3xl"></FcIdea>
                            <p>Innovative Concepts</p>
                        </div>
                        <p className="text-lg text-justify text-[#777777]">
                        We bring fresh, imaginative ideas to the table, turning ordinary events into extraordinary experiences.
                        </p>
                    </div>

                </div>
        </div>
    );
};

export default Intro;