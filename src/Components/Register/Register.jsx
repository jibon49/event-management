import { useContext, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Register = () => {

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photoUrl = form.get('photoUrl');


        console.log(passwordRegex.test(password));

        if (password.length > 6) {
            if (passwordRegex.test(password)) {
                createUser(email, password, name, photoUrl)
                    .then(result => {
                        console.log(result)
                        if (result) {
                            navigate('/')
                            toast('Account Registration Successful')
                        }

                    })
                    .catch(error => {
                        console.error(error)

                    })
            }
            else{
                toast.error("Password must be contain at least one uppercase letter, one lowercase letter, one digit, and one special character.")
            }
        }
        else {
            toast.error("password must be 6 character long")
        }
    }



    return (
        <div className="className=mt-20 max-w-6xl mx-auto">
            <Navbar></Navbar>
            <div className="hero-content flex-col lg:flex-row-reverse mb-20">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body text-[#403F3F]">
                        <div className="form-control">
                            <h1 className="text-center text-4xl font-semibold">Register your account</h1>
                            <hr className="my-12" />
                            <label className="label">
                                <span className="text-xl font-semibold">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photoUrl" placeholder="Photo url" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="text-xl font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered bg-[#F3F3F3]" required />
                        </div>
                        <div className="form-control mt-6">
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="checkbox" />
                                <p className="text-[#706F6F]">Accept Term & Conditions</p>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;