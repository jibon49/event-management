import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-white p-5">
            <img className="max-h-[90vh] mx-auto" src="/public/notfound.jpg" alt="" />
            <NavLink to="/"><button className=" btn bg-blue-500 text-white justify-center flex mx-auto">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;