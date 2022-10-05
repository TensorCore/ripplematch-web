import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar mx-auto max-w-7xl px-4 sm:px-6 relative z-50 justify-between py-8">
            <div className="navbar-start">
                <a className="btn btn-ghost normal-case text-2xl lg:btn-wide">
                    <span>RIPPLE</span>
                    <span className="text-primary">MATCH</span>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>About</a></li>
                    <li><a>Process</a></li>
                    <li><a>Message Help</a></li>
                    <li><a>Resume Tips</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn hover:btn-secondary lg:btn-wide">Get Started</a>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Information</a></li>
                        <li><a>Process</a></li>
                        <li><a>Message Help</a></li>
                        <li><a>Resume Tips</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;