import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../../firebase_config";

const Login = () => {

    

    const { logIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');



        logIn(email, password)
            .then(result => {
                console.log(result)


                navigate(location?.state ? location.state : '/')
                toast('Login successful')



            })
            .catch(error => {
                console.error(error)
                if (error.message === 'Firebase: Error (auth/invalid-login-credentials).') {
                    toast.error('Invalid Email or Password')
                }

            })

    }

    const auth = getAuth(app)

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
          .then((result) => {
            const user = result.user;
            navigate(location?.state ? location.state : '/')
            console.log("Google Sign-In Successful", user);
            toast('Google Sign-In Successful');
          })
          .catch((error) => {
            console.error("Google Sign-In Error:", error);
            toast.error('Google Sign-In Error');
          });
      };



    return (
        <div>
            <Navbar></Navbar>
            <div className="className=mt-20 max-w-6xl mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse mb-20">
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body text-[#403F3F]">
                            <div className="form-control">
                                <h1 className="text-center text-4xl font-semibold">Login your account</h1>
                                <hr className="my-12" />
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
                                <button className="btn bg-blue-500 text-white">Login</button>
                            </div>

                            <p className="font-semibold text-center mt-7">Don’t Have An Account ? <span className="text-blue-500"><NavLink to='/register'>Register</NavLink></span></p>
                        </form>
                        <div className="p-10 w-2/3 mx-auto mt-6">
                            <button onClick={handleGoogleSignIn} className=" btn btn-outline w-full mb-2">
                                <FaGoogle className=' text-blue-500 text-lg'></FaGoogle>Login with
                                Google
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Login;