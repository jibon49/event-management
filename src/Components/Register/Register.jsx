import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from "react-router-dom";


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
            else {
                toast.error("Password must be contain at least one uppercase letter, one lowercase letter, one digit, and one special character.")
            }
        }
        else {
            toast.error("password must be 6 character long")
        }
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className="className=mt-20 max-w-6xl mx-auto">
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
                                <p className="font-semibold text-center mt-7">Already have an account ? <span className="text-blue-500"><NavLink to='/login'>Login</NavLink></span></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-blue-500 text-white">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;