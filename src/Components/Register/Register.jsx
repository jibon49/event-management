import Navbar from "../Navbar/Navbar";


const Register = () => {
    return (
        <div className="className=mt-20 max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="hero-content flex-col lg:flex-row-reverse mb-20">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body text-[#403F3F]">
                        <div className="form-control">
                            <h1 className="text-center text-4xl font-semibold">Register your account</h1>
                            <hr className="my-12" />
                            <label className="label">
                                <span className="text-xl font-semibold">Your Name</span>
                            </label>
                            <input type="text" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo url" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Enter your email" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control mt-6">
                            <div className="flex items-center gap-2">
                            <input type="checkbox" className="checkbox" />
                            <p className="text-[#706F6F]">Accept Term & Conditions</p>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;