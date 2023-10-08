import Navbar from "../Navbar/Navbar";
import { PiGearFineDuotone} from 'react-icons/pi';


const Features = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="bg-blue-500 py-16">
                <div className="container mx-auto text-white text-center">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="max-w-xs mx-auto">
                            <div className="bg-white p-6 rounded-lg">
                                <div className="text-blue-500 mx-auto flex text-4xl mb-4">
                                    <PiGearFineDuotone></PiGearFineDuotone>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Customizable</h3>
                                <p className="text-gray-700">
                                    Tailor the event management system to fit your specific needs.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="max-w-xs mx-auto">
                            <div className="bg-white p-6 rounded-lg">
                                <div className="text-blue-500 text-4xl mb-4">
                                    <i className="fa fa-gamepad"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Gaming Integration</h3>
                                <p className="text-gray-700">
                                    Seamlessly integrate gaming elements to enhance user engagement.
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="max-w-xs mx-auto">
                            <div className="bg-white p-6 rounded-lg">
                                <div className="text-blue-500 text-4xl mb-4">
                                    <i className="fa fa-laptop"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Tech Workshops</h3>
                                <p className="text-gray-700">
                                    Conduct workshops to educate participants about the latest tech trends.
                                </p>
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="max-w-xs mx-auto">
                            <div className="bg-white p-6 rounded-lg">
                                <div className="text-blue-500 text-4xl mb-4">
                                    <i className="fa fa-users"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Community Building</h3>
                                <p className="text-gray-700">
                                    Foster a sense of community among participants and stakeholders.
                                </p>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="max-w-xs mx-auto">
                            <div className="bg-white p-6 rounded-lg">
                                <div className="text-blue-500 text-4xl mb-4">
                                    <i className="fa fa-lightbulb"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Innovative Ideas</h3>
                                <p className="text-gray-700">
                                    Encourage participants to generate creative and innovative ideas.
                                </p>
                            </div>
                        </div>

                        {/* Feature 6 */}
                        <div className="max-w-xs mx-auto">
                            <div className="bg-white p-6 rounded-lg">
                                <div className="text-blue-500 text-4xl mb-4">
                                    <i className="fa fa-calendar"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Event Scheduling</h3>
                                <p className="text-gray-700">
                                    Effortlessly manage and schedule events for maximum efficiency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;
