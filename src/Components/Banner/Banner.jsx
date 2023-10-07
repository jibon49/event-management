import Navbar from "../Navbar/Navbar";
import banner from '../../assets/tech1.jpg'


const Banner = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-bold text-white">Where Innovation Meets Celebration</h1>
                        <p className="mb-5">Elevate Your Tech and Gaming Events with Expert Management</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;