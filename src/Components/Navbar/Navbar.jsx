
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";




const Navbar = () => {

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/registration'>Event Registration</Link></li>
        <li><Link to='/profile'>Profile</Link></li>

    </>

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (


        <div className="navbar bg-blue-200 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">TechByte</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex items-center">
                            <div className="avatar">
                                <div className="w-10 mr-2 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <p>{user.displayName}</p>
                            <button onClick={handleLogout} className="btn bg-blue-500 border-none text-white ml-1">Logout</button>
                        </div> :
                        <div>
                            <NavLink to='/login'><button className="btn">Login</button></NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;