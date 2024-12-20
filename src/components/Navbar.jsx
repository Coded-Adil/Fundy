import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log("User: ", user?.photoURL);
    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/donate'>Donate</NavLink></li>
            <li><NavLink to='/help'>Help</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
    return (
        <div className="navbar bg-blue-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-xl font-bold">KindWarm</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2 items-center">
                <div>
                    {
                        user && user?.email && user?.photoURL ? (<div>
                            <img className="h-10 object-cover w-10 rounded-full" src={user?.photoURL} alt="" />
                        </div>) : (<img className="max-w-10 rounded-full" src={userIcon} alt="" />)
                    }
                </div>
                {
                    user && user?.email ? (<button onClick={logOut} className="btn px-6 rounded-none">Log-Out</button>) : (<Link to='/auth/login' className="btn px-6 rounded-none">Login</Link>)
                }

            </div>
        </div>
    );
};

export default Navbar;