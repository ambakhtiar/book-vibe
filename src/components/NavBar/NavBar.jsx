import { NavLink } from "react-router-dom";

const NavBar = () => {
    const link = (
        <div className="flex flex-col md:flex-row gap-4">
            <li><NavLink to="/" className={({ isActive }) => isActive
                ? "text-green-500 border-2 border-green-500 font-semibold"
                : "text-black"
            }>Home</NavLink></li>
            <li><NavLink to="/listedBooks" className={({ isActive }) => isActive
                ? "text-green-500 border-2 border-green-500 font-semibold"
                : "text-black"
            }>Listed Books</NavLink></li>
            <li><NavLink to="/statistic" className={({ isActive }) => isActive
                ? "text-green-500 border-2 border-green-500 font-semibold"
                : "text-black"
            }>Statistic</NavLink></li>
        </div>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
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
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {link}
                        <a className="btn btn-primary">Sign In</a>
                        <a className="btn btn-accent">Sign Up</a>
                    </ul>
                </div>
                <div className="hidden md:flex gap-4">
                    <a className="btn btn-primary">Sign In</a>
                    <a className="btn btn-accent">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;