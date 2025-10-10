
import logo from '../assets/logo.png';
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
   

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="ml-5 navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                         <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? 'text-purple-600 font-semibold underline' : 'text-gray-600'
                    }> Home</NavLink></li>

                    <li><NavLink to="/Apps" className={({ isActive }) =>
                        isActive ? 'text-purple-600 font-semibold underline' : 'text-gray-600'
                    }> Apps</NavLink></li>

                    <li><NavLink to="/InstalledApps" className={({ isActive }) =>
                        isActive ? 'text-purple-600 font-semibold underline' : 'text-gray-600'
                    }> Installation</NavLink></li>


                    </ul>
                </div>

                <Link to='/' className="text-xl flex items-center font-bold"><img className='size-10' src={logo} alt="Logo" /> <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({ isActive }) =>
                        isActive ? 'text-purple-600 font-semibold underline' : 'text-gray-600'
                    }> Home</NavLink></li>

                    <li><NavLink to="/Apps" className={({ isActive }) =>
                        isActive ? 'text-purple-600 font-semibold underline' : 'text-gray-600'
                    }> Apps</NavLink></li>

                    <li><NavLink to="/InstalledApps" className={({ isActive }) =>
                        isActive ? 'text-purple-600 font-semibold underline' : 'text-gray-600'
                    }> Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end mr-5">
                <a href='https://github.com/Tahmid9510' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub />Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;